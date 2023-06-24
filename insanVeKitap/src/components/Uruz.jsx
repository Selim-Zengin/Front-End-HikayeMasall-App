import React from "react";
import segrek from "../images/segrek.jpg";
import salur from "../images/salur.jpg";
import bamsi from "../images/bamsi.jpg";
import dirse from "../images/dirse.jpg"
import uruz from "../images/uruz.jpg";

export const Uruz = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Uruz’un Tutsak Olması</h1>
        </div>
        <img
          src={uruz}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Eski zamanlarda bir yörenin hükümdarı olan Kazan Bey varmış. Kazan
          beyin ise Uruz isimli bir oğlu varmış. Kazan bey oğlunun savaşmayı
          bilmemesi üzerine üzülürmüş. Oğlu da aynı durumdaymış ve bir gün
          babasından ona savaşmayı öğretmesini istemiş. Durum böyle olunca Kazan
          bey oğlunu ava çıkarmış. Amacı av sırasında oğluna savaşmayı ve nasıl
          kan döküldüğünü öğretmekmiş. Baba oğul avlanırken karşılarına
          düşmanları gelmiş. Kazan bey oğluna onun nasıl savaştığını izlemesini
          ve müdahale etmemesini istemiş. Oğlan böyle izleyerek savaşmayı
          öğrenecekmiş. Ancak oğlu babasını dinlememiş ve oda savaşmaya
          başlamış. Düşmanlarıyla savaşan Kazan Han oğlunu etrafta görememiş ve
          her yerde onu aramış. Sonrasında ise onu kılıcını yerde görerek
          oğlunun düşmanları tarafından esir edildiğini anlamış. Bunun üzerine
          oğlunu kurtarmak için savaşmaya gitmiş. Ancak Kazan bey başarılı
          olamamış ve yenilmiş. Yenilgi üzerine diğer Oğuz beyleri ve Kazan
          beyin karısı kızlarla savaşın yapıldığı alana gelerek düşmana karşı
          savaşmışlar. Savaşı Oğuzlar kazanmış. Savaşı kazandıktan sonra hep
          birlikte yurtlarına dönmüşler ve şölen düzenlemişler. Dede Korkut’ta
          onlara dua etmiş.
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
