import React from "react";
import Tilt from "react-tilt";
import Brain from "./Brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{
          max: 55,
          perspective: 750,
          scale: 1.1,
          transition: true,
        }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: "5px" }} src={Brain} alt="Brain" />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
