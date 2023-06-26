import React from "react";
import yenilmez from "../images/yenilmez.jpg";
import uzayda from "../images/uzayda.jpg";
import soz from "../images/soz.jpg";
import tembeller from "../images/tembeller.jpg"

export const Yenilmez = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Yenilmez Askerler Masalı</h1>
        </div>
        <img
          src={yenilmez}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Yeşilin tüm renklerinin tüm yeryüzünü kapladığı, eşsiz maviliklere
          sahip denizler ve göllerle çevrili bir ülke varmış. Bu ülke çevre
          ülkeler tarafından sürekli olarak işgal edilmeye yönelik saldırılara
          maruz kalırmış. Ülkenin güçlü, kuvvetli, adil, halkını ve ülkesini çok
          seven hükümdarı ise her saldırıyı sadık ordusu ile birlikte bertaraf
          ederek ülkesini korurmuş. Günlerden bir gün düşman ülkelerden birinin
          yine ülkeye saldıracağı haberi alınmış. Tüm halk ve askerler
          ülkelerini korumak adına neler yapacaklarını düşünürken padişahın sesi
          ülkenin en yüksek binasından duyulmuş. Padişah halkına ve askerlerine
          sakin olmalarını bu saldırının da üstesinden geleceklerini haykırmış.
          Bu esnada halktan bir patavatsız haddini aşarak padişaha bunu nereden
          bildiğini söylemiş. Padişah bunu dün gece uyurken rüyasında bir
          dervişten öğrendiğini bildirmiş. Padişah ile alay eden ve rüyaya
          inanmadığını bildiren kişi cezalandırılmış ve hapse atılmış. Bütün
          halk ve padişah tüm önlemleri aldıktan sonra saldırı için hazır halde
          beklemeye başlamışlar. Padişah askerlerini rüyasında söylenilen yere
          götürmüş ve hazır olmalarını emretmiş. Halk için tüm gece evlerinde
          beklemeleri gerektiği bildirilmiş. Derken gece olmak üzereyken
          saldırılar başlamış. Bu esnada padişahın yenilmez askerleri var
          güçleri ile ülkelerini korumak için çatışmışlar. Padişaha rüyasında
          bildirilen ama padişahın kimseye bahsetmediği rengarenk kuşlar birden
          ortaya çıkmışlar. Herkes hayretler içerisinde kalmış. Kuşlar bir
          taraftan düşman ile çarpışırken, diğer taraftan da yaralanan askerleri
          mucizevi bir biçimde tedavi ediyorlarmış. Bütün gece büyük bir çatışma
          yaşanmış. Evlerinde sadece çatışma seslerini duyan halk endişeli bir
          şekilde sabahı beklemiş. Sabah olduğunda ise yenilmez asker kuşların
          yardımı ile düşman ülke topraklarından tamamen atılmış. Padişah
          askerlerini kontrol etmek için tek tek her birini ziyaret etmiş. Birde
          ne görsün yaralanan hiçbir askerin yarasından eser yokmuş. Askerler ve
          padişah cepheden şehre geldiğinde ise; tüm halk padişahı ve askerleri
          büyük bir mutluluk ile karşılamışlar. Orada yaşanılanları kimseye
          anlatmamaları gerektiği padişaha bildirilmiş olduğundan padişah
          cephede yaşanılan hiçbir şeyin şehirde konuşulmaması gerektiğini o
          gece cephede olan herkese bizzat kendisi söylemiş. O gün bugün o güçlü
          ordunun nasıl yenildiği konusunda kimsenin ağzından bir tek kelime
          çıkmamış. Orada olanlar ne zaman gökyüzünde bir kuş görse, büyük bir
          minnet duygusu ile onu selamlarmış. Padişaha inanmayarak hapse atılan
          kişi ise, zaferin kazanılmasının ardından hapisten çıkarılmış. Ancak
          gel gör ki zaferin ertesi günü padişaha inanmamasının bedelini kuş
          saldırısında hayatını kaybederek ödemiş.
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
