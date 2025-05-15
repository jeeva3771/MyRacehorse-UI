import React from "react"
import '../App.css'

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="navbar-header">

        <a className="navbar-brand page-scroll" href="#page-top">
          <img
            className="logo logoImg"
            src="//cdnm.myracehorse.com/wp-content/themes/myracehorse/images/logo_black.png"
          />
        </a>
      </div>

      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#features" className="page-scroll">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="page-scroll">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="page-scroll">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="page-scroll">
              Gallery
            </a>
          </li>
          <li>
            <a href="#testimonials" className="page-scroll">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#team" className="page-scroll">
              Team
            </a>
          </li>
          <li>
            <a href="#contact" className="page-scroll">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
