import React from "react";
import { Link } from "react-scroll";
import {
  BiAward,
  BiBriefcase,
  BiClipboard,
  BiHomeAlt,
  BiUser,
} from "react-icons/bi";
import Marquee from "./Marquee";
import HeroPic from "/hero-image.png";

const Header = () => {
  return (
    <section
      className="section shadow-slate-950 shadow-inner mx-auto"
      id="home"
    >
      {/* <h1 className="text-hero">WEB DEVELOPER</h1>
      <h1 className="text-hero text-gradient font-ibm">WEB DEVELOPER</h1> */}
      <h1 className="text-hero background-clip-text font-leaguespartan">
        PIKI SAPUTRA
      </h1>

      <div className="flex flex-col md:flex-row portfolio-items md:items-end container-hero text-[#ffac42] py-2 justify-center space-x-4">
        {/* <h1 className="w-1/3 text-right text-lg">WEB DEVELOPER</h1> */}
        <img
          src={HeroPic}
          alt=""
          srcset=""
          className=" md:w-1/3 transparent-hero"
        />
        <h1 className="w-full h-full">
          Junior Web Developer yang sedang mendalami Web Developer dengan fokus
          pada ReactJS dan Laravel. Memahami dan menguasai pembuatan aplikasi
          Web dengan menggunakan Tailwind CSS dan Bootstrap.
        </h1>
      </div>
    </section>
  );
};

export default Header;
