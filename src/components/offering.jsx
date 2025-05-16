import React from "react";
import "../App.css";

export const Offering = (props) => {
  return (
    <div id="Offering">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <ul>
              <img
                loading="lazy"
                decoding="async"
                src="//cdnm.myracehorse.com/wp-content/uploads/2023/05/Featured_Offering-header-website.png"
                className="attachment-large size-large wp-image-15030 img-1"
              />
              <div className="offering-text">
                <strong>INTO MISCHIEF Colt<br /> headed to “COACH” D. WAYNE LUKAS<br /> </strong> MyRacehorse
                acquired this powerful colt for $450,000 at the 2025 OBS April
                Two Year-old In-Training Sale. He is set to be trained by none
                other than living legend D. Wayne Lukas , who has guided the
                career of the stable’s 2024 Preakness winner, Seize the Grey,
                and 2025 Preakness hopeful, Caldera.
              </div>
              <div className="text-center">
                <div className="btn learnMoreText mt-13">
                    LEARN MORE
                </div>
            </div>
            </ul>
          </div>
          <div className="col-lg-6 col-sm-6">
            <ul>
              <img
                src="//cdnm.myracehorse.com/wp-content/uploads/2025/04/174p-2-4000x2666.jpg"
                className="img-fluid img-2"
                alt="Mini Module"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
