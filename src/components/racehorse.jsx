import { Image } from "./image";
import React from "react";

export const RaceHorse = (props) => {
  return (
    <div id="" className="text-center">
      <div className="container">
        <div className="section-title">
          <div className="text-center">
            <h2>MYRACEHORSE  <span className="northwellHeading fs-40">Global</span></h2>
          </div>
        </div>
        <div className="row text-center">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
              
          </div>
        </div>
      </div>
    </div>
  );
};

