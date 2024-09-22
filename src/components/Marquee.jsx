import React from "react";
import Ticker from "framer-motion-ticker";

//import "./marquee.css";

// 2. Defining Variants
const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};
const colors = ["#632bf3", "#f122c8", "#f16022", "#9ef344", "#44d3f3"];
const Marquee = () => {
  return (
    <div className="Apps">
      <Ticker duration={20}>
        {colors.map((item, index) => (
          <div
            className="flex flex-col  items-center justify-center"
            key={index}
            style={{
              backgroundColor: item,
              width: "200px",
            }}
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className=" w-8"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              ></path>
            </svg>

            {item}
          </div>
        ))}
      </Ticker>
    </div>
  );
};

// const Marquee = () => {
//   return (
//     <div>
//       <div className="marquee relative w-full max-w-[100vw]">
//         {/* 3. Using framer motion */}
//         <motion.div
//           className="track absolute whitespace-nowrap bg-slate-400 max-w-[100vw]"
//           variants={marqueeVariants}
//           animate="animate"
//         >
//           <section className="left-0">
//             <div
//               className="flex flex-nowrap py-4 space-x-6 max-w-[100vw] overflow-hidden"
//               // style={{transform: translate3d(-597.08px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform}}
//             >
//               <img
//                 src="https://assets.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b98159539aa31df_client-logo-01.svg"
//                 loading="eager"
//                 height="22"
//                 alt="Client Logo"
//                 className="home-clients-logo-image"
//               />
//               <img
//                 src="https://assets.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b98155090aa31e1_client-logo-02.svg"
//                 loading="eager"
//                 height="30"
//                 alt="Client Logo"
//                 className="home-clients-logo-image"
//               />
//               <img
//                 src="https://assets.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b9815d7e4aa31e2_client-logo-03.svg"
//                 loading="eager"
//                 height="30"
//                 alt="Client Logo"
//                 className="home-clients-logo-image"
//               />
//               <img
//                 src="https://assets.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b98155d23aa31e0_client-logo-04.svg"
//                 loading="eager"
//                 height="25"
//                 width="Auto"
//                 alt="Client Logo"
//                 className="home-clients-logo-image"
//               />
//               <img
//                 src="https://assets.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b9815a95eaa31e3_client-logo-07.svg"
//                 loading="eager"
//                 height="25"
//                 alt="Client Logo"
//                 className="home-clients-logo-image"
//               />
//               <img
//                 src="https://assets.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b981538dbaa31e4_client-logo-06.svg"
//                 loading="eager"
//                 height="35"
//                 alt="Client Logo"
//                 className="home-clients-logo-image"
//               />
//               <img
//                 src="https://assets.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b98159539aa31df_client-logo-01.svg"
//                 loading="eager"
//                 height="22"
//                 alt="Client Logo"
//                 className="home-clients-logo-image"
//               />
//               <img
//                 src="https://assets.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b98155090aa31e1_client-logo-02.svg"
//                 loading="eager"
//                 height="30"
//                 alt="Client Logo"
//                 className="home-clients-logo-image"
//               />
//               <img
//                 src="https://assets.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b9815d7e4aa31e2_client-logo-03.svg"
//                 loading="eager"
//                 height="30"
//                 alt="Client Logo"
//                 className="home-clients-logo-image"
//               />
//               <img
//                 src="https://assets.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b98155d23aa31e0_client-logo-04.svg"
//                 loading="eager"
//                 height="25"
//                 width="Auto"
//                 alt="Client Logo"
//                 className="home-clients-logo-image"
//               />
//               <img
//                 src="https://assets.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b9815a95eaa31e3_client-logo-07.svg"
//                 loading="eager"
//                 height="25"
//                 alt="Client Logo"
//                 className="home-clients-logo-image"
//               />
//               <img
//                 src="https://assets.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b981538dbaa31e4_client-logo-06.svg"
//                 loading="eager"
//                 height="35"
//                 alt="Client Logo"
//                 className="home-clients-logo-image"
//               />
//               <img
//                 src="https://assets.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b98159539aa31df_client-logo-01.svg"
//                 loading="eager"
//                 height="22"
//                 alt="Client Logo"
//                 className="home-clients-logo-image"
//               />
//               <img
//                 src="https://assets.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b98155090aa31e1_client-logo-02.svg"
//                 loading="eager"
//                 height="30"
//                 alt="Client Logo"
//                 className="home-clients-logo-image"
//               />
//               <img
//                 src="https://assets.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b9815d7e4aa31e2_client-logo-03.svg"
//                 loading="eager"
//                 height="30"
//                 alt="Client Logo"
//                 className="home-clients-logo-image"
//               />
//               <img
//                 src="https://assets.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b98155d23aa31e0_client-logo-04.svg"
//                 loading="eager"
//                 height="25"
//                 width="Auto"
//                 alt="Client Logo"
//                 className="home-clients-logo-image"
//               />
//               <img
//                 src="https://assets.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b9815a95eaa31e3_client-logo-07.svg"
//                 loading="eager"
//                 height="25"
//                 alt="Client Logo"
//                 className="home-clients-logo-image"
//               />
//               <img
//                 src="https://assets.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b981538dbaa31e4_client-logo-06.svg"
//                 loading="eager"
//                 height="35"
//                 alt="Client Logo"
//                 className="home-clients-logo-image"
//               />
//             </div>
//           </section>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

export default Marquee;
