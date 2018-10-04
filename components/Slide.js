import React from "react";

const Slide = ({ image }) => {
  const styles = {
    // backgroundImage: `url("img/${image}.jpg")`,
    backgroundImage: `url("${image}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%",
    height: "200px",
    width: "25%",
    // width: "calc(25% - 10px)",
    // margin: "0 5px",
    display: 'inline-block'
  };
  return <div className="slide" style={styles} />;
};

export default Slide;
