import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="row">
          <div className="elementor-video"> 
            <video
              src="//cdnm.myracehorse.com/wp-content/uploads/2025/01/MyRacehorse-Home-Header-Video-8.mp4"
              autoplay=""
              loop=""
              muted="muted"
              controlslist="nodownload"
            ></video>
        </div>
      </div>
      <div className="row">
        <div className="text-center">
          <span className="dicoverFont">DISCOVER THE</span>
          <span className="northwellHeading"> Thrill</span>
        </div>
      </div>
    </header>
  );
};
