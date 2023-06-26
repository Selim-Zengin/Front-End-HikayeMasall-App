import React from "react";
import yenilmez from "../images/yenilmez.jpg";
import tuccar from "../images/tuccar.jpg";
import uzayda from "../images/uzayda.jpg";
import tembeller from "../images/tembeller.jpg";
import soz from "../images/soz.jpg";

export const Tuccar = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Tüccar ve Karınca Masalı</h1>
        </div>
        <img
          src={tuccar}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Bir zamanlar, Mısır’da yaşayan bir tüccar vardı. Tüccarın büyük bir
          zenginliği vardı ve her zaman daha da zengin olmak için çalışıyordu.
          Ancak, hiç durmadan çalışmak, tüccarın hayatını da etkilemişti.
          Arkadaşları ve ailesi ile fazla zaman geçiremiyordu ve sürekli olarak
          işlerini düşünüyordu. Bir gün, tüccar yine işlerinin peşindeyken,
          yorgunluktan bir ağacın altında dinlenmeye karar verdi. Bu sırada,
          karşısına bir karınca çıktı. Karınca, ağzında bir yaprakla tüccarın
          yanına geldi ve ona bir şeyler söylemek istiyormuş gibi duruyordu.
          Tüccar, karıncayı dinledi ve şaşırdı. Karınca, yaprağı taşıyarak bir
          yere gitmek istiyordu ama yolculuğu için yardıma ihtiyacı vardı.
          Tüccar, karıncayı yardım etmek istedi ve onunla birlikte yola koyuldu.
          Karınca, tüccarın yardımıyla amacına ulaştı ve teşekkür etmek için
          tüccara bir hediye verdi. Tüccar, karıncanın hediyesini açtığında,
          içinde bir tohum olduğunu gördü. Karınca, tohumun değerini anlatarak,
          tüccara şunları söyledi: “Bu tohum, zenginliğin sembolüdür. Onu doğru
          şekilde kullanarak, daha da zengin olabilirsin ama asla unutma,
          arkadaşların ve ailenin değerini kaybetme.” Tüccar, karıncanın
          sözlerini anlamıştı ve tohumu dikkatle sakladı. O günden sonra, tüccar
          işlerini hala önemsiyordu ama ailesi ve arkadaşlarıyla da zaman
          geçirmeye başlamıştı. Ayrıca, karıncanın verdiği tohumu kullanarak,
          daha fazla para kazandı ama her zaman sadık olduğu değerlerini korudu.
          Tüccar, karıncanın verdiği tohumu kullanarak büyük bir zenginlik elde
          etti. Ancak, kazandığı bu zenginliğin hiçbir zaman karınca ile
          yaşadığı deneyimin değerini değiştiremeyeceğini anlamıştı. Tüccar, bir
          gün yine ağacın altında otururken, karşısına yine aynı karınca çıktı.
          Tüccar, karıncayı tanıdı ve ona büyük bir sevgiyle sarıldı. Karınca,
          tüccarın bu davranışına şaşırdı ve tüccarın neden bu kadar mutlu
          olduğunu sordu. Tüccar, karıncaya şunları söyledi: “Seninle yaşadığım
          deneyim, hayatımı değiştirdi. Senin sayende, arkadaşlarım ve ailem
          için daha fazla zaman ayırmayı öğrendim. Ayrıca, senin bana öğrettiğin
          değerlerle, kazandığım zenginliği doğru kullanabildim. Sen benim
          hayatımı zenginleştiren bir arkadaşsın.”Karınca, tüccarın sözleri
          karşısında mutlu oldu ve ona şunları söyledi: “Ben de senin için bir
          arkadaş oldum. Sen bana yardım ettiğinde, ben de sana bir hediye
          vererek teşekkür etmek istedim. Senin de bana karşı gösterdiğin sevgi,
          bana büyük bir mutluluk veriyor.” Tüccar ve karınca, uzun bir süre
          sohbet ettiler ve birbirlerinin yaşamları hakkında konuştular. Tüccar,
          artık zenginliğin yanı sıra, arkadaşlık ve dayanışmanın da hayatta en
          değerli şeyler olduğunu biliyordu. Karınca ise, tüccarın öğrendiği
          değerlerin, herkes için önemli olduğunu düşünüyordu…
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
