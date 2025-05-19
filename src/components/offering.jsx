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
            <div>
              <img
                src="//cdnm.myracehorse.com/wp-content/uploads/2025/04/174p-2-4000x2666.jpg"
                className="img-fluid img-2"
                alt="Mini Module"
              />
            </div>
          </div>
        </div>

        <div className="row offering">
          <div className="col-lg-6 col-sm-6">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="item active">
                  <img src="//cdnm.myracehorse.com/wp-content/uploads/2021/08/dummy-user-pic.jpg" alt="Los Angeles" className="wid-100per"/>
                  <div className="carousel-caption">
                    <h3>THANK GOD FOR MRH</h3>
                    <p>MRH has brought me such joy! Yes it is about the Winning but it is more about belonging to a warm,
                      loving, horse community. Impressive how much care and time they give our horses.</p>
                    <cite>
                      <b className="d-block bg-primary text-white fw-bold px-2 py-1 rounded">Suzan McGovern</b>
                      <i className="pd-left">Owner</i>
                    </cite>
                  </div>
                </div>

                <div className="item">
                  <img src="//cdnm.myracehorse.com/wp-content/uploads/2021/08/dummy-user-pic.jpg" alt="Los Angeles" className="wid-100per" />
                  <div className="carousel-caption">
                    <h3>Dubai trip was top notch!</h3>
                    <p> The trip for the Dubai World Cup was a great experience. The races and venue were world class, the
                      arrangements were expertly organized,
                      and the tours/experiences top notch. Looking forward to other trips in the future.</p>
                    <cite>
                      <b className="d-block bg-primary text-white fw-bold px-2 py-1 rounded">David V.</b>
                      <i className="pd-left">Owner</i>
                    </cite>
                  </div>
                </div>

                <div className="item">
                  <img src="//cdnm.myracehorse.com/wp-content/uploads/2021/08/dummy-user-pic.jpg" alt="Los Angeles" className="wid-100per" />
                  <div className="carousel-caption">
                    <h3>MyRacehorse is fantastic!</h3>
                    <p> I have been involved for at least 5 years now , and have purchased shares in many, many ,
                      many horses! This group is the best with great people working for it and the provide so many hands on And
                      learning opportunities for us. This is an opportunity to learn so much and
                      actually participate in horse racing’s excitement and thrills of ownership!</p>
                    <cite>
                      <b className="d-block bg-primary text-white fw-bold px-2 py-1 rounded">Linda R.</b>
                      <i className="pd-left">Owner</i>
                    </cite>
                  </div>
                </div>

              </div>

              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-sm-8">
            <img
              src="//cdnm.myracehorse.com/wp-content/uploads/2022/04/Layer-5.jpg"
              className="img-fluid img-3"
              alt="Events Module"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
