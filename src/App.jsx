import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { Discover } from "./components/Discover";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Winner } from "./components/winner";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./App.css";
import { Offering } from "./components/offering";
import { History } from "./components/history";
import { RaceHorse } from "./components/racehorse";
import { Logo } from "./components/logo";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData)
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Discover />
      <About data={landingPageData.About} />
      <Offering />
      <History />
      <Services data={landingPageData.Services} />
      <Winner />
      <Team data={landingPageData.Team} />      
      <Features data={landingPageData.Features} />
      <Logo data={landingPageData.logo} />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Contact data={landingPageData.Contact} />
      {/* <Logo data={landingPageData.logo}/> */}
    </div>
  );
};

export default App;
