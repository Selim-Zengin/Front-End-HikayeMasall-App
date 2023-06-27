import React from "react";
import yenilmez from "../images/yenilmez.jpg";
import uzayda from "../images/uzayda.jpg";
import tembeller from "../images/tembeller.jpg";
import soz from "../images/soz.jpg";
import sirin from "../images/sirin.jpg";

export const Soz = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Söz Dinlemeyen Tren Bobi Masalı</h1>
        </div>
        <img
          src={soz}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Evvel zaman içinde kalbur saman içinde uzak ülkelerin birinde yaşayan
          ve insanları sevdiklerine kavuşturmak üzere ülkeden ülkeye yolculuklar
          yapan trenler varmış. Bu trenler içerisinde yaramazlıkları ile dikkat
          çeken Bobi herkes tarafından çok sevilen sevimli bir trenmiş. Bobi
          özellikle uzak mesafelere gitmeyi çok severmiş. Uzak mesafe
          yolculuklarında farklı yerler görmek ve farklı insanlar ile tanışmak
          onun için büyük bir keyifmiş. Yol boyu eşsiz manzaralardan geçerken
          manzaranın tadını yolcuları da doyasıya çıkarabilsin diye bu yollarda
          özellikle yavaşlarmış. Her gittiği yerde mutlaka daha önce tanışmadığı
          yeni bir arkadaş bulur ve onunla uzun uzun sohbet edermiş. Bir gün
          yine uzun mesafe bir yolculuk işi çıkmış. Her zaman olduğu gibi Bobi
          bu işi seve seve kabul etmiş. Tüm yolcuları gardan alarak yolculuğa
          başlamak için sabırsızlanıyormuş. Tüm bakımlarını ve ihtiyaçlarını
          yaptıktan sonra garda konuklarını beklemeye başlamış. Kalkış vakti
          geldiğine tüm konuklarını alarak yola koyulmuş. Yolun keyfini çıkara
          çıkara giderken, yola çıkmadan önce daha önce bu yolu kullanarak
          gideceği yere giden tren abisinin ona yapmış olduğu uyarıyı
          hatırlamış. Tecrübeli tren Bobi’ye yol boyu bir süre yüksek dağların
          olduğunu ve bu dağların tehlikelere söz konusu olabileceğini
          söylemişti. Bu dağları geçerken diğer tarafın manzarasının güzelliğine
          kapılmaması gerektiğini ve bu dağlık bölgeden mümkün olduğunda hızlı
          geçmesi gerektiğini vurgulamıştı. Bobi yol boyu keyifli keyifli
          giderken tam da abisinin bahsettiği yere gelmiş. Muhteşem bir manzara
          eşliğinde yolun keyfini çıkarırken abisinin sözünü ettiği hızlanma
          konusunu unutan Bobi kendini ve yolcularına büyük bir tehlikenin içine
          atmış. Yolu mümkün olduğunda hızlı geçmesi gerekirken, olabildiğince
          yavaş bir şekilde geçiyormuş. Büyük bir gürültü ile manzaranın
          büyüsünden çıkan Bobi neler olduğunu anlamak için motorlarını
          durdurmuş. Bir ne görsün ki, dağdan kopan ve tren rayları üzerine
          düşen koca bir kaya parçası tüm yolu kapamış. Bobi şimdi tehlikenin
          boyutunu çok daha iyi anlıyormuş. Bu tehlikeli yolda ne kadar az
          kalınırsa o kadar iyiymiş.Bu seferlik söz dinlemeyi unutan Bobi’nin
          yaşadıkları ona büyük bir ders olmuş. Bundan sonra ne kendini ne de
          yolcularını asla riske atmayacakmış. Uzun uğraşlar neticesinde açılan
          yoldan geçerek yolculuğunu tamamlayan Bobi başından geçenleri tren
          garındaki tüm tren dostları ile paylaşmış. Herkesin bundan iyi bir
          ders alması gerektiğini de özellikle vurgulamış. Söz dinlemeyen Bobi
          yaşayarak tecrübe ettiği olaylardan ders çıkarmış.
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

// Finish :)
