import React, { Component } from "react";

const cycles = totalChildren => totalChildren - 1;

const snap = (value, totalChildren) =>
  value +
  Math.sin(2 * Math.PI * value * cycles(totalChildren) + Math.PI) *
    0.155 /
    cycles(totalChildren);

const childProgress = (progress, totalChildren, childIndex) =>
  Math.max(
    1 -
      Math.abs(childIndex / cycles(totalChildren) - progress) *
        cycles(totalChildren),
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
      sectionsData,
      containerClassName,
      backgroundClassName,
      scrollingPixelsPerSection
    } = this.props;

    const scrollerStyle = {
      height: sectionsData.length * scrollingPixelsPerSection
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
    const { sectionsData, renderSection } = this.props;
    const { progress } = this.state;
    return sectionsData.map((data, index) => {
      return renderSection({
        data,
        index,
        childProgress: childProgress(
          snap(progress, sectionsData.length),
          sectionsData.length,
          index
        )
      });
    });
  }

  onScroll() {
    const { scrollingPixelsPerSection, sectionsData } = this.props;
    const scrollTop = window.scrollY;

    const progress =
      scrollTop /
      (sectionsData.length * scrollingPixelsPerSection - window.innerHeight);

    const containerHeight =
      this.containerRef.scrollHeight - this.containerRef.clientHeight;

    this.setState({ progress });

    this.containerRef.scrollTop =
      containerHeight * snap(progress, sectionsData.length);
  }
}

export default Scroller;
