import React from "react";
import segrek from "../images/segrek.jpg";
import salur from "../images/salur.jpg";
import bamsi from "../images/bamsi.jpg";
import emren from "../images/emren.jpg";
import dirse from "../images/dirse.jpg";

export const Emren = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Emren</h1>
        </div>
        <img
          src={emren}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Oğuzların hanı Bayındır Han emrindeki adamlardan Begin beyi
          sınırlarını koruması için görevlendirmiş. Ona ihtiyaç duyduğu kılıcı
          ve atı vermiş. Bunun üzerine Begin bey sınır kumandanlığını başarıyla
          yapmış. Günler böyle geçerken Begin bey ava çıkmış. Av sırasında bir
          geyik görmüş. Onun peşinden giderken ayağı takılmış ve düşmüş. O
          sırada ayağı kırılmış ve zorlukla obasına dönmeyi başarmış. Onun bu
          hali üzerine düşmanları harekete geçmiş ve Begin beyin obasına
          saldırmak istemişler. Begin beyin oğlu olan Ermen babasının kaldığı
          yere düşmanların saldıracağını haber almış. Bunun üzerine düşmanların
          karşısına çıkmış. Ancak oğlan savaşmakta güçsüzmüş. Başaramayacağını
          anlamış ve Allah’a yalvarmaya başlamış. Bunun üzerine oğlan güçlenerek
          düşmanları yenmiş ve babasını kurtarmış. Bu arada yenilen düşmanlarda
          Oğuzlar’ın dinin kabul etmiş.
        </p>
      </div>
      <div style={{ position: "fixed", left: "1463px", top: "180px" }}>
        <h1 style={{ color: "white", backgroundColor: "black", padding: 7 }}>
          Benzer Olanlar
        </h1>
      </div>

      <div
        className="container text-center position-fixed"
        style={{
          width: "22rem",
          backgroundColor: "white",
          right: 100,
          top: 250,
        }}
      >
       <div style={{ overflow: "auto", height: "650px" }}>
          <div className="col" style={{ border: "3px solid #000000" }}>
            <div className="col" style={{ marginBottom: 159 }}>
              <div className="card" style={{ width: "19rem", height: "9rem" }}>
                <img src={segrek} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Uşun Koca Oğlu Segrek</h5>
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
                <img src={salur} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Salur Kazan’ın Çadırı</h5>
                  <a
                    href="/Salur"
                    className="btn btn-dark"
                    style={{ marginTop: 15 }}
                  >
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
                <img src={bamsi} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Bamsı Beyrek</h5>
                  <a href="/Bamsi" className="btn btn-dark">
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
                <img src={dirse} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Dirse Han’ın Oğlu Boğaç</h5>
                  <a href="/Dirse" className="btn btn-dark">
                    Hikayeyi Oku
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
    </>
  );
};
