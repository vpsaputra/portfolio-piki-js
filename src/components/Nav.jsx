import React from "react";
import { Link } from "react-scroll";

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

const Nav = () => {
  return (
    <section>
      <nav
        className="navbar flex flex-row w-full bg-wave justify-between items-center absolute  top-0 p-3 md:py-0"
        id="navbarNav11"
      >
        <BsBriefcase />
        <ul className=" hidden md:flex flex-row  gap-3 ">
          <Link
            to="home"
            activeClass="active"
            smooth="true"
            spy={true}
            className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
          >
            Home
          </Link>

          <Link
            to="about"
            activeClass="active"
            smooth="true"
            spy={true}
            className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
          >
            About
          </Link>
          <Link
            to="experience"
            activeClass="active"
            smooth="true"
            spy={true}
            className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
          >
            Services
          </Link>
          <Link
            to="project"
            activeClass="active"
            smooth="true"
            spy={true}
            className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
          >
            Projects
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth="true"
            spy={true}
            className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
          >
            Contact
          </Link>
        </ul>
        <a
          className="btn px-3  py-1 rounded-full flex items-center gap-1"
          href="https://id.linkedin.com/vpsaputra"
          target="_blank"
        >
          <BsLinkedin />
          Let's Connect
        </a>
      </nav>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-2 lg:bottom w-full overflow-hidden z-50">
        <div className="mx-auto">
          <div
            className="w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-3xl mx-auto px-5
         max-w-[360px] flex justify-between items-center text-2xl"
          >
            <Link
              to="home"
              activeClass="active"
              smooth="true"
              spy={true}
              className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
            >
              <BiHomeAlt />
            </Link>
            <Link
              to="about"
              activeClass="active"
              smooth="true"
              spy={true}
              className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
            >
              <BiUser />
            </Link>
            <Link
              to="experience"
              activeClass="active"
              smooth="true"
              spy={true}
              className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
            >
              <BiAward />
            </Link>
            <Link
              to="project"
              activeClass="active"
              smooth="true"
              spy={true}
              className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
            >
              <BiBriefcase />
            </Link>
            <Link
              to="contact"
              activeClass="active"
              smooth="true"
              spy={true}
              className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
            >
              <BiClipboard />
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
