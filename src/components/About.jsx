import React from "react";
import Image from "../assets/react.svg";
const About = () => {
  return (
    <div className="section" id="about">
      <div className=" w-full flex flex-auto flex-col sm:flex-row text-right">
        <div className="flex w-100 sm:w-1/2 justify-center">
          <img src={Image} alt="" className="w-auto h-[100px] sm:h-auto" />
        </div>

        <div className="flex w-100 sm:w-1/2 items-center justify-center polygons p-6 pl-10  bg-slate-400">
          Seorang programmer yang sedang mendalami Web Developer dengan fokus
          pada ReactJS dan Laravel. Memahami dan menguasai pembuatan aplikasi
          Web dengan menggunakan Tailwind CSS dan Bootstrap.
        </div>
      </div>
    </div>
  );
};

export default About;
