import React, { Component } from "react";
import PropTypes from "prop-types";

const cycles = pagesCount => pagesCount - 1;

const snap = (value, pagesCount) =>
  value +
  Math.sin(2 * Math.PI * value * cycles(pagesCount) + Math.PI) *
    0.16 /
    cycles(pagesCount);

const pageProgress = (progress, pagesCount, pageIndex) =>
  Math.max(
    1 -
      Math.abs(pageIndex / cycles(pagesCount) - progress) * cycles(pagesCount),
    0
  );

class Scroller extends Component {
  static propTypes = {
    pagesData: PropTypes.array.isRequired,
    renderPage: PropTypes.func.isRequired,
    addContainerProps: PropTypes.func,
    containerClassName: PropTypes.string,
    scrollingBackgroundClassName: PropTypes.string,
    scrollingPixelsPerPage: PropTypes.number
  };

  static defaultProps = {
    containerClassName: "",
    scrollingBackgroundClassName: "",
    scrollingPixelsPerPage: 1000,
    addContainerProps: () => {}
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
      scrollingPixelsPerPage,
      addContainerProps
    } = this.props;

    const { progress } = this.state;

    const pagesCount = pagesData.length;

    const scrollerStyle = {
      height: pagesCount * scrollingPixelsPerPage
    };
    const containerStyle = {
      position: "fixed",
      overflow: "hidden"
    };
    const containerProps = {
      style: containerStyle,
      className: containerClassName
    };

    const normalizedProgress = snap(progress, pagesCount);
    const pagesProgress = pagesData.map((data, index) =>
      pageProgress(normalizedProgress, pagesCount, index)
    );
    const activePageIndex = Math.floor((pagesCount - 1) * progress + 0.5);

    return (
      <div className={scrollingBackgroundClassName} style={scrollerStyle}>
        <div
          {...containerProps}
          {...addContainerProps({
            ...containerProps,
            totalProgress: normalizedProgress,
            pagesProgress,
            activePageIndex
          })}
          ref={c => (this.containerRef = c)}
        >
          {this.renderChildren({ pagesProgress })}
        </div>
      </div>
    );
  }

  renderChildren({ pagesProgress }) {
    const { pagesData, renderPage } = this.props;

    return pagesData.map((data, index) => {
      return renderPage({
        data,
        index,
        pageProgress: pagesProgress[index]
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
