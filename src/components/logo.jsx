import React from "react";

export const Logo = (props) => {
  return (
    <div id="logo-section" className="text-center py-4">
      <div className="container">
        {/* Row with five logos, each in its own column */}
        <div className="row align-items-center mLeftTop">
          <div className="col-md-2 offset-md-1 text-center mb-3 mLeftTop">
            <img 
              src="//cdnm.myracehorse.com/wp-content/uploads/2021/08/brand-logo.png" 
              width={100} 
              height={100}
              alt="Logo 1"
              className="img-fluid"
            />
          </div>
          <div className="col-md-2 text-center mb-3">
            <img 
              src="//cdnm.myracehorse.com/wp-content/uploads/2018/09/tdn.png" 
              width={164} 
              height={100}
              alt="Logo 2"
              className="img-fluid"
            />
          </div>
          <div className="col-md-2 text-center mb-3">
            <img 
              src="//cdnm.myracehorse.com/wp-content/uploads/2024/05/download.png" 
              width={180} 
              height={100}
              alt="Logo 3"
              className="img-fluid"
            />
          </div>
          <div className="col-md-2 text-center mb-3">
            <img 
              src="//cdnm.myracehorse.com/wp-content/uploads/2024/05/Screenshot-2024-05-22-at-11.46.13 AM-e1716392842686.png" 
              width={170} 
              height={100}
              alt="Logo 4"
              className="img-fluid"
            />
          </div>
          <div className="col-md-2 text-center mb-3">
            <img 
              src="//cdnm.myracehorse.com/wp-content/uploads/2021/08/brand-logo-6.png" 
              width={170} 
              height={100}
              alt="Logo 5"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;