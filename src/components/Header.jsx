import React from "react";
import { Link } from "react-scroll";
import HeroPic from "/SkillsExperience.webp";
import Ticker from "framer-motion-ticker";
import { FaLaravel, FaJava, FaReact } from "react-icons/fa";

const items = [
  {
    name: "ReactJS",
    bgcolor: "#632bf3",
    icon: <FaReact />,
  },
  {
    name: "Laravel",
    bgcolor: "#ff2d20",
    icon: <FaLaravel />,
  },
  {
    name: "Java (Mobile Development)",
    bgcolor: "#429966",
    icon: <FaJava />,
  },
];

/* todo: Responsive fonts, align; */

const Header = () => {
  return (
    <section className="section mx-auto " id="about">
      <h2 className=" section-title">About Me</h2>
      {/* items end : memaksa gambar untuk menempel ke bawah container */}
      <div className="grid-wrapper grid  grid-cols-1 md:grid-cols-3 portfolio-items ">
        <img
          src={HeroPic}
          alt=""
          srcSet=""
          className=" grid-1 transparent-hero justify-self-center"
        />
        <div className=" w-full grid-2 flex flex-col justify-center gap-2 border p-7">
          <div className="">
            <h1 className="text-hero background-clip-text items-start font-leaguespartan  ">
              WHAT I DO?
            </h1>
          </div>

          <h5 className="text-justify justify-self-end mb-4 text-cyan-500">
            Junior Web Developer passionate about web application development,
            specializing in ReactJS and Laravel. Skilled in crafting dynamic web
            applications with a strong command of Tailwind CSS and Bootstrap, I
            am dedicated to creating visually appealing and user-friendly
            experiences.
          </h5>
          <h3 className=" text-yellow-800 bg-yellow-50 p-2">
            Technology and Framework used :
          </h3>
          {/* Untuk kustomisasi <Ticker /> dapat menggunakan class :
          ".FMT__container " pada CSS */}
          <Ticker duration={20}>
            {items.map((item, index) => (
              <div
                className="flex flex-row  items-center justify-center w-fullpy-2"
                key={index}
                style={{
                  backgroundColor: "#3d3d3d",
                  width: "200px",
                  gap: "4px",
                }}
              >
                <div className="item-container flex gap-3 items-center">
                  {item.icon}
                  <p> {item.name}</p>
                </div>
              </div>
            ))}
          </Ticker>

          <div className=" text-xl text-cyan-900 mt-4 bg-cyan-100 p-2">
            Supporting Technical Skills
          </div>
          <ul className="skills">
            <li>Network Configuration</li>
            <li>Database Management(SQL, Oracle)</li>
            <li>Adobe Photoshop</li>
            <li>Microsoft Office</li>
          </ul>
        </div>
        <div className=" max-w-[620px] grid-3 "></div>
      </div>
    </section>
  );
};

export default Header;
