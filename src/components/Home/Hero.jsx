import React from "react";
import logo1 from "../../images/alumni-wallpaper.jpg";
import "./CSS/hero.css";
import { Helmet } from 'react-helmet';

const Hero = () => {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" media="screen and (max-width: 768px)" href="CSS/phone.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Dancing+Script&family=Fasthand&family=Italianno&family=Outfit:wght@100;200&family=Rubik+Pixels&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <section className="home">
        <div class="slideshow-container">
          <div class="mySlides fade">
          <img src={logo1} alt="Logo" className="logo" />
          </div>
          <div className="overlay">
            <h1 className="overlay-text">
            Welcome to the Alumni Association Platform
            </h1>
            <p className="overlay-text">
            Strengthen connections, support your alma mater, and advance your
            career with our comprehensive alumni network.
          </p>
      </div>

          </div>
        {/* <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the Alumni Association Platform
          </h1>
          <p className="text-lg mb-8">
            Strengthen connections, support your alma mater, and advance your
            career with our comprehensive alumni network.
          </p>
          <a
            href="#signup"
            className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-lg"
          >
            Get Started
          </a>
        </div> */}
      </section>
    </div>
  );
};

export default Hero;
