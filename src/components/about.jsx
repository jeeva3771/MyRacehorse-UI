import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        {/* Row with Two Images */}
        <div className="row g-3 align-items-center">
          <div className="col-12 col-md-6">
            <img
              src="http://cdnm.myracehorse.com/wp-content/uploads/2023/04/MRH-Mini-Module_Desktop.png"
              className="img-fluid"
              alt="Mini Module"
            />
          </div>
          <div className="col-12 col-md-6">
            <img
              src="//cdnm.myracehorse.com/wp-content/uploads/2024/03/Events-Module_2.png"
              className="img-fluid"
              alt="Events Module"
            />
          </div>
        </div>

        {/* Full-width Video Below */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="ratio ratio-16x9">
              <video
                className="w-100 video cursor-pointer"
                src="https://cdnb-media.myracehorse.com/blog/video/MRH2023Commercial2_1674759600059/MP4/MRH2023Commercial2_1674759600059.mp4"
                poster="https://cdnm.myracehorse.com/wp-content/uploads/2023/10/0000172595_1.jpg"
                controls
                controlsList="nodownload"
                loop
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

