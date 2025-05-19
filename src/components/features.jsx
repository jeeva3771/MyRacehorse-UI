import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <div class="text-center">
            <h2>MYRACEHORSE  <span class="northwellHeading fs-40 my-4">Global</span></h2>
          </div>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-4">
                  <img src={d.url} />
                  <h3>{d.title}</h3>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
