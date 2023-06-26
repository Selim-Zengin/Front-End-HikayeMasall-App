import React from "react";
import kendini from "../images/kendini.jpg";
import yenilmez from "../images/yenilmez.jpg";
import uzaydan from "../images/uzaydan.jpg";
import uzayda from "../images/uzayda.jpg";
import uykuya from "../images/uykuya.jpg";
import tuccar from "../images/tuccar.jpg";
import tembeller from "../images/tembeller.jpg";
import sirin from "../images/sirin.jpg";
import soz from "../images/soz.jpg";

export const Masal = () => {
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
          Çocuk Masalları
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
                <img src={yenilmez} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Yenilmez Askerler Masalı</h5>
                  <a href="/Yenilmez" className="btn btn-dark">
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
                <img src={uzayda} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    Uzayda Asılı Kalan Astronotlar Masalı
                  </h5>
                  <a
                    href="/Uzayda"
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
                <img src={tembeller} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    Tembeller Ülkesinde Çalışkan Olmak
                  </h5>
                  <a href="/Tembeller" className="btn btn-dark">
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
                <img src={soz} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    Söz Dinlemeyen Tren Bobi Masalı
                  </h5>
                  <a href="/Soz" className="btn btn-dark">
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
                src={kendini}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">
                  Kendini Beğenmeyen Çocuk ve Dostu Sevimli Ayı
                </h3>
                <p className="card-text" style={{ textAlign: "center" }}>
                  Bir ormanın içinde annesi ve kardeşiyle birlikte yaşayan küçük
                  bir erkek çocuğu varmış. Bu çocuk aynaya…
                </p>
                <a href="/Kendini" className="btn btn-dark">
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
                src={yenilmez}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Yenilmez Askerler Masalı</h3>
                <p className="card-text">
                  Yeşilin tüm renklerinin tüm yeryüzünü kapladığı, eşsiz
                  maviliklere sahip denizler ve göllerle çevrili bir ülke
                  varmış. Bu ülke çevre ülkeler…
                </p>
                <a href="/Yenilmez" className="btn btn-dark">
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
                src={uzaydan}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">
                  Uzaydan Gelen Görünmez Misafirler
                </h3>
                <p className="card-text">
                  Uzayda bulunan gezegenlerin birinde yaşayan robotlar bir gün
                  yakın gezegende bulanan...
                </p>
                <a href="/Uzaydan" className="btn btn-dark">
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
                src={uzayda}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">
                  Uzayda Asılı Kalan Astronotlar Masalı
                </h3>
                <p className="card-text">
                  Bilimin ve teknolojinin son sürat geliştiği bir çağda bir grup
                  bilim insanı uzayı daha detaylı incelemek ve orada...
                </p>
                <a
                  href="/Uzayda"
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
                src={uykuya}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Uykuya Yenik Düşen Minik Pazarcı</h3>
                <p className="card-text">
                  Uzak diyarlarda kendi halinde yaşayan bir anne-oğul varmış.
                  Büyük bir aşk ile evlendiği eşini savaş sırasında...
                </p>
                <a
                  href="/Uykuya"
                  className="btn btn-dark"
                  style={{ marginTop: 21 }}
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
                src={tuccar}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Tüccar ve Karınca Masalı</h3>
                <p className="card-text">
                  Bir zamanlar, Mısır’da yaşayan bir tüccar vardı. Tüccarın
                  büyük bir zenginliği vardı ve her zaman daha da zengin olmak
                  için…
                </p>
                <a
                  href="/Tuccar"
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
                style={{ height: "12rem" }}
                src={tembeller}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">
                  Tembeller Ülkesinde Çalışkan Olmak
                </h3>
                <p className="card-text">
                  Dere tepe düz gittikten sonra varılan bir ülkede yaşamını
                  sürdüren halk tembellikleri ile ün salmış...
                </p>
                <a
                  href="/Tembeller"
                  className="btn btn-dark"
                  style={{ marginTop: 45 }}
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
                src={sirin}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Şirin Kedi ve Prenses Masalı</h3>
                <p className="card-text">
                  Bir varmış bir yokmuş. Evvel zaman içinde kalbur zaman içinde
                  uzak bir ülkede, şirin bir kedi varmış. Bu kedi, sarayın…
                </p>
                <a
                  href="/Sirin"
                  className="btn btn-dark"
                  style={{ marginTop: 50 }}
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
                src={soz}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Söz Dinlemeyen Tren Bobi Masalı</h3>
                <p className="card-text">
                  Evvel zaman içinde kalbur saman içinde uzak ülkelerin birinde
                  yaşayan ve insanları sevdiklerine kavuşturmak üzere ülkeden
                  ülkeye yolculuklar yapan trenler…
                </p>
                <a
                  href="/Soz"
                  className="btn btn-dark"
                  style={{ marginTop: -16 }}
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
              Dede Korkut Hikayeleri nedir
            </h1>
            <p
              style={{ fontSize: "30px", color: "black" }}
              className="card-text"
            >
              Masal amacı nedir? Bilinmeyen bir yerde ve zaman içinde geçen
              durumdaki olayların anlatılmasının söz konusu durumda olduğu yazın
              türüne masal denir. Masalların yazılmasındaki amaç ise çocuklara
              öğüt vermektir. Bu bakımdan da sözlü edebiyat geleneğinin çok
              önemli bir parçası olarak varlık gösterirler.
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
