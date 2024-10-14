import React from "react";
import "./css/contact.css";

import HeroPic from "/contact.webp";
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
// import jsonData from "./data/social.json";

const jsonData = [
  {
    name: "pikisaputra201@gmail.com",
    bgcolor: "#632bf3",
    icon: <FaEnvelope />,
    link: "mailto:pikisaputra201@gmail.com",
  },
  {
    name: "vpsaputra",
    bgcolor: "#632bf3",
    icon: <FaGithub />,
    link: "https://www.github.com/vpsaputra",
  },
  {
    name: "vpsaputra",
    bgcolor: "#632bf3",
    icon: <FaLinkedin />,
    link: "https://www.facebook.com/VPSaputra",
  },
  {
    name: "Piki Saputra",
    bgcolor: "#632bf3",
    icon: <FaFacebookSquare />,
    link: "https://www.facebook.com/VPSaputra",
  },
];

const Contact = () => {
  return (
    <div className="section contact" id="contact">
      <span className="section-title mb-2">Contact Information</span>
      <div className=" flex flex-col md:flex-row gap-y-6 gap-x-2 justify-center border rounded-md md:w-4/5 self-center items-center">
        <div className="flex md:border-r border-dashed justify-center self-center p-6">
          <img src={HeroPic} alt="" />
        </div>

        {/* contact info */}

        <div className="flex-row social-wrapper w-full mx-3 p-3">
          <h5 className=" text-cyan-500">Contact Me On:</h5>
          {jsonData.map((item, index) => (
            <div key={index} className="social border h-10 items-center gap-2">
              <span>{item.icon}</span>
              <a href={item.link}>{item.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
