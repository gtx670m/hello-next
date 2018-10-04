import React, { Component } from "react";
import ImagesGallery from "../components/ImagesGallery";
import LeftArrow from "../components/LeftArrow";
import RightArrow from "../components/RightArrow";
import Slide from "../components/Slide";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://3.bp.blogspot.com/-VU18UFZdWV4/WpariMdghgI/AAAAAAAAuWY/3piVROv-QcUSvSYb84ykjwxQ8pkz-EciwCLcBGAs/s640/hinh-anh-girl-sinh-2000-4.jpg",
        "https://thechive.files.wordpress.com/2017/10/girls-tank-tops-sexy-600-25.jpg",
        "https://3.bp.blogspot.com/-VU18UFZdWV4/WpariMdghgI/AAAAAAAAuWY/3piVROv-QcUSvSYb84ykjwxQ8pkz-EciwCLcBGAs/s640/hinh-anh-girl-sinh-2000-4.jpg",
        "https://thechive.files.wordpress.com/2017/10/girls-tank-tops-sexy-600-25.jpg",
        "https://thechive.files.wordpress.com/2017/10/girls-tank-tops-sexy-600-25.jpg",
      ],
      currentIndex: 0,
      translateValue: 0
    };
  }

  goToPrevSlide = () => {};

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
            // <ImagesGallery key={i}>
            //   <img src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3914830/910/1365/m1/fpnw/wm1/lgzygyramchqtufpvrocuywsvglqyimqtv9lxxzxz7ydo8jzrutaxspfdcd5wwoq-.jpg" />
            //   <img src="https://thechive.files.wordpress.com/2017/10/girls-tank-tops-sexy-600-25.jpg" />
            //   <img src="https://3.bp.blogspot.com/-VU18UFZdWV4/WpariMdghgI/AAAAAAAAuWY/3piVROv-QcUSvSYb84ykjwxQ8pkz-EciwCLcBGAs/s640/hinh-anh-girl-sinh-2000-4.jpg" />
            //   <img src="https://thuthuattienich.com/wp-content/uploads/2013/06/girl-cute-10.jpg" />
            //   <p>
            //     <img src="http://2sao.vietnamnetjsc.vn/images/2017/12/18/07/09/happy-polla-4.jpg" />
            //   </p>
            // </ImagesGallery>
          ))}
        </div>
        
        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}

export default Index;
