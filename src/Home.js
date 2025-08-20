import React from "react";
import Header from "./Components/Header/Header";
import Nav from "./Components/nav/nav";
import About from "./Components/About/about";
import Experience from "./Components/experience/experience";
import Services from "./Components/services/services";
import Portfolio from "./Components/portfolio/portofolio";
import Testimonial from "./Components/Testimonial/testimonial";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/Footer/Footer";


const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
