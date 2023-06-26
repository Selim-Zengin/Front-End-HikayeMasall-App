import React from "react";
import kendini from "../images/kendini.jpg";
import yenilmez from "../images/yenilmez.jpg"
import uzayda from "../images/uzayda.jpg";
import tembeller from "../images/tembeller.jpg";
import soz from "../images/soz.jpg";

export const Kendini = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">
            Kendini Beğenmeyen Çocuk ve Dostu Sevimli Ayı
          </h1>
        </div>
        <img
          src={kendini}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Bir varmış bir yokmuş… Bir ormanın içinde annesi ve kardeşiyle
          birlikte yaşayan küçük bir erkek çocuğu varmış. Bu çocuk aynaya
          baktığında kendini çok çirkin görürmüş. Orman yolundan her sabah
          yürüyerek okuluna gider ve arkadaşlarından utanarak gününü geçirirmiş.
          Ne kadar çirkin olduğunu yüzüne vurmasınlar diye kimseyle konuşmazmış.
          Bütün gün yüzü asık şekilde otururmuş sırasında. Bir gün okuldan eve
          dönerken karşısına kocaman cüssesiyle bir ayı çıkmış. Bu ayı o kadar
          ürkütücüymüş ki çocuk boncuk bocuk ter dökmeye, kalbi ağzından çıkacak
          gibi çarpmaya başlamış. Tir tir titrerken ayı dile gelmiş. Çocuğa
          ondan korkmamasını söylemiş. Çok yalnız olduğunu ve yalnızca arkadaş
          olmak istediğini dile getirmiş. Çocuk öyle şaşkın şaşkın ayının yüzüne
          bakarken, kendisinin de ne kadar yalnız olduğu bir an aklına gelmiş.
          Aklına gelmiş ama o hep kendini çok çirkin görürmüş. Hiç kendini
          sevmez, hep yalnız ve mutsuz olarak kendini eve kapatırmış. Ayının ona
          zarar vermeyeceğini anladığında, arkadaş olmuşlar. Ayı her gün okul
          dönüşü onu orman yolunda beklemiş. Birlikte oyunlar oynamışlar,
          gezmişler, vakit geçirmişler. Çocuk buna rağmen hala kendini hiç güzel
          bulmuyormuş. Bir gün yine yüzü asık çocuğa, neyi olduğunu sormuş
          sevimli ayı. Çocuk da kendini ne kadar çirkin hissettiğinden bahsetmiş
          biraz. Ayı bu duruma çok üzülmüş çünkü o arkadaşını hiç çirkin olarak
          görmemiş. Aksine çok güzel bir yüze sahip olduğunu düşünüyormuş. Bir
          tatil günü ormandaki evlerinin biraz ilerisinde oturan çocuk, ayının
          iri vücudunu görmüş. Yanına çağırmış ve dertleşmek istemiş. Kendisinin
          ne kadar şanssız bir çocuk olduğundan bahsetmiş. Ayı önce ne
          diyeceğini bilememiş ama sonra aklına harika bir fikir gelmiş. Ormanın
          sonundaki şelaleye birlikte gidip gidemeyeceklerini sormuş çocuğa.
          Çocuk annesinden izin almış ve böylece şelaleye varmışlar. Şelalenin
          başına geldiklerinde, suya kafasını uzatmasını söylemiş ayı çocuğa.
          Çocuk şaşırmış ama dediğini yapmış çünkü ayıya çok güveniyormuş. Çocuk
          kendisine bakmış bakmasına ama yine yüzünün ne kadar çirkin olduğunu
          mırıldanıp durmuş. Ayı bu sefer çocuğun yanına gelmiş ve yüzünü
          şelaleye uzatmış. Sonra kendisiyle ayı haliyle barışık olduğunu
          söylemiş. Çocuk, “ama sen bir hayvansın ben bir insan, ben niye böyle
          çirkinim?” demiş. Ayı, çocuğa dönmüş ve herkesin kendine göre bir
          güzel yanının olduğunu söylemiş. Sonra çocuğun kendinde fark etmediği
          mavi gözlerinden, sarı saçlarından ve iyi kalbinden bahsetmiş. Çocuk
          ayının söylediklerini böyle böyle her gün dinlemiş ve sonunda artık
          kendini sevmeyi öğrenmiş. Ayıyla dostlukları hiçbir zaman bitmemiş.
        </p>
      </div>
      <div style={{ position: "fixed", left: "1423px", top: "180px" }}>
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
          top: 260,
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
                  <h5 className="card-title">Uzayda Asılı Kalan Astronotlar Masalı</h5>
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
                  <h5 className="card-title">Tembeller Ülkesinde Çalışkan Olmak</h5>
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
                  <h5 className="card-title">Söz Dinlemeyen Tren Bobi Masalı</h5>
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
      <br />
    </>
  );
};
