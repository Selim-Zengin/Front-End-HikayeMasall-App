import React from "react";
import romeo from "../images/romeo.jpg";
import gonlunce from "../images/gonlunce.jpg";
import ruhikizim from "../images/ruhikizim.jpg";
import kerem from "../images/kerem.jpg";
import leyla from "../images/leyla.jpg"


export const Kimi = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Kimi Gönlünce, Kimi Ömrünce Sever</h1>
        </div>
        <img
          src={gonlunce}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Denizin dalgası vapura çarpıyordu. Kaptan son yolcuları bekliyor olsa
          gerek. Hülya okula geç kalacaktı. Dağınık kömür karası saçları yüzüne
          çarpıyordu. Ve o sırada elindeki kitapları sımsıkı tutmaya
          çalışıyordu. Rüzgâr sanki fısıldıyor gibi geliyordu. Hülya halinden
          çok memnundu. Tam o esnada uzun boylu, zayıf biraz saçları yandan
          yatıran deniz mavisi gözleri olan Tarık, bindi vapura ve vapur
          harekete başladı. O esnada Tarık tutunamadı ve yanlışlıkla Hülyanın
          yanına düştü. Ve Hülya bu duruma dayanamayıp çok güldü, yardım ister
          misiniz? Tarık da kendi haline gülerek, elini uzattı ve sohbet ede ede
          yolculuk devam ettiler. Okulları aynı kampüsteydi. Biri mimar, diğeri
          doktor olacaktı. Her sabah aynı vapurda karşılaşınca bu karşılaşma
          sıcak bir ilişkiye dönüştü ve severek evlendiler. Evlilikleri çok
          güzel sürüyordu. Paralarını, dertlerini, kaygılarını hep
          paylaşıyorlardı. İkisinin tek sıkıntısı çocuklarının olmayışıydı. Her
          tedaviyi deniyorlardı ama nafile. Ama bu duruma çok üzülmüyorlardı,
          olsun her güzelliğin her mutluluğun bir eksiği olur. Bizim de bu
          olsun. Ama sevgilerini hiç azaltmadılar. Kadın eve geldiğinde hep
          küçük küçük aşk, sevgi, iltifat notları bulurdu. Kadın da Tarık’ı
          üzmemek, mutlu etmek için elinden gelenin fazlasını yapardı. Yaşları
          kırka gelince daha az çalışıp birbirleriyle daha çok vakit geçirmeye
          karar verdiler. Hülya küçük bir mimarlık bürosu açtı. Tarık ise özel
          muayenesini açtı. Bir gün sahilde dolaşırken üzerinde satılık yazan
          küçük ama balkonu büyük bir ev gördüler ve bu evi almaya karar
          verdiler. Tarık; “Benim yurtdışındaki kongrem bitince taşınırız.”
          dedi. Tarık’ın kongresi uzun sürmüştü bir hafta değil, iki hafta
          sürmüştü. Eve döndüğünde ise Tarık bambaşka biri olmuştu. Hülya ile
          aralarında her geçen gün duvar örmeye devam ediyordu. Kadın bu duruma
          çok üzülüyordu ve bir gün olan biteni en yakın arkadaşına anlattı ve
          arkadaşı dayanamayıp: “Artık saklamayacağım, kocan seni aldatıyor her
          iş çıkışında bir kadınla yemek yiyor.” Hülya buna inanmadı gidip kendi
          gözüyle görmek istedi ve her şey doğruydu eşi eve gelince bu doğru mu
          diye sordu. Tarık evet dedi. Ama başını kaldıramadı. Ve tek celsede
          boşandılar. Yakın arkadaşları Tarık’ın o kadınla evlenip yurtdışına
          gittiği söylediler. Hülya bir türlü nefret edemiyordu Tarık’tan. Tam
          bir yıl sonra Tarık’ın evlendiği kadın kapıya geldi. Hülya: “Sen hangi
          yüzle gelirsin?” Kadın: “Lütfen beni dinle. Senden gerçekten özür
          dilerim. Hiçbir şey senin bildiğin gibi değildi. Tarık bir yıl önce
          konferans için yurtdışına gidince, kanser olduğunu öğrendi ve hastalık
          ilerlemişti. Sana kıyamadı eğer sana hastalığını söylerse sen de onla
          beraber ölürsün diyerek sana kıyamadı. Ve elinde bir kutu vardı Tarık
          bunu sana bıraktı. Hülya ağlamaktan kutuyu zor açtı. Evet, Tarık
          ölmüştü ve onsuz geçen her günün notunu almıştı ve kâğıtlara yazmıştı.
          Ben ölmekten korkmam ama senin ölmene dayanamam demişti ilk notunda.
          Bir de anahtar vardı. O sahildeki evi almıştı arada gidip martıları
          beslersin sevgilim diye küçük bir not da düşmüştü.
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
