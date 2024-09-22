import React from "react";
import SocialButtonGroup from "./SocialButtonGroup";

const Footer = () => {
  return (
    <div id="Footer" className="pb-20 bg bg-wave w-full">
      <footer className="">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <SocialButtonGroup />
          <div className="order-1 mt-8 md:mt-0">
            <p className="avx text-base text-center awj axm text-gray-200 font-leaguespartan">
              © 2023 Piki Saputra. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
