import React from "react";
import '../App.css'

export const Discover = (props) => {
  return (
    <div className="text-center">
      <div className="container">
        <div className="row discover">
          For centuries, racehorse ownership has been reserved for the
          ultra-wealthy, but what about the other 99%? At MyRacehorse, we are
          changing the game by offering real racehorse ownership to everyone
          with shares starting under $100. This isn’t just about fractional
          ownership or numbers on an app, it’s about providing authentic and
          immersive owner experiences, insider access, and a gateway into the
          lifestyle of being a racehorse owner. With nearly 100,000 registered
          users worldwide, we are already making waves with some big trainers
          and even bigger wins – including the 2020 Kentucky Derby with
          Authentic. So go ahead, take back the ‘Sport of Kings’ this is your
          arena now. Click here to register today and start your journey to
          racehorse ownership.
        </div>
        <div className="social-icons mt-4 d-flex justify-content-center gap-3 flex-wrap mtb-20">
          <a
            href="https://www.facebook.com/myracehorse"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn bg-primary text-white d-flex align-items-center justify-content-center"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com/myracehorse"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn bg-info d-flex align-items-center justify-content-center"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/myracehorse"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn bg-danger text-muted d-flex align-items-center justify-content-center"
          >
            <i className="fa fa-youtube" ></i> {/* Updated to Font Awesome */}
          </a>
          <a
            href="https://www.instagram.com/myracehorse"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn bg-success text-danger d-flex align-items-center justify-content-center"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
