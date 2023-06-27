import React from "react";
import romeo from "../images/romeo.jpg";
import kerem from "../images/kerem.jpg";
import leyla from "../images/leyla.jpg";
import ozlem from "../images/ozlem.jpg"
import ruhikizim from "../images/ruhikizim.jpg";

export const Ozlem = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Özlem Kokulu Kadın</h1>
        </div>
        <img
          src={ozlem}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Güneşin tenindeki yakıcılığına aldırmadan heyecan içindeki yürüyüşüne
          devam ediyordu. Sanki ilk ziyaretiymiş gibi… Sabırsızlanıyordu.
          Anlatacak o kadar çok şey birikmişti ki yanına gittiğinde boğazına
          düğümlenen yumruğa aldırmadan her şeyi yine gözyaşlarıyla anlatacaktı.
          En sevdiği sarı papatyaları almıştı Özlemine… Özlemim, hayat
          arkadaşım, dokunmaya kıyamadığım diye severdi güzel kadını. İlk
          gördüğünde âşık olmamıştı Özlem’e, hatta hiç fark etmemişti bile!
          Özlem uzun boylu, uzun siyah saçlı, hafif kilolu bir kadındı. Her
          kadın gibi güzeldi ancak kendisini Adem’e fark ettirecek herhangi bir
          davranışta bulunmamıştı. Âdem, sürekli spor yapan hatta yemekleri bile
          gram gram ölçerek yiyen bir spor hocasıydı. Kendisinin aksine sporla
          hiç alakası olmamış ve tüm yaşamı boyunca masa başında çalışan Özlem
          gibi bir arkadaş dahi edinmemişti. Özlem yoğun çalışma programına ara
          verip spora başlamaya ve bir salona yazılmaya karar verdiğinde
          hayatının değişeceğini hiç düşünmemişti. Spor salonuna ilk gittiğinde
          ise Adem’i fark etmesi hiç zor olmadı. Spor salonundaki tüm kadınlar;
          “Âdem hocam mekik çekmeme yardımcı olur musunuz? Hocam bu hareket tam
          olarak hangi bölgeyi çalıştırıyor? Hocam kardiyo hareketlerini evde de
          yapsam bir sorun olur mu?” şeklindeki tüm tuhaf soruları sırf hocayla
          konuşabilmek adına soruyorlardı. Âdem, her şeyin farkında ancak
          durumdan hiç rahatsız değildi. Etrafında bir sürü güzel kadının olması
          ilk başlarda oldukça hoşuna gidiyordu ancak zamanla gerçek aşka olan
          inancı git gide azalıyordu. Çünkü her kadın Adem’e değil, üçgen
          vücutlu ya da baklava dilimli Âdem hocaya aşıktı. Özlem de âşık
          olmuştu. Nasıl olduğunu bir türlü anlamamasına rağmen bir gün, yol
          boyunca Adem’i düşündüğünü fark etti. Yolda, yalnız kaldığı her
          fırsatta, film izlerken, yemek yerken, hatta duş alırken bile hep
          aklında Âdem vardı. Aşk işte buydu diye itiraf etmişti kendisine. Her
          an onunla olmak ve kokusunu dahi özlemek gibi; hatta kötü olan
          özelliklerini bile görmezden gelmek gibi, yaptığı her şey hoşuna
          gitmeye başlamıştı. Bu süreç iki yılı aşmıştı. Kocaman iki yıl geçmiş
          ancak Âdem, Özlem’e sadece günaydın ya da iyi günler diyordu. Özel
          olabilecek hiçbir sohbet yaşamıyorlardı. Çünkü Âdem hoca her öğrencine
          günaydın derdi ve selam vermeden insanların yanından geçmezdi. Soğuk
          bir kış günü Özlem bir gün öncesinden yediği yaprak sarmasını ve yaş
          pastayı yakabilmek için deli gibi koşu bandında koşmaya başlamıştı. Ve
          o an yanından geçen Âdem hocaya günaydın diyebilmek için yan döndü ve
          ani bir şekilde yere düşüp bayılmıştı. Âdem hoca Özlem’i zorlanarak
          kucağına almış ve hastaneye götürmüştü. Hastanede gözlerini açan
          Özlem, karşısında Adem’i görünce afallamış ve ne diyeceğini bilememiş
          bana ne oldu diye sormuştu. Âdem her şeyi anlatıyor, Özlem sanki şiir
          dinliyordu. Daha önce varlığından bile haberdar olmayan adam,
          karşındaki kadını güldürmek için çocuklaşmaya bile başlamıştı.
          Rastlantı sonrası karşılaşıp kaza ile bir araya gelen bu iki kişi
          zamanla birbirleriyle tek vücut olmayı başarmışlardı. Özlem’in trajik
          bir şekilde insan görünümlü canlı tarafından sebepsizce bıçakla
          öldürülene kadar…
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
