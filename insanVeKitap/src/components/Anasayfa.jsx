import React, { useState, useEffect } from "react";
import korku from "../images/korku.jpg";
import klasik from "../images/klasik1.jpg";
import cocuk from "../images/cocuk.jpg";
import doga from "../images/doga2.jpg";
import sliderLogo from "../images/sliderLogo.jpg";
import dede from "../images/dede.jpg";
import segrek from "../images/segrek.jpg";
import kerem from "../images/kerem.jpg";
import orman from "../images/orman.jpg";
import leyla from "../images/leyla.jpg";
import cizmeli from "../images/cizmeli.jpg";
import kirmizi from "../images/kirmizi.jpg";
import kul from "../images/kul.jpg";
import pinokyo from "../images/pinokyo.jpg";
import fabrika from "../images/fabrika.jpg";
import korkuEvi from "../images/korkuEvi.jpg";
import avci from "../images/avci.jpg";


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
  const handleHikayelerClick = () => {
    
    
    const hikayelerSection = document.getElementById("enCokOkunanHikayeler");
    hikayelerSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleMasallarClick = () => {
    const masallarSection = document.getElementById("enCokOkunanMasallar");
    masallarSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleKorkuHikayeleriClick = () => {
    const korkuHikayeleriSection = document.getElementById(
      "enCokOkunanKorkuHikayeleri"
    );
    korkuHikayeleriSection.scrollIntoView({ behavior: "smooth" });
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 6) % 6);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ position: "fixed", left: "1325px",top:"263px"}}>
        <h1 style={{color:"white",backgroundColor:"black",padding:7}}>Popüler Olanlar</h1>
      </div>

      <div style={{ width: "1590px", marginLeft: "185px" }}>
        <div
          id="carouselExampleDark"
          className="carousel carousel-light slide mt-4 mb-4 mx-3"
          data-bs-ride="carousel"
          data-bs-interval="3000"
          style={{ width: "60%", margin: "0 auto", marginRight: "100px" }} // Sağa kaydırmak için marginRight eklendi
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

          <div
            className="carousel-inner"
            style={{ backgroundColor: "#f2f2f2" }}
          >
            {[
              {
                img: sliderLogo,
                title: "",
                description:
                  "En iyi hikayeleri, masalları vb burada bulabilirsiniz.",
              },
              { img: korku, title: "Korku Hikayeleri", description: "" },
              { img: klasik, title: "Dünya Klasikleri", description: "" },
              { img: dede, title: "Dede Korkut Hikayeleri", description: "" },
              { img: cocuk, title: "Çocuk Masalları", description: "" },
              { img: doga, title: "İstediğiniz Yerde Okuyun", description: "" },
            ].map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <img
                  src={item.img}
                  width="100%"
                  height="475"
                  className="d-block"
                  alt="..."
                />
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
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
            onClick={handleNext}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

     

      <div className="col-lg-3 position-fixed" style={{ top: 142, right: 105 }}>
        <div
          style={{ width: "500px" }}
          className="btn-group-vertical"
          role="group"
          aria-label="Vertical radio toggle button group"
        >
          <input
          
            onClick={handleHikayelerClick}
            type="radio"
            className="btn-check"
            name="vbtn-radio"
            id="vbtn-radio1"
            autoComplete="off"
          />
          <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">
            En Çok Okunan Hikayeler
          </label>
          <input
            onClick={handleMasallarClick}
            type="radio"
            className="btn-check"
            name="vbtn-radio"
            id="vbtn-radio2"
            autoComplete="off"
          />
          <label className="btn btn-outline-danger" htmlFor="vbtn-radio2" >
            En Çok Okunan Çocuk Masalları
          </label>
          <input
            onClick={handleKorkuHikayeleriClick}
            type="radio"
            className="btn-check"
            name="vbtn-radio"
            id="vbtn-radio3"
            autoComplete="off"
          />
          <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">
            En Çok Okunan Korku Hikayeleri
          </label>
        </div>
        <br />
      </div>

     

      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />

      <div
        className="container text-center position-fixed"
        style={{
          width: "22rem",
          backgroundColor: "white",
          right: 239,
          top: 330,
        }}
      >
        <div style={{ overflow: "auto", height: "650px" }}>
          <div className="col" style={{ border: "3px solid #000000" }}>
            <div className="col" style={{ marginBottom: 159 }}>
              <div className="card" style={{ width: "19rem", height: "9rem" }}>
                <img src={korkuEvi} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Korku Evi</h5>
                  <a href="KorkuEv" className="btn btn-dark">
                    Hikayeyi Oku
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="col" style={{ border: "3px solid #000000" }}>
            <div className="col" style={{ marginBottom: 159 }}>
              <div className="card" style={{ width: "19rem", height: "9rem" }}>
                <img src={kirmizi} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Kırmızı Başlıklı KıZ</h5>
                  <a href="/Kirmizi" className="btn btn-dark">
                    Hikayeyi Oku
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="col" style={{ border: "3px solid #000000" }}>
            <div className="col" style={{ marginBottom: 159 }}>
              <div className="card" style={{ width: "19rem", height: "9rem" }}>
                <img src={segrek} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Segrek</h5>
                  <a href="/Segrek" className="btn btn-dark">
                    Hikayeyi Oku
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="col" style={{ border: "3px solid #000000" }}>
            <div className="col" style={{ marginBottom: 159 }}>
              <div className="card" style={{ width: "19rem", height: "9rem" }}>
                <img src={kerem} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Kerem İle Aslı</h5>
                  <a href="/Kerem" className="btn btn-dark">
                    Hikayeyi Oku
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="enCokOkunanHikayeler">
        <div>
          <h1 style={{ marginLeft: "200px" }}>En Çok Okunan Hikayeler</h1>
          <div className="card" style={{ marginLeft: "200px", width: "960px" }}>
            <img src={segrek} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Segrek</h5>
              <p className="card-text">
                
              </p>
              <a
                href="/Segrek"
                className="btn"
                style={{ background: "black", color: "white" }}
              >
                Hikayeyi Oku
              </a>
            </div>
          </div>

          <div className="card" style={{ marginLeft: "200px", width: "960px" }}>
            <img src={kerem} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Kerem İle Aslı</h5>
              <p className="card-text">
               
              </p>
              <a
                href="/Kerem"
                className="btn"
                style={{ background: "black", color: "white" }}
              >
                Hikayeyi Oku
              </a>
            </div>
          </div>

          <div className="card" style={{ marginLeft: "200px", width: "960px" }}>
            <img src={orman} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Semanın Ormanda Korku Dolu Anları</h5>
              <p className="card-text">
                
              </p>
              <a
                href="/OrmanKorku"
                className="btn"
                style={{ background: "black", color: "white" }}
              >
                Hikayeyi Oku
              </a>
            </div>
          </div>

          <div className="card" style={{ marginLeft: "200px", width: "960px" }}>
            <img src={leyla} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Leyla İle Mecnun</h5>
              <p className="card-text">
                
              </p>
              <a
                href="/Leyla"
                className="btn"
                style={{ background: "black", color: "white" }}
              >
                Hikayeyi Oku
              </a>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <div>
        <section id="enCokOkunanMasallar">
          <h1 style={{ marginLeft: "200px" }}>En Çok Okunan Çocuk Masalları</h1>
          <div className="card" style={{ marginLeft: "200px", width: "960px" }}>
            <img src={pinokyo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Pinokyo</h5>
              <p className="card-text">
                
              </p>
              <a
                href="/Pinokyo"
                className="btn"
                style={{ background: "black", color: "white" }}
              >
                Hikayeyi Oku
              </a>
            </div>
          </div>
        </section>

        <div className="card" style={{ marginLeft: "200px", width: "960px" }}>
          <img src={kirmizi} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Kırmızı Başlıklı Kız</h5>
            <p className="card-text">
             
            </p>
            <a
              href="Kirmizi"
              className="btn"
              style={{ background: "black", color: "white" }}
            >
              Hikayeyi Oku
            </a>
          </div>
        </div>

        <div className="card" style={{ marginLeft: "200px", width: "960px" }}>
          <img src={kul} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Kül Kedisi</h5>
            <p className="card-text">
              
              
            </p>
            <a
              href="/Kul"
              className="btn"
              style={{ background: "black", color: "white" }}
            >
              Hikayeyi Oku
            </a>
          </div>
        </div>

        <div className="card" style={{ marginLeft: "200px", width: "960px" }}>
          <img src={cizmeli} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Çizmeli Kedi</h5>
            <p className="card-text">
              
            </p>
            <a
              href="/Cizmeli"
              className="btn"
              style={{ background: "black", color: "white" }}
            >
              Hikayeyi Oku
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />

      <section id="enCokOkunanKorkuHikayeleri">
        <div>
          <h1 style={{ marginLeft: "200px" }}>
            En Çok Okunan Korku Hikayeleri
          </h1>
          <div className="card" style={{ marginLeft: "200px", width: "960px" }}>
            <img src={orman} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Semanın Ormanda Korku Dolu Anları</h5>
              <p className="card-text">
                
              </p>
              <a
                href="/OrmanKorku"
                className="btn"
                style={{ background: "black", color: "white" }}
              >
                Hikayeyi Oku
              </a>
            </div>
          </div>

          <div className="card" style={{ marginLeft: "200px", width: "960px" }}>
            <img src={fabrika} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Fabrikadaki Hayalet</h5>
              <p className="card-text">
                
              </p>
              <a
                href="/FabrikaHayalet"
                className="btn"
                style={{ background: "black", color: "white" }}
              >
                Hikayeyi Oku
              </a>
            </div>
          </div>

          <div className="card" style={{ marginLeft: "200px", width: "960px" }}>
            <img src={korkuEvi} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Korku Evi</h5>
              <p className="card-text">
               
              </p>
              <a
                href="/KorkuEv"
                className="btn"
                style={{ background: "black", color: "white" }}
              >
                Hikayeyi Oku
              </a>
            </div>
          </div>

          <div className="card" style={{ marginLeft: "200px", width: "960px" }}>
            <img src={avci} className="card-img-top" alt="..." style={{height:700}}/>
            <div className="card-body">
              <h5 className="card-title">Hayalet Avcısı Harry Price – Tennesse Şeytanı</h5>
              <p className="card-text">
                
              </p>
              <a
                href="/HayaletAvci"
                className="btn"
                style={{ background: "black", color: "white" }}
              >
                Hikayeyi Oku
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
