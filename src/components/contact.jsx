import React from "react";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          {/* Links with separator lines and left margin */}
          <div className="row mb-3">
            <div className="col-md-12 text-center" style={{ paddingLeft: "50px" }}>
              <span href="/privacy" className="text-white small text-decoration-none">Privacy Policy</span>
              <span className="text-white mx-2"> | </span>
              <span href="/terms" className="text-white small text-decoration-none">TOS</span>
              <span className="text-white mx-2"> | </span>
              <span href="/contact" className="text-white small text-decoration-none">Contact</span>
              <span className="text-white mx-2"> | </span>
              <span href="/about" className="text-white small text-decoration-none">About Us</span>
              <span className="text-white mx-2"> | </span>
              <span href="/faqs" className="text-white small text-decoration-none">FAQs</span>
              <span className="text-white mx-2"> | </span>
              <span href="/jobs" className="text-white small text-decoration-none">Jobs</span>
              <span className="text-white mx-2"> | </span>
              <span href="/gift-cards" className="text-white small text-decoration-none">Gift Cards</span>
            </div>
          </div>
          
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <img src="//cdnm.myracehorse.com/wp-content/themes/myracehorse/images/logo.svg" width={300}/>
                  </li>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; Copyright 2025 MyRacehorse
          </p>
        </div>
      </div>
    </div>
  );
};

