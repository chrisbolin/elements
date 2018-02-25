import React, { Component } from "react";
import PropTypes from "prop-types";

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
  static propTypes = {
    pagesData: PropTypes.array.isRequired,
    renderPage: PropTypes.func.isRequired,
    containerClassName: PropTypes.string,
    scrollingBackgroundClassName: PropTypes.string,
    scrollingPixelsPerPage: PropTypes.number
  };

  static defaultProps = {
    containerClassName: "",
    scrollingBackgroundClassName: "",
    scrollingPixelsPerPage: 1000
  };

  constructor() {
    super();
    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScrollThrottled);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScrollThrottled);
  }

  render() {
    const {
      pagesData,
      containerClassName,
      scrollingBackgroundClassName,
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
      <div className={scrollingBackgroundClassName} style={scrollerStyle}>
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

    const normalizedProgress = snap(progress, pagesData.length);

    return pagesData.map((data, index) => {
      return renderPage({
        data,
        index,
        progress: pageProgress(normalizedProgress, pagesData.length, index)
      });
    });
  }

  onScrollThrottled = () => {
    window.requestAnimationFrame(this.onScroll);
  };

  onScroll = () => {
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
  };
}

export default Scroller;
