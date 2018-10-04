import React, { Component } from "react";
// import "../styles/ImagesGallery.css";

class ImagesGallery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    console.log("/////////////////////////////////////////////////////////");
    console.log(children);
    const styles = {
      // backgroundImage: `url(img/${image}.jpg)`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 60%"
    };
    return (
      <div className="slide" style={styles}>
        {children.map(i => i)}
      </div>
    );
  }
}

export default ImagesGallery;
