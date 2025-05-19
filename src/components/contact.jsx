import React from "react";
import { Link, useNavigate } from 'react-router-dom';


export const Contact = (props) => {
  const navigate = useNavigate()

  return (
    <div>
      <div id="contact">
        <div className="container">
          {/* Links with separator lines and left margin */}
          <div className="row mb-3">
            <div className="col-md-12 text-center" style={{ paddingLeft: "50px", cursor: 'pointer'}}>
              <span onClick={() => navigate('/privacy')}  className="text-white small text-decoration-none">Privacy Policy</span>
              <span className="text-white me-2"> | </span>
              <span onClick={() => navigate('/terms')} className="text-white small text-decoration-none" >TOS</span>
              <span className="text-white me-2"> | </span>
              <span onClick={() => navigate('/contact')} className="text-white small text-decoration-none">Contact</span>
              <span className="text-white me-2"> | </span>
              <span onClick={() => navigate('/about')} className="text-white small text-decoration-none">About Us</span>
              <span className="text-white me-2"> | </span>
              <span onClick={() => navigate('/faqs')} className="text-white small text-decoration-none">FAQs</span>
              <span className="text-white me-2"> | </span>
              <span onClick={() => navigate('/jobs')} className="text-white small text-decoration-none">Jobs</span>
              <span className="text-white me-2"> | </span>
              <span onClick={() => navigate('/gift-cards')} className="text-white small text-decoration-none">Gift Cards</span>
            </div>
          </div>
          
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <img src="//cdnm.myracehorse.com/wp-content/themes/myracehorse/images/logo.svg" width={300} />
                  </li>
                  <li>
                    <a target="_blank" href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
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

