import React from "react";
import segrek from "../images/segrek.jpg";
import salur from "../images/salur.jpg"
import bamsi from "../images/bamsi.jpg"
import dirse from "../images/dirse.jpg"

export const Salur = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Salur Kazan’ın Çadırı</h1>
        </div>
        <img
          src={salur}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Salur Kazan bir gün büyük bir şölene katılmış. Bu şölende çok eğlenmiş
          ve çok içki içmiş. Bu sebeple de sarhoş olmuş. Sarhoşluğuna bakmayan
          Salur Kazan ava çıkmaya karar vermiş. Ancak dayısı sarhoş olduğu için
          Salur Kazan’ın ava gitmesine razı olmamış. Buna rağmen Salur Kazan
          dayısını dinlememiş ve Uruz isimli oğlunu yaşadıkları çadırın başına
          dikerek ava çıkmış. Salur Kazan’ın düşmanları varmış ve fırsat
          kollarlarmış. Onun ava gittiğini duyunca yaşadığı çadırı yağmalamaya
          karar vermişler. Salur Kazan çadırda karısı, çocukları, annesi ve
          yardımcıları yaşarmış. Düşmanların çadırı basması üzerine yardımcıları
          ve ailesi çadırı korumaya çalışmışlar. Ancak başarılı olamamışlar ve
          Salur Kazan’ın oğlu Uruz, karısı ve annesi esir alınmış. Av merakına
          yenik düşerek ava çıkan Salur Kazan’ın içine bir sıkıntı düşmüş. Bunun
          üzerine evine yani çadırına dönmeye karar vermiş. Çadıra döndüğünde de
          çadırın yağmalandığını görmüş. Çadırda ailesini göremeyince de onları
          aramaya başlamış.
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
