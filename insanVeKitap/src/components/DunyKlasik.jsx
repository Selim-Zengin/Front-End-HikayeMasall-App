import React from "react";
import guzel from "../images/guzel.jpg";
import bremen from "../images/bremen.jpg";
import kul from "../images/kul.jpg";
import pinokyo from "../images/pinokyo.jpg";
import kirmizi from "../images/kirmizi.jpg";
import hansel from "../images/hansel.jpg";
import uyuyan from "../images/uyuyan.jpg";
import cizmeli from "../images/cizmeli.jpg";
import rapunzel from "../images/rapunzel.jpg";

export const DunyKlasik = () => {
  return (

    
    <>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div
        className="card"
        style={{ fontSize: 55, textAlign: "center", color: "#000000" }}
      >
        <div
          className="card-body"
          style={{ borderTop: "none", borderBottom: "none" }}
        >
          Dünya Klasikleri
        </div>
      </div>

      <div style={{ position: "fixed", left: "1423px", top: "255px" }}>
        <h1 style={{ color: "white", backgroundColor: "black", padding: 7 }}>
          Popüler Olanlar
        </h1>
      </div>
      <div
        className="container text-center position-fixed"
        style={{
          width: "22rem",
          backgroundColor: "white",
          right: 139,
          top: 320,
        }}
      >
        <div style={{ overflow: "auto", height: "650px" }}>
          <div className="col" style={{ border: "3px solid #000000" }}>
            <div className="col" style={{ marginBottom: 159 }}>
              <div className="card" style={{ width: "19rem", height: "9rem" }}>
                <img src={rapunzel} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Rapunzel</h5>
                  <a href="/Rapunzel" className="btn btn-dark">
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
                <img src={uyuyan} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Uyuyan Güzel</h5>
                  <a
                    href="/Uyuyan"
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
                <img src={kirmizi} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Kırmızı Başlıklı Kız</h5>
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
                <img src={pinokyo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Pinokyo</h5>
                  <a href="/Pinokyo" className="btn btn-dark">
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

      <div
        className="container text-center"
        style={{ background: "white", marginLeft: 40 }}
      >
        <div className="row  border-4 border-dark">
          <div className="col-md-4">
            <div
              className="card  border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={guzel}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Güzel Ve Çirkin</h3>
                <p className="card-text" style={{ textAlign: "center" }}>
                  Güzel ve Çirkin Masalı Bir varmış, bir yokmuş. Eski zamanlarda
                  zengin bir tüccar varmış. Üç kızı olan bu tüccarın kızlarının…
                </p>
                <a href="/Guzel" className="btn btn-dark">
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={bremen}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Bremen Mızıkacıları</h3>
                <p className="card-text">
                  Bremen Mızıkacıları Masalı Bir zamanlar yaşlı ve yorgun bir
                  eşek varmış. Sahibinin onu artık daha fazla beslemek
                  istemediği ortaya çıkmış.…
                </p>
                <a href="/Bremen" className="btn btn-dark">
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={kul}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Külkedisi</h3>
                <p className="card-text">
                  Külkedisi Sindirella Masalı Bir zamanlar, güzeller güzeli bir
                  kız varmış. Annesi ölünce babası yeniden evlenmiş. Üvey annesi
                  de ilk evliliğinden…
                </p>
                <a href="/Kul" className="btn btn-dark">
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4  mt-5">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem" }}
            >
              <img
                src={pinokyo}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Pinokyo</h3>
                <p className="card-text">
                  Pinokyo Masalı Bir varmış, bir yokmuş çook eski bir zamanda
                  küçük bir kasabada Geppetto adında ihtiyar bir oyuncakçı
                  yaşarmış. Yaptığı…
                </p>
                <a
                  href="/Pinokyo"
                  className="btn btn-dark"
                  style={{ marginTop: 25 }}
                >
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4  mt-5">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={kirmizi}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Kırmızı Başlıklı Kız</h3>
                <p className="card-text">
                  Kırmızı Başlıklı Kız Masalı Bir zamanlar küçük mü küçük
                  sevimli mi sevimli bir kız varmış. Herkes çok severmiş onu.
                  Annesi…
                </p>
                <a href="/Kirmizi" className="btn btn-dark">
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4  mt-5">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={hansel}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Hansel ve Gretel</h3>
                <p className="card-text">
                  Hansel ve Gretel Masalı Bir varmış, bir yokmuş. Geçmiş
                  zamanlarda Hansel ile Gretel adında iki kardeş yaşarmış.
                  Anneleri onlar daha…
                </p>
                <a href="/Hansel" className="btn btn-dark">
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4  mt-5">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                style={{ height: "12rem" }}
                src={uyuyan}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">Uyuyan Güzel</h3>
                <p className="card-text">
                  Uyuyan Güzel Masalı Bir varmış, bir yokmuş. Eski zamanlarda,
                  ülkelerin birinde bir Kral ile Kraliçe yaşarmış. Kralın bir
                  çocuğu olmuş.…
                </p>
                <a href="/Uyuyan" className="btn btn-dark">
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4  mt-5">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={cizmeli}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Çizmeli Kedi</h3>
                <p className="card-text">
                  Çizmeli Kedi Masalı Bir zamanlar, üç oğlu olan bir değirmenci
                  varmış. Değirmenci ölünce büyük oğluna değirmen, ortanca
                  oğluna eşek, küçük…
                </p>
                <a href="/Cizmeli" className="btn btn-dark">
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4  mt-5">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={rapunzel}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Rapunzel</h3>
                <p className="card-text">
                  Rapunzel Masalı Bir varmış, bir yokmuş. Evvel zaman içinde,
                  kalbur saman içinde uzak bir ülkede bir kadınla kocasının
                  çocukları yokmuş.…
                </p>
                <a
                  href="/Rapunzel"
                  className="btn btn-dark"
                  style={{ marginTop: 26 }}
                >
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginRight: 520 }}>
        <div
          className="card border-success mb-3 mx-auto border-4 border-dark"
          style={{ maxWidth: "80rem", marginTop: "30px" }}
        >
          <div className="card-body text-success " style={{ marginLeft: 100 }}>
            <h1 style={{ color: "black" }} className="card-title">
              Dünya Klisikleri Nedir
            </h1>
            <p
              style={{ fontSize: "30px", color: "black" }}
              className="card-text"
            >
              Her dönemde geçerlidir. -Geniş bir temsil kabiliyeti vardır;
              evrensel yaygınlık içerir. -Kendi türünün en iyileri arasında
              kabul edilir ve ilgili türü ileriye taşıyan detaylar barındırır.
              -Gösterdikleri yolla her zaman takipçi yaratır, taklitçileri
              türer.
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
