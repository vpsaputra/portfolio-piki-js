import React from "react";
import "./home.css";
import "@components/css/animation.css";
import astronaut from "@assets/astronaut.svg";
import earth from "../assets/earth.svg";
import moon from "../assets/moon.svg";
import rocket from "../assets/rocket.svg";
import { Player } from "@lottiefiles/react-lottie-player";
import scrollAnimation from "@assets/lottiefiles/scroll.json";
import SocialButtonGroup from "./SocialButtonGroup";

const Home = () => {
  return (
    <section className="bg-purple mt-2 h-screen" id="home">
      <div className="stars">
        <div className="central-body">
          <div className="absolute top-16 md:top-12 left-0 md:left-2 md:text-cyan-400 cust-bg-transparent block w-full md:w-1/2 rounded-md p-1 md:p-4 z-50">
            <h1 class="text-lg lg:text-4xl font-bold mb-3">
              Hi, I'm Piki Saputra, a Junior Web Developer
            </h1>

            {/* Horizontal Divider  */}
            <div class="w-full border-t border-gray-300 my-4"></div>
            <p class=" md:text-lg mb-3">
              I create responsive and user-friendly websites with a focus on
              clean code and modern design.
            </p>
            <a
              href="#project"
              class="cta-button bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 mb-6"
            >
              View My Work
            </a>
            <div class="intro max-w-lg mx-auto mb-6">
              <p class="text-base md:text-lg ">
                With a passion for coding and a keen eye for design, I build web
                applications that not only look good but also provide an
                excellent user experience. I'm eager to apply my skills and
                learn new technologies in a dynamic work environment.
              </p>

              <SocialButtonGroup />
            </div>
          </div>

          <Player
            src={scrollAnimation}
            loop
            autoplay
            className="lottie-scroll"
          />
        </div>
        <div className="objects">
          <img className="object_rocket" src={rocket} width="40px" />
          <div className="earth-moon">
            <img className="object_earth w-1/3" src={earth} />
            <img className="object_moon" src={moon} width="80px" />
          </div>
          <div className="box_astronaut">
            <img className="object_astronaut" src={astronaut} width="140px" />
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
