import React from "react";

const educations = [
  {
    title: "Universitas Andalas",
    major: "Sistem Komputer",
    subtitle: "2019, IPK 3.34",
    text: "Skripsi : Rancang Bangun Pemantauan Loker Dosen Berbasis Internet of Things (IOT)",
  },
  {
    title: "SMA N 1 Gunung Toar",
    major: "Jurusan : IPS",
    subtitle: "2011 - 2013",
  },
];

const work_experience = [
  {
    title: "RETY Ponsel & Reload",
    year: "Juni 2021 - November 2022",
    position: "Customer Service dan Administrator",
    detail: `Tanggungjawab : 
    \n 1. Memantau dan memastikan transaksi agen berjalan dengan baik dan lancar'
    \n 2. Troubleshooting perangkat komputer dan jaringan server
    \n 3. Menyusun laporan stok barang dan saldo server mingguan dan bulanan`,
  },
  {
    title: "PT PLN PERSERO AREA PADANG",
    year: 2016,
    position: "Magang",
    detail: `Proyek magang : Pembuatan Aplikasi Web "Pemetaan Penerangan Jalan Umum (PJU)
   \n menggunakan Google Maps API" `,
  },
];
const Experience = () => {
  return (
    <div className="section " id="experience">
      <h2 className=" section-title">Pendidikan Dan Pengalaman Kerja</h2>
      <div className="container mx-2">
        <div className="flex flex-col lg:flex-row w-full space-x-2">
          <div className="flex-1 portfolio-items">
            <h2 className="text-5xl font-bold bold chapter uppercase font-leaguespartan">
              {" "}
              Pendidikan
            </h2>
            {educations.map((education, index) => {
              const { title, major, subtitle, text } = education;
              return (
                <div key={index} className="font-serif">
                  <p className="list-items-subtitle">{title}</p>
                  <h5>Jurusan : {major}</h5>
                  <h5>Tahun: {subtitle}</h5>
                  {text != null && <h5>{text}</h5>}
                </div>
              );
            })}
          </div>
          <div className="flex-1  portfolio-items">
            <h2 className="text-5xl font-bold bold chapter uppercase font-leaguespartan">
              {" "}
              Pengalaman Kerja
            </h2>
            {work_experience.map((work_experience, index) => {
              const { title, year, position, detail } = work_experience;
              return (
                <div key={index} className="font-serif">
                  <p className="list-items-subtitle">{title}</p>
                  <h5>Tahun : {year}</h5>
                  <h5>Posisi : {position}</h5>
                  {detail != null && (
                    <h5 className={detail.includes("\n") ? "line-break" : ""}>
                      {detail}
                    </h5>
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
