import React from "react";
import ReactMarkdown from "react-markdown";

const educations = [
  {
    title: "Universitas Andalas",
    major: "Sistem Komputer",
    subtitle: "2019, IPK 3.34",
    text: "Skripsi : Rancang Bangun Pemantauan Loker Dosen Berbasis Internet of Things (IOT)",
  },
  {
    title: "SMA N 1 Gunung Toar",
    major: "Ilmu Pengetahuan Sosial",
    subtitle: "2011 - 2013",
  },
];

const work_experience = [
  {
    title: "RETY Ponsel & Reload",
    year: "Juni 2021 - November 2022",
    position: "Customer Service dan Administrator",
    detail: `Responsibilities:

1. Monitoring and ensuring agent transactions run smoothly through the OtomaX application
1. Troubleshooting computer and server network issues
1. Compiling weekly and monthly inventory and server balance reports`,
  },
  {
    title: "PT PLN PERSERO AREA PADANG",
    year: 2016,
    position: "Internship",
    detail: `Internship Project: Development of a Web Application for "Mapping Public Street Lighting (PJU) using Google Maps API"`,
  },
];
const Experience = () => {
  return (
    <div className="section " id="experience">
      <h2 className=" section-title">Education and Work Experience</h2>
      <div className="container mx-2">
        <div className="flex flex-col lg:flex-row w-full md:space-x-2">
          <div className="flex-1 portfolio-items ">
            <h2 className="text-5xl font-bold bold chapter uppercase  bg-gray-100 p-2">
              Education
            </h2>
            {educations.map((education, index) => {
              const { title, major, subtitle, text } = education;
              return (
                <div key={index} className="font-serif">
                  <p className="list-items-subtitle  text-cyan-500">{title}</p>
                  <h5>Jurusan : {major}</h5>
                  <h5>Tahun: {subtitle}</h5>
                  {text != null && (
                    <h5>
                      {" "}
                      <ReactMarkdown>{text}</ReactMarkdown>{" "}
                    </h5>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex-1  portfolio-items">
            <h2 className="text-5xl font-bold bold chapter uppercase  bg-gray-100 p-2">
              Work Experience
            </h2>
            {work_experience.map((work_experience, index) => {
              const { title, year, position, detail } = work_experience;
              return (
                <div key={index}>
                  <p className="list-items-subtitle   text-cyan-500">{title}</p>
                  <h5>Year : {year}</h5>
                  <h5>Position : {position}</h5>
                  {detail != null && (
                    <ReactMarkdown className="mb-8">{detail}</ReactMarkdown>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
