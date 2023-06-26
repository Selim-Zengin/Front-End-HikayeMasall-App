import React from "react";
import guzel from "../images/guzel.jpg";
import bremen from "../images/bremen.jpg";
import pinokyo from "../images/pinokyo.jpg";
import cizmeli from "../images/cizmeli.jpg";
import kul from "../images/kul.jpg";
import kirmizi from "../images/kirmizi.jpg"

export const Kirmizi = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Kırmızı Başlıklı Kız </h1>
        </div>
        <img
          src={kirmizi}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Bir zamanlar küçük mü küçük sevimli mi sevimli bir kız varmış. Herkes
          çok severmiş onu. Annesi ona kırmızı bir başlık dikmiş.Bu başlık kıza
          öyle yakışıyormuş ki gel zaman git zaman herkes onu kırmızı başlıklı
          kız diye çağırmaya başlamış. Annesi bir gün onu yanına çağırmış:
          “Benim kırmızı başlıklı kızım, bu çöreklerle bir tas çorbayı al
          büyükannene götür. Zavallıcık çok hasta. ” Kırmızı başlıklı kız, “Peki
          anneciğim. ” demiş. Sepeti almış yola çıkmış. Kırmızı başlıklı kız
          ormandan geçerken karşısına kurt çıkmış. “Nereye gidiyorsun böyle
          kırmızı başlıklı kız?” diye sormuş. Kırmızı başlıklı kız kurdun kötü
          biri olduğunu bilmiyormuş. Korkmadan yanıt vermiş. “Ormanın öbür
          ucunda oturan büyükanneme çorba ile çörek götürüyorum, kendisi çok
          hasta da.” ” Ya işte bu çok iyi. Hem kızı yerim hem büyükannesini.”
          Kırmızı başlıklı kız şarkı söyleye söyleye, çiçek toplaya toplaya
          yoluna devam etmiş. Bu sırada kurt kestirme yoldan koşa koşa
          büyükannenin evine varmış. sesini incelterek: ” Tak tak tak!” “Kim o?”
          ” Benim ben torununuz kırmızı başlıklı kız. annemin gönderdiği bir tas
          çorba ile çörekleri getirdim. ” ” Mandalı kaldır da kapıyı açı ver. ”
          Kurt mandalı kaldırmış, kapıyı açmış içeri girer girmez kadının üstüne
          atlayıp yutuvermiş. Sonra büyükannenin başlığını giymiş, gözlüğünü
          takmış, yatağa girip kırmızı başlıklı kızı beklemeye başlamış. Az
          sonra kırmızı başlıklı kız kapıyı çalmaya başlamış; ” Tak tak tak!”
          “Kurt: Kim o?” “Benim büyükanne kırmızı başlıklı kız annemin yolladığı
          çorbayla çörekleri getirdim.” “Mandalı kaldır da kapıyı açı ver.”
          Kırmızı başlıklı kız mandalı kaldırmış içeri girmiş, kurt yorganın
          altına iyice büzülüp, kızı yanına çağırmış. Kırmızı başlıklı kız
          yatağa sokulmuş, kurda sormuş; “Ne kocaman kolların var büyükanne?”
          “Seni daha sıkı kucaklamak için yavrum!” “Ne kocaman kulakların var
          büyükanne?” “Seni daha iyi işitmek için yavrum.” “Ne kocaman ağzın var
          büyükanne? “Seni daha iyi yemek için!” Kurdun böyle demesiyle kırmızı
          başlıklı kız üzerine atılıp bir lokmada yutması bir olmuş. karnı
          doyunca uykusu gelmiş kurdun yine yatağa yatmış, horul horul uyumaya
          başlamış. O sırada kulübenin yanından bir avcı geçiyormuş büyükanneyi
          ziyaret etmek istemiş, kulübeye girmiş. Kurdun yatakta yattığını
          görünce her şeyi anlamış. Hemen bıçağını çekmiş kurdun karnını yarmış,
          kurdun karnını yarınca önce kırmızı başlık ilişmiş avcının gözüne
          derken, kırmızı başlıklı kız dışarı fırlayıvermiş. “Ahaa dünya varmış,
          kurdun karnı öyle karanlıktı ki ödüm koptu, yardımınız için teşekkür
          ederim. Sonra onun ardından büyükanne de çıkmış kurdun karnından.
          Kırmızı başlıklı kız hemen bir kucak dolusu taş toplayıp getirmiş,
          kurdun karnını tıka basa taşla doldurmuş. Kurt uyandığı zaman kaçmak
          istemiş ama taşlar öyle ağırmış ki karşıdan karşıya atlayayım derken
          uçurumdan düşüp ölmüş.
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
                <img src={pinokyo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Korku Evi</h5>
                  <a href="/KorkuEv" className="btn btn-dark">
                    Hikayeyi Oku
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="col" style={{ border: "3px solid #000000" }}>
            <div className="col" style={{ marginBottom: 159 }}>
              <div className="card" style={{ width: "19rem", height: "17rem" }}>
                <img src={cizmeli} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Gizemli Cığlık</h5>
                  <a
                    href="/GizemliCiglik"
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
                <img src={guzel} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Fabrikadaki Hayalet</h5>
                  <a href="/FabrikaHayalet" className="btn btn-dark">
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
                <img src={bremen} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Karanlıkta Tek Başına</h5>
                  <a href="/KaranliktaTekBasina" className="btn btn-dark">
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
