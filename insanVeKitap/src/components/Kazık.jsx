import React from "react";
import segrek from "../images/segrek.jpg";
import salur from "../images/salur.jpg";
import bamsi from "../images/bamsi.jpg";
import kazikli from "../images/kazikli.jpg";
import dirse from "../images/dirse.jpg";

export const Kazık = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Kazılık Koca Oğlu Yegenek</h1>
        </div>
        <img
          src={kazikli}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Oğuzların hanı Bayındır Han’ın Kazılık Koca isminde bir veziri varmış.
          Kazılık Koca bir gün akın için hanından izin isteyerek Karadeniz’deki
          Düzmürd kalesine gitmiş. Kazılık Koca kalenin sahibi olan tekfur ve
          adamlarıyla büyük bir savaşa girmiş. Amacı kaleyi ele geçirmekmiş.
          Ancak adamları ve kendi tekfurla adamlarını yenmeyi başaramamış.
          Ayrıca adamlarıyla birlikte kalede esir alınmış. Kazılık Koca’nın bir
          oğlu varmış. Oğlanın adı Yegenek’miş. Oğlana akına çıktıktan sonra
          haber alınamayan Kazılık Koca’nın öldüğü söylenmiş. Aradan 16 yıl
          geçmiş. Yegenek arkadaşlarıyla tartıştığı bir gün aslında babasının
          ölmediğini bir kalede tekfur tarafından esir tutulduğunu öğrenmiş.
          Bunun üzerine Bayındır Han’dan yardım isteyerek babasını kurtarmak
          için Düzmürd Kalesi’ne gitmiş. Bayındır Han’ın askerleriyle birlikte
          büyük bir savaş vererek tekfuru yenmişler. Böylece kale Oğuzlara
          geçmiş. Yegenek’te babasını kurtarmış ve onunla memleketlerine geri
          dönmüşler.
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
