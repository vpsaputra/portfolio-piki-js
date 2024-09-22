import React from "react";
import { Link } from "react-scroll";
import HeroPic from "/hero-image.png";
import Ticker from "framer-motion-ticker";
import { FaFacebook } from "react-icons/fa";

const items = [
  {
    name: "LinkedIn",
    bgcolor: "#632bf3",
    icon: FaFacebook,
  },
];

/* todo: Responsive fonts, align; */

const Header = () => {
  return (
    <section className="section mx-auto " id="home">
      {/* items end : memaksa gambar untuk menempel ke bawah container */}
      <div className="flex flex-col md:flex-row  md:items-end  portfolio-items justify-center">
        <img
          src={HeroPic}
          alt=""
          srcSet=""
          className=" md:w-1/3 transparent-hero"
        />
        <div className=" max-w-[620px]">
          <h1 className="text-hero background-clip-text font-leaguespartan">
            PIKI SAPUTRA
          </h1>

          <h1 className="text-hero">WEB DEVELOPER</h1>
          <p>
            Junior Web Developer yang sedang mendalami Web Developer dengan
            fokus pada ReactJS dan Laravel. Memahami dan menguasai pembuatan
            aplikasi Web dengan menggunakan Tailwind CSS dan Bootstrap.
          </p>
          <br />
          <h2 className=" text-yellow-300">
            Framework dan Bahasa Pemrograman yang Digunakan :
          </h2>
          <Ticker duration={20} className="  ">
            {items.map((item, index) => (
              <div
                className="flex flex-col  items-center justify-center max-w-sm"
                key={index}
                style={{
                  backgroundColor: item.bgcolor,
                  width: "200px",
                }}
              >
                {item.name}
              </div>
            ))}
          </Ticker>
        </div>
      </div>
    </section>
  );
};

export default Header;
