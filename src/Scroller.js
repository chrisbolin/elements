import React, { Component } from "react";

const cycles = totalPages => totalPages - 1;

const snap = (value, totalPages) =>
  value +
  Math.sin(2 * Math.PI * value * cycles(totalPages) + Math.PI) *
    0.155 /
    cycles(totalPages);

const pageProgress = (progress, totalPages, pageIndex) =>
  Math.max(
    1 -
      Math.abs(pageIndex / cycles(totalPages) - progress) * cycles(totalPages),
    0
  );

class Scroller extends Component {
  constructor() {
    super();
    this.state = {
      progress: 0
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    const {
      pagesData,
      containerClassName,
      backgroundClassName,
      scrollingPixelsPerPage
    } = this.props;

    const scrollerStyle = {
      height: pagesData.length * scrollingPixelsPerPage
    };
    const containerStyle = {
      position: "fixed",
      overflow: "hidden"
    };

    return (
      <div className={backgroundClassName} style={scrollerStyle}>
        <div
          style={containerStyle}
          ref={c => (this.containerRef = c)}
          className={containerClassName}
        >
          {this.renderChildren()}
        </div>
      </div>
    );
  }

  renderChildren() {
    const { pagesData, renderPage } = this.props;
    const { progress } = this.state;
    return pagesData.map((data, index) => {
      return renderPage({
        data,
        index,
        progress: pageProgress(
          snap(progress, pagesData.length),
          pagesData.length,
          index
        )
      });
    });
  }

  onScroll() {
    const { scrollingPixelsPerPage, pagesData } = this.props;
    const scrollTop = window.scrollY;

    const progress =
      scrollTop /
      (pagesData.length * scrollingPixelsPerPage - window.innerHeight);

    const containerHeight =
      this.containerRef.scrollHeight - this.containerRef.clientHeight;

    this.setState({ progress });

    this.containerRef.scrollTop =
      containerHeight * snap(progress, pagesData.length);
  }
}

export default Scroller;
