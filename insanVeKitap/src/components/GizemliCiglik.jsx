import React from "react";
import fabrika from "../images/fabrika.jpg";
import korkuEvi from "../images/korkuEvi.jpg";
import gizem from "../images/gizem.jpg";
import karanlik from "../images/karanlik.jpg";

export const GizemliCiglik = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Gizemli Çığlık</h1>
        </div>
        <img
          src={gizem}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Yağmurlu bir gündü. Gökyüzü ikiye ayrılacak gibi gürlüyordu. Sokakta
          hiç kimse kalmamış, tüm çocuklar evlerine gitmişti. Bardaktan
          boşanırcasına yağan yağmur damlaları Yasemin’in odasının camına
          vuruyordu. Hava iyice kararmaya başlamıştı. Yasemin evde tek
          başınaydı. Odasında kitap okurken birden elektrikler kesildi ve
          Yasemin o an ne yapacağını bilemedi. Annesi doktor, babası da polisti
          ve o gece her ikisi de nöbetçiydi. Yasemin koşar adımlarla mutfağa
          koştu ve çekmeceden mum çıkardı. Ancak bir türlü çakmağı bulamadı.
          “AA, buradaki çakmak nereye gitti ya? Her yer kapkaranlık oldu, hiçbir
          şey de görünmüyor!” diyerek kendi kendine konuşup el yordamıyla
          çekmeceden çakmağı aramayı sürdürdü ve bulamadı. “Of ya, tam da gününü
          buldu elektriklerin kesilmesi, şimdi kocaman evde ne yapacağım?”
          diyerek yavaş yavaş odasına doğru yürümeye başladı. Tam odasına
          girecekken binanın koridorundan bir çığlık sesi duydu ve o an ne
          yapacağını bilemeden olduğu yerde donakaldı. Kaç dakika boyunca adeta
          nefes almadan öylece kalakaldı. Sonra sanki birisinden kaçarmışçasına
          parmak uçlarında odasına gitti. Odasına girdikten sonra arkasına bile
          bakmadan yorganın altına girdi ve biraz önceki çığlığın neden
          kaynaklandığını düşünmeye çalıştı. Babasını aramayı düşünüyordu ancak
          telefonunu salonda unuttuğunu fark etti. “Salona nasıl gideceğim
          şimdi!” diyerek kendi kendine söyleniyor ancak yataktan çıkmaya bir
          türlü cesaret edemiyordu. En iyisi bebekler gibi emekleyerek salona
          gidip hızlıca telefonu almalıyım, diye düşünerek yatak odasından
          çıkmaya karar verdi. Gıcırdayan kapıyı yavaşça açan Yasemin, tam
          odasından dışarı çıkacakken mutfaktan bir ses duydu. Sanki mutfaktaki
          eşyalar Yasemine bir şeyler anlatmaya çalışıyormuş gibi sesler işitti
          ve yine olduğu yerde donakaldı. Buzdolabı, bulaşık makinesi hatta
          fırın bile on saniye arayla çatır çutur sesler çıkarıyordu. Yasemin;
          “Allah’ım, aynı okuduğum romandaki gibi adeta eşyalar bana bir uyarı
          vermeye çalışıyor! Ne yapmalıyım?” diye düşünerek yine olduğu yerde
          kaldı. Ama ses şimdi de salondaki televizyondan da gelmeye başladı.
          Şimdi de salondaki televizyon çatır çutur ses çıkarmaya başlamıştı.
          Tam bu sırada dışarıda dolu da yağmaya başladı. Yasemin’in penceresine
          taş atılıyormuş gibi sesler gelmeye başladı. “Yoksa romanımdaki gibi
          bir hayalet mi geldi? Ya da babamın tutukladığı bir seri katil
          hapisten kaçtı ve beni mi öldürecek!” diye düşünerek. Çığlık çığlığa
          tekrar yatağına koştu. Bu sefer annem ve babam gelene kadar odadan
          çıkmayacağım, diye düşünüyordu ama bir şeyler yapmalıydı. Hem bir
          çığlık sesi duymuştu hem de eşyalardan çatur çutur sesler. Bu sefer
          korkmadan yataktan çıkıp hızlıca salona gitmeliyim, diye karar
          vermişti ve yavaşça yatağından kalktığı anda birden elektrikler geldi
          ve tüm dünyası odasıyla birlikte aydınlanmıştı. Koşar adımlarla salona
          gitti ve babasını arayıp tüm olanları anlatmaya başladı. Babası da
          elektrikler kesildiği için eşyaların genleşip ses çıkardığını
          korkmaması gerektiğini söylemişti. Ancak koridordaki gizemli çığlık
          sesinin nedenini bir türlü bulamamışlardı.
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
                <img src={korkuEvi} className="card-img-top" alt="..." />
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
              <div className="card" style={{ width: "19rem", height: "9rem" }}>
                <img src={gizem} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Gizemli Cığlık</h5>
                  <a href="/GizemliCiglik" className="btn btn-dark" style={{marginTop:15}}>
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
                <img src={fabrika} className="card-img-top" alt="..." />
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
                <img src={karanlik} className="card-img-top" alt="..." />
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
