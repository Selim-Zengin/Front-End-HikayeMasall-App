import React from "react";
import segrek from "../images/segrek.jpg";
import salur from "../images/salur.jpg";
import bamsi from "../images/bamsi.jpg"
import dirse from "../images/dirse.jpg"

export const Bamsi = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Bamsı Beyrek</h1>
        </div>
        <img
          src={bamsi}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Yörenin birinde Kam Büre oğlu Bamsı Beyrek ile Banıçiçek isimli iki
          kişi yaşarmış. Bunlar bebekken birbirlerine beşik kertmesi ilan
          edilmişler. Ancak birbirlerini tanımayan bu iki kişi ayrı ayrı
          avlanmaya çıktıkları bir gün karşılaşmışlar. Karşılaşma sonrasında ise
          birbirlerine üstünlük kurmak için güreşmeye başlamışlar. İkisi de
          birbirinden güçlüymüş ve güreş zorlu geçmiş. O sırada Bamsı Beyrek
          insanların kendisini izlediğini görmüş ve bir kadına karşı yenilecek
          olmanın onun hakkında insanların kötü düşünmelerine neden olacağına
          karar vermiş. Bunun üzerine Banıçiçek’e yumruk atarak güreşi kazanmış.
          Bu olay Bamsı Beyrek’in güreşi kazanmasıyla son bulurken bir gün Bamsı
          Beyrek düşmanları tarafından esir edilmiş. Bunun üzerine ikili tam
          tamına 16 yıl boyunca birbirlerini görmeden yaşamışlar. Bamsı Beyrek
          esir düşmüşken Banıçiçek evlenmek zorunda kalmış. Büyük bir düğün
          alayı kurulmuş. Ancak Bamsı Beyrek Banıçiçek’in evleneceğini duymuş ve
          gelip düğünü basmış. Banıçiçek’i düğünden kaçırmış ve ikili mutlu
          mesut yaşam sürmüşler.
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
