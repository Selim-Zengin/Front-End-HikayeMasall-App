import React from "react";
import bremen from "../images/bremen.jpg";
import pinokyo from "../images/pinokyo.jpg";
import rapunzel from "../images/rapunzel.jpg";
import uyuyan from "../images/uyuyan.jpg";
import kirmizi from "../images/kirmizi.jpg"


export const Bremen = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Bremen Mızıkacıları</h1>
        </div>
        <img
          src={bremen}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Bir zamanlar yaşlı ve yorgun bir eşek varmış. Sahibinin onu artık daha
          fazla beslemek istemediği ortaya çıkmış. ” En iyisi buralardan gitmek
          ” diye düşünmüş eşek. “Bremen’de şarkıcılık yaparım. Bazıları anırmamı
          pek bir beğenirdi zaten.” Böylece bir sabah erkenden yola çıkmış. Bir
          süre yürüdükten sonra iki büklüm bir köpekle karşılaşmış. “Artık
          sahibime avda yardımcı olamayacak kadar yaşlandım,” demiş köpek eşeğe.
          ” Sahibimde artık beni beslemiyor.” Eşek gülmüş. ” Benimle Bremen’e
          gelsene şarkıcı oluruz,” demiş. Yola koyulmuşlar.Çok geçmeden bir
          damın üzerinde üzgün oturan bir kedi görmüşler. ” Çok yaşlandım,
          fareler bile dalga geçiyorlar, ” demiş kedi. “Sen de bizimle gel”
          demiş eşek. “Sesin hala güçlü çıkıyor, şarkı söyleriz Bremen’de.”
          Bağıra bağıra şarkılar söyleyerek yola devam etmişler. Bir çiftlik
          evinin yakınlarından geçerken kendi seslerinden yüksek bir sesle
          irkilmişler. ” Kuk-ku-ri-kuuuuuuuuu!… Sonum geldi!” diyormuş iri bir
          horoz. Sonra eşek, köpek ve kediye yana yakıla anlatmış: ” Bu akşam
          sahibimin konukları gelecek. Öyle hissediyorum ki beni pişirip
          yiyecekler.” Eşek “Endişelenme, seninki gibi bir ses bize çok şey
          katar. Haydi gel şarkıcı olalım,” demiş. Akşam olduğunda hepsi çok
          yorulmuş. Bir şeyler yemek ve uyumak istiyorlarmış.İlerde
          penceresinden ışık süzülen bir kulübe görmüşler. Horoz uçup pencereden
          içeri bakmış. “Dört soyguncu görüyorum, nefis bir sofranın
          başındalar,” demiş. “Bir planım var,” demiş eşek. Birbirlerinin
          sırtına tırmanmışlar. En altta eşek, sonra köpek, onun üstünde kedi ve
          nihayet en tepede de horoz. Pencere yaklaşıp çıkarabilecekleri en
          yüksek sesle bağırmaya başlamışlar. “İmdaaaaat! Bu bir hayalet!” demiş
          soygunculardan birisi. ” “Bence bir canavar!” demiş ötekisi. ” Bence
          cadılar bastı! ” demiş öteki. ” Annemi istiyorum,” demiş sonuncusu.
          Bir kaç dakika sonra dört şarkıcımız soygunculardan kalan
          sofradaymışlar. Geceleyin onlar uyurken soyguncular geri gelmişler.
          Ama hayvanlar hazırlıklıymış. Soyguncular içeri girer girmez, eşek
          “Şimdi” demiş ve saldırıya geçmişler. Soyguncular bir daha hiç
          dönmemecesine kaçmışlar oradan. Şarkıcılarımız da bu sevimli küçük
          kulübeye yerleşmişler. Bremen’e gitmeyi de bir süre ertelemişler, ama
          her gün şarkı söylemeyi unutmuyorlarmış.Eğer bir gün onları dinleme
          şansınız olursa, Bremen sakinlerinin ne büyük bir tehlike
          atlattıklarını anlamanız güç olmaz.
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
      <br />
    </>
  );
};
