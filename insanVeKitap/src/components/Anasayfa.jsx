import React, { useState, useEffect } from "react";
import resim from "../images/logo1.jpg";
import korku from "../images/korku.jpg";
import klasik from "../images/klasik1.jpg";
import fikra from "../images/fikar.jpg";
import cocuk from "../images/cocuk.jpg";
import doga from "../images/doga2.jpg";

export const Anasayfa = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 6);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 6) % 6);
  };

  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-light slide mt-4 mb-4 mx-3"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        style={{ width: "60%", margin: "0 auto" }}
      >
        <ol className="carousel-indicators">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <li
              key={index}
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={index}
              className={activeIndex === index ? "active" : ""}
              aria-current={activeIndex === index ? "true" : "false"}
            ></li>
          ))}
        </ol>

        <div className="carousel-inner" style={{ backgroundColor: "#f2f2f2" }}>
          {[
            { img: resim, title: "İnsan Ve Kitap", description: "En iyi hikayeleri, masalları vb burada bulabilirsiniz." },
            { img: korku, title: "Korku Hikayeleri", description: "" },
            { img: klasik, title: "Dünya Klasikleri", description: "" },
            { img: fikra, title: "Fıkra", description: "" },
            { img: cocuk, title: "Çocuk Masalları", description: "" },
            { img: doga, title: "İstediğiniz Yerde Okuyun", description: "" },
          ].map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${activeIndex === index ? "active" : ""}`}
            >
              <img src={item.img} width="100%" height="475" className="d-block" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{ color: "white" }}>{item.title}</h1>
                <p style={{ color: "white" }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
          onClick={handlePrev}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
          onClick={handleNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
