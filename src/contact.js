import React, { Component } from "react";

const lightestgrey = "hsl(0, 0%, 94%)";
const size = "120px";
const canvasHeight = `400px`;

class Contact extends Component {
  render = () => {
    const { n, stylize, ...divProps } = this.props;
    return (
      <div className="contact" {...divProps}>
        {Array(n)
          .fill(null)
          .map((_, i) => <div style={stylize(i)} key={i} />)}
      </div>
    );
  };
}

export const Contact01 = () => (
  <Contact
    n={2}
    stylize={i => ({
      position: "absolute",
      top: `calc((${canvasHeight} / 2) - (${size} / 2))`,
      left: `calc(${180 * i + 520}px + 50%)`,
      transform: `scale(${10 + 0.3 * i})`,
      filter: `blur(${i * 8 + 1}px)`,
      height: size,
      width: size,
      borderRadius: size,
      backgroundColor: lightestgrey,
      mixBlendMode: "difference"
    })}
  />
);

export const Contact02 = () => (
  <Contact
    n={2}
    stylize={i => ({
      position: "absolute",
      top: `calc((${canvasHeight} / 2) - (${size} / 2))`,
      left: `calc(${100 * i + 320}px + 50%)`,
      transform: `scale(${10 + 0.3 * i})`,
      filter: `blur(${i + 1}px)`,
      height: size,
      width: size,
      borderRadius: size,
      backgroundColor: lightestgrey,
      mixBlendMode: "difference"
    })}
  />
);

export const Contact03 = () => (
  <Contact
    n={7}
    stylize={i => ({
      position: "absolute",
      top: `calc((${canvasHeight} / 2) - (${size} / 2))`,
      left: `calc(${120 * i - 7 * i * i - 280}px + 50%)`,
      transform: `scale(${1 - 0.155 * i})`,
      height: size,
      width: size,
      borderRadius: size,
      backgroundColor: "hsl(0, 0%, 24%)",
      filter: `blur(${i * 2 + 1}px)`
    })}
  />
);

export const Contact04 = () => (
  <Contact
    n={12}
    stylize={i => ({
      position: "absolute",
      top: `calc((${canvasHeight} / 2) - (${size} / 2))`,
      left: `calc(${47 * i - 320}px + 50%)`,
      transform: `scale(${2 - 0.3 * i})`,
      height: size,
      width: size,
      borderRadius: size,
      backgroundColor: "hsl(0, 0%, 50%)",
      mixBlendMode: "difference",
      filter: `blur(${i + 1}px)`
    })}
  />
);

export const Contact05 = () => (
  <Contact
    n={6}
    stylize={i => ({
      position: "absolute",
      top: `calc((${canvasHeight} / 2) - (${size} / 2))`,
      left: `calc(${47 * i - 170}px + 50%)`,
      height: size,
      width: size,
      borderRadius: size,
      backgroundColor: "hsl(0, 0%, 50%)",
      mixBlendMode: "color-burn",
      filter: `blur(${i + 1}px)`,
      transform: `scale(${2 - 0.8 * i})`
    })}
  />
);

export const Contact06 = () => (
  <Contact
    n={9}
    stylize={i => ({
      position: "absolute",
      top: `calc((${canvasHeight} / 2) - (${size} / 2))`,
      left: `calc(${47 * i - 320}px + 50%)`,
      height: size,
      width: size,
      borderRadius: size,
      backgroundColor: "hsl(0, 0%, 50%)",
      mixBlendMode: "difference",
      filter: `blur(${i + 1}px)`,
      transform: `scale(${2 - 0.9 * i})`
    })}
  />
);

export const Contact07 = () => (
  <Contact
    n={10}
    stylize={i => ({
      position: "absolute",
      top: `calc((${canvasHeight} / 2) - (${size} / 2))`,
      left: `calc(${5 * i - 70}px + 50%)`,
      height: size,
      width: size,
      borderRadius: size,
      backgroundColor: "hsl(0, 0%, 50%)",
      mixBlendMode: "difference",
      filter: `blur(${i + 1}px)`,
      transform: `scale(${2 - 0.8 * i})`
    })}
  />
);

export const Contact08 = () => (
  <Contact
    n={6}
    stylize={i => ({
      position: "absolute",
      top: `calc((${canvasHeight} / 2) - (${size} / 2))`,
      left: `calc(${47 * i - 180}px + 50%)`,
      height: size,
      width: size,
      borderRadius: size,
      backgroundColor: "hsl(0, 0%, 50%)",
      mixBlendMode: "color-burn",
      filter: `blur(${i + 1}px)`,
      transform: `scale(${2 - 0.8 * i})`
    })}
  />
);

export const Contact09 = () => (
  <Contact
    n={10}
    stylize={i => ({
      position: "absolute",
      top: `calc((${canvasHeight} / 2) - (${size} / 2))`,
      left: `calc(${49 * i - 240}px + 50%)`,
      height: size,
      width: size,
      borderRadius: size,
      backgroundColor: "hsl(0, 0%, 50%)",
      mixBlendMode: "color-burn",
      filter: `blur(${i + 1}px)`,
      transform: `scale(${2 - 0.8 * i})`
    })}
  />
);

export const Contact10 = () => (
  <Contact
    n={3}
    stylize={i => ({
      position: "absolute",
      top: `calc((${canvasHeight} / 2) - (${size} / 2))`,
      left: `calc(${100 * i - 100}px + 50%)`,
      transform: `scale(${4 + 0.3 * i - 2 * i * i})`,
      filter: `blur(${i * 8 + 1}px)`,
      height: size,
      width: size,
      borderRadius: size,
      backgroundColor: lightestgrey,
      mixBlendMode: "difference"
    })}
  />
);

export const Contact11 = () => (
  <Contact
    n={4}
    stylize={i => ({
      position: "absolute",
      top: `calc((${canvasHeight} / 2) - (${size} / 2))`,
      left: `calc(${100 * i - 100}px + 50%)`,
      transform: `scale(${1 + 0.3 * i - 2 * i * i})`,
      filter: `blur(${i * 8 + 1}px)`,
      height: size,
      width: size,
      borderRadius: size,
      backgroundColor: lightestgrey,
      mixBlendMode: "difference"
    })}
  />
);

export const Contact12 = () => (
  <Contact
    n={4}
    stylize={i => ({
      position: "absolute",
      top: `calc((${canvasHeight} / 2) - (${size} / 2))`,
      left: `calc(${100 * i - 100}px + 50%)`,
      transform: `scale(${1 + 0.3 * i - 1 * i * i})`,
      filter: `blur(${i * 8 + 1}px)`,
      height: size,
      width: size,
      borderRadius: size,
      backgroundColor: lightestgrey,
      mixBlendMode: "difference"
    })}
  />
);

export const Contact13 = () => (
  <Contact
    n={3}
    stylize={i => ({
      position: "absolute",
      top: `calc((${canvasHeight} / 2) - (${size} / 2))`,
      left: `calc(${100 * i - 200}px + 50%)`,
      transform: `scale(${1 + 0.3 * i - 1 * i * i})`,
      filter: `blur(${i * 3 + 2}px)`,
      height: size,
      width: size,
      borderRadius: size,
      backgroundColor: lightestgrey,
      mixBlendMode: "difference"
    })}
  />
);

export const Contact14 = () => (
  <Contact
    n={3}
    stylize={i => ({
      position: "absolute",
      top: `calc((${canvasHeight} / 2) - (${size} / 2))`,
      left: `calc(${18 * i - 180}px + 50%)`,
      height: size,
      width: size,
      borderRadius: size,
      backgroundColor: "hsl(0, 0%, 30%)",
      mixBlendMode: "difference",
      filter: `blur(${i + 1}px)`,
      transform: `scale(${2 - 0.9 * i})`
    })}
  />
);

export const Contact15 = () => (
  <Contact
    n={3}
    stylize={i => ({
      position: "absolute",
      top: `calc((${canvasHeight} / 2) - (${size} / 2))`,
      left: `calc(${70 * i - 100}px + 50%)`,
      transform: `scale(${4 + 0.3 * i - 2 * i * i})`,
      filter: `blur(${2 * i + 1}px)`,
      height: size,
      width: size,
      borderRadius: size,
      backgroundColor: "hsl(0, 0%, 85%)",
      mixBlendMode: "difference"
    })}
  />
);
