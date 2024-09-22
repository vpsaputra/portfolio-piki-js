import React from "react";
import logo from "../assets/brand-logo.png";

import {
  BiArchive,
  BiAward,
  BiBadge,
  BiBriefcase,
  BiClipboard,
  BiHomeAlt,
  BiUser,
  BiUserCircle,
} from "react-icons/bi";
import {
  BsClipboardData,
  BsBriefcase,
  BsChatSquare,
  BsLinkedin,
} from "react-icons/bs";

const scrollToSection = (sectionName = "") => {
  document.getElementById(sectionName)?.scrollIntoView({ behavior: "smooth" });
};

const Nav = () => {
  return (
    <section>
      <nav
        className="navbar flex w-full bg-wave justify-between items-center fixed  top-0 p-3 md:py-0 z-50"
        id="navbarNav11"
      >
        <img
          src={logo}
          alt="brand-logo"
          width={72}
          className=" cursor-pointer"
        />
        <ul className="hidden  md:flex  w-[400px] flex-col md:flex-row  gap-3 items-center ">
          <a
            href="#home"
            onClick={scrollToSection("header")}
            className="flex items-center"
          >
            Home
          </a>
          <a href="#about" onClick={scrollToSection("about")}>
            About
          </a>
          <a href="#experience" onClick={scrollToSection("experience")}>
            Experience
          </a>
          <a href="#project" onClick={scrollToSection("project")}>
            Projects
          </a>
          <a href="#contact" onClick={scrollToSection("contact")}>
            Contact
          </a>
        </ul>
        <a
          className="active px-3  py-1 rounded-full flex items-center gap-1 "
          href="https://id.linkedin.com/vpsaputra"
          target="_blank"
        >
          <BsLinkedin />
          Let's Connect
        </a>
      </nav>

      {/* Bottom Navigation (For mobiles) */}
      <nav className="fixed bottom-2 lg:bottom w-full overflow-hidden z-500 md:hidden">
        <div className="mx-auto">
          <div
            className="w-full bg-black/20 h-[84px] backdrop-blur-2x1 rounded-3xl mx-auto px-2
         max-w-[300px] flex justify-between items-center text-2xl mobile-navbar"
          >
            <a
              href="#home"
              smooth="true"
              className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
            >
              <BiHomeAlt />
            </a>

            <a
              href="#about"
              smooth="true"
              className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
            >
              <BiUser />
            </a>

            <a
              href="#experience"
              smooth="true"
              className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
            >
              <BiAward />
            </a>

            <a
              href="#project"
              smooth="true"
              className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
            >
              <BiBriefcase />
            </a>

            <a
              href="#contact"
              smooth="true"
              className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
            >
              <BiClipboard />
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
