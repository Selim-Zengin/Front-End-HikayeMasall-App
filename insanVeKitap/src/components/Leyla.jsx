import React from "react";
import romeo from "../images/romeo.jpg";
import kerem from "../images/kerem.jpg";
import leyla from "../images/leyla.jpg";
import ruhikizim from "../images/ruhikizim.jpg"

export const Leyla = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Leyla İle Mecnun</h1>
        </div>
        <img
          src={leyla}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Leyla ile Mecnun hikayesi çok meşhur olan bir hikayedir. Mecnun, bir
          kabile reisi olan adaklar ve dualar ile dünyaya gözlerini açan olan
          Kays isimli oğludur. Bu Kays okul içinde iken bir başka kabile reisi
          kızı olan Leyla ile tanışmıştır. Bu iki kişi birbirine aşık
          olmuşlardır. Okulda başlayan ve git gide çoğalan bu aşkı ve macerayı
          Leyla’nın annesi öğrenmiştir. Bunun üzerine annesi bu konu ile ilgili
          Leyla kızına çok kızmıştır. Bunun üzerine ona çıkışmıştır ve okuldan
          almaya karar vermiştir. Kays okul içinde Leyla’nın gelmediğini görünce
          üzüntüsü çok fazla artmıştır. Bunun üzerine başını alıp çöllere doğru
          yol alır. Bunun ile birlikte Mecnun diye adlandırılmaya başlar.
          Mecnun’un babası, bu durumdan rahatsız olmaktadır. Bunun üzerine ise
          Leyla’yı ailesinden istemiştir. Ama Leyla’nın annesi ve babası Mecnun
          olduğu için kızlarını vermezler. Bunu duyan Leyla ise evden kaçmış ve
          Mecnun’u çölde bulmuştur. Halbuki Mecnun, çölde ahular ile, ceylanlar
          ve kuşlar ile arkadaşlık etmiştir ve mecazi olan aşktan doğru ilahi
          aşka yükselme göstermiştir. Bu neden ile Leyla’yı tanımamıştır. Bunun
          üzerine üzülen babası Mecnun’u iyileşebilmesi için Kabe’ye
          götürmüştür. Allah’a olan duaların kabul gördüğü bu yerde Mecnun da
          kendisinde bulanan aşkını daha fazla arttırması için Allah çok fazla
          dua etmektedir. Allah’a olan duası ve daha doğrusu aşkı daha fazla
          artmıştır ve bunun üzerine tüm zamanını çöl içerisinde geçirmeye
          başlamıştır. Diğer tarafta ise Leyla da aşk ıstırabına kendini
          kaptırmıştır. Bir vakit sonra ailesi, Leyla’yı İbn-i Selam isimli
          zengin ve adı duyulmuş biri ile evlendirmiştir. Ancak, Leyla bu durum
          karşısında kendisinin bir peri tarafından sevildiğini söyler. Ayrıca
          eğer kendisine dokunur ise ikisinin de kötü olacağını söyleyerek İbn-i
          Selam’dan uzak tutmaya çalışır.Mecnun, çölde Leyla’nın evlendiğini
          duyunca çok üzülür. Leyla’ya bunun üzerine sitem ile mektup
          göndermiştir. Leyla da Mecnun’a durumunu anlatır. Kendisini anlamadığı
          için o da sitemde bulunur. Bir zaman sonra Mecnun’un ahı tutar ve
          İbn-i Selâm ölür. Leyla evine döner. Daha sonra Mecnun’u çölde aramaya
          başlamaktadır. Fakat Mecnun, ilahi aşk yüzünden Leyla’nın varlığını
          unutmuştur. Leyla, çölde Mecnun’u bulduğu halde, Mecnun onu
          tanımamıştır. Leyla onun erdiğini anlamış olsa da yine onsuz
          yaşayamamaktadır. Hastalanır ve yataklara düşer ve ölür. Mecnun,
          Leyla’nın mezarını kucaklar ve ağlayıp söylenir. O anda o da ölür.
          İkisi cennette buluşmuşlardır.
        </p>
      </div>
      <div style={{ position: "fixed", left: "1423px", top: "250px" }}>
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
                <img src={ruhikizim} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Ruh İkizim</h5>
                  <a href="/Ruh" className="btn btn-dark">
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
                <img src={romeo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Romeo Ve Juliet</h5>
                  <a
                    href="/Romeo"
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
          <br />
          <div className="col" style={{ border: "3px solid #000000" }}>
            <div className="col" style={{ marginBottom: 159 }}>
              <div className="card" style={{ width: "19rem", height: "9rem" }}>
                <img src={leyla} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Leyla İle Mecnun</h5>
                  <a href="/Leyla" className="btn btn-dark">
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
