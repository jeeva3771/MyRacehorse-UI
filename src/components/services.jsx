import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <div className="text-center">
            <h2>Ownership has its <span className="northwellHeading fs-40">Privileges</span></h2>
          </div>
        </div>
        <div className="row">
          {/* First set of items from props.data */}
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <img src={d.url} width={300} height={200} alt={d.name} />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
            
          {/* Fixed additional items in another row */}
          <div className="col-md-12">
            <div className="row mt-4">
              <div className="col-md-4">
                <img 
                  src="//cdnm.myracehorse.com/wp-content/uploads/2022/04/Layer-11.png" 
                  width={300} 
                  height={200}
                  alt="Service 1"
                  className="img-responsive center-block"
                />
                <div className="service-desc">
                  <h3>Leading TRAINERS DISCOVER</h3>
                </div>
              </div>
              <div className="col-md-4">
                <img 
                  src="//cdnm.myracehorse.com/wp-content/uploads/2024/06/Trainer-Page-Assets-88.png" 
                  width={300} 
                  height={200}
                  alt="Service 2"
                  className="img-responsive center-block"
                />
                <div className="service-desc">
                  <h3>D. Wayne Lukas</h3>
                </div>
              </div>
              <div className="col-md-4">
                <img 
                  src="//cdnm.myracehorse.com/wp-content/uploads/2025/03/Trainer-Page-Assets-97.png" 
                  width={300} 
                  height={200}
                  alt="Service 3"
                  className="img-responsive center-block"
                />
                <div className="service-desc">
                  <h3>Dan Blacker</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};