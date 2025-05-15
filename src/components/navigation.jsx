import React from "react";
import "../App.css";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="bg-black p-4 text-center topView">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://myracehorse.dalmoredirect.com/puca-24/"
          className="text-white hover:underline text-sm sm:text-base"
        >
          Full Brother to Kentucky Derby winner and Belmont Stakes Winner Now
          Available
        </a>
      </div>
      <div className="navbar-header">
        <a className="navbar-brand page-scroll" href="#page-top">
          <img
            className="logo logoImg"
            src="//cdnm.myracehorse.com/wp-content/themes/myracehorse/images/logo_black.png"
          />
        </a>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#features" className="page-scroll">
              Buy
            </a>
          </li>
          <li>
            <a href="#about" className="page-scroll">
              Stable
            </a>
          </li>
          <li>
            <a href="#about" className="page-scroll">
              Updates
            </a>
          </li>
          <li>
            <a href="#about" className="page-scroll">
              Perks
            </a>
          </li>
          <li>
            <a href="#about" className="page-scroll">
              Reviews
            </a>
          </li>
          <li>
            <a href="#about" className="page-scroll">
              FAQ
            </a>
          </li>
        </ul>
      </div>

      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#features" className="page-scroll">
              Account
            </a>
          </li>
          <li>
            <a href="#about" className="page-scroll">
              My Horses
            </a>
          </li>
          <li>
            <a href="#services" className="page-scroll">
              Experiences
            </a>
          </li>
          <li>
            <a href="#portfolio" className="page-scroll">
              Gallery
            </a>
          </li>
          <li>
            <a href="#testimonials" className="page-scroll">
              Merchandise
            </a>
          </li>
          <li>
              <a href="#login" className="page-scroll">
                LOGIN
              </a>
            </li>
          <li>
            <a href="#contact" className="page-scroll">
              SIGN UP
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
