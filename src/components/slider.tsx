import React, { Component } from "react";
// import Swipe from "react-easy-swipe";
import Slider from "react-slick";

// const slide = (name: string) => (
//   <div className="slide">
//     <p>{name}</p>
//   </div>
// );

interface SlideInfo {
  name: string | undefined;
}

class Slide extends Component {
  public props: SlideInfo;

  constructor(props: SlideInfo) {
    super(props);
    this.props = props;
  }

  render() {
    return <p>{this.props.name}</p>;
  }
}

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider className="slider" {...settings}>
          {["hello", "world", "!!!"].map((name, index) => (
            <div key={name}>
              <Slide name={name} />
            </div>
          ))}
        </Slider>
        <Slider className="slider">
          {["hello", "world", "!!!"].map((name, index) => (
            <div key={name}>
              <Slide name={name} />
            </div>
          ))}
        </Slider>
        <Slider className="slider">
          {["hello", "world", "!!!"].map((name, index) => (
            <div key={name}>
              <Slide name={name} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
