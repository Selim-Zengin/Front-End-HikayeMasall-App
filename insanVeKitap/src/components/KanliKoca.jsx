import React from "react";
import segrek from "../images/segrek.jpg";
import dumrul from "../images/deliDumrul.jpg";
import kanli from "../images/kanli.jpg"
import salur from "../images/salur.jpg"
import bamsi from "../images/bamsi.jpg"
import dirse from "../images/dirse.jpg"

export const KanliKoca = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Kanlı Koca Oğlu Kanturalı</h1>
        </div>
        <img
          src={kanli}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Oğuzlar arasında Kanlı Koca isimli birisi yaşarmış. Bu adamın
          Kanturalı isimli bir oğlu varmış. Kanlı Koca oğlunun evlenmesini
          istermiş. Oğluna nasıl bir kızla evlenmek istediğini sorunca oğlu
          savaşmayı bilen ve güçlü bir kız istediğini söylemiş. Bunun üzerine
          Kanlı koca oğlunun bir yiğit aradığını düşünmüş. Oğlu Kanturalı’nın
          yollara düşerek evleneceği kızı bulmasını istemiş. Bunun üzerine
          Kanturalı her yerde istediği özelliklere sahip bir kız aramaya
          başlamış. Arayışları sonunda Trabzon beyinin aradığı özelliklere uygun
          bir kızı olduğunu öğrenmiş. Kızın adı Selcen Hatun’muş. Kanturalı kızı
          almak istemiş ancak Trabzon beyinin kızını vermesi için bir şartı
          varmış. Bu şart ise Kanturalı’nın Trabzon beyinin beslediği 3 canavarı
          öldürmeyi başarmasıymış. Oğlan bunu başaracağına inanmış ve beyin
          karşısına çıkmış. Beyin adamları Kanturalı’yı alıp ilk canavar olan
          boğanın yanına sokmuşlar. Kanturalı boğayı öldürmeyi başarmış. Bu
          arada beyin kızı da Kanturalı’yı görmüş ve ona aşık olmuş. İlk
          canavarı oğlanın öldürmesi üzerine ikinci canavar olan aslanı
          öldürmesini istemişler. Kanturalı aslanı da öldürmeyi başarmış. Son
          olarak da karşısına çıkan deveyi öldürmeyi başarmış. Canavarları yok
          etmeyi başardığı içinde beyin kızı Selcen Hatun’u alarak oradan
          ayrılmış. Yolda giderken düşmanlarla karşılaşmışlar ve ikisi birlik
          olup düşmanları yenmişler. Daha sonra da Kanturalı’nın yaşadığı
          memlekete giderek büyük bir düğün yapıp evlenmişler.
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
          right: 139,
          top: 320,
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
