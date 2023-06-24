import React from "react";
import fabrika from "../images/fabrika.jpg";
import korkuEvi from "../images/korkuEvi.jpg";
import gizem from "../images/gizem.jpg";
import karanlik from "../images/karanlik.jpg";
import segrek from "../images/segrek.jpg";
import dumrul from "../images/deliDumrul.jpg";

export const Dumrul = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Deli Dumrul</h1>
        </div>
        <img
          src={dumrul}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Geçmiş zamanların birinde Deli Dumrul isimli bir adam yaşarmış. Bu
          adam yaşadığı yerde bulunan kuru bir çayın üzerine köprü yaptırmış ve
          köprüden geçenlerden para almaya başlamış. Köprüden geçen insanlardan
          30 geçmeyen insanlardan ise zorla 40 akçe alırmış. Günlerden bir gün
          Deli Dumrul’un kurmuş olduğu köprünün yanına bir oba yerleşmiş. Orada
          yaşamaya başlamışlar. Bir gün obadan bir feryat yükselmiş. Feryadın
          sebebini merak eden Deli Dumrul obada yaşayan insanların yanına gitmiş
          ve ne olduğunu sormuş. Onlardan bir yiğidin öldüğü haberini almış ve
          üzülmüş. Bunun üzerine Azrail’e çok kızmış. Onunla meydan okumayı çok
          istemiş ve bunun için Allah’a yalvarmış. Sonra da yaşadığı yere
          dönmüş. Deli Dumrul bir gün büyük bir şölen düzenlemiş. Deli Dumrul’un
          şölenine Azrail’de gelmiş ve Deli Dumrul ona kılıcını savurarak
          öldürmek istemiş. Ancak Azrail güvercine dönüşerek Dumrul’dan kaçmış.
          Deli Dumrul’da atına atlayarak Azrail’in peşine düşmüş. Dumrul
          Azrail’i yakalamaya çalışırken at ürkmüş ve Dumrul attan aşağıya
          düşmüş, Azrail düşme sonrası yanına gelince ona yalvarmaya başlamış.
          Bunun üzerine Azrail kendisine değil Tanrı’ya yalvarmasını söylemiş.
          Bunun üzerine Deli Dumrul Tanrı’ya yalvarmaya başlamış. Tanrı ona
          cevap vermiş ve kendi ölmek istemiyorsa kendisi yerine ölecek bir kişi
          bulmasını istemiş. Dumrul bunun üzerine yola çıkarak ailesinin yanına
          gitmiş. Onlardan kendi için canlarını vermesini istemiş. Ancak ailesi
          bu isteği kabul etmemişler. Karısına gitmiş ve karısı canını vermeyi
          kabul etmiş. Ancak Deli Dumrul ondan ayrı kalmak istemiyormuş ikisinin
          de canını almasını ya da bağışlamasını istemiş. Bunun üzerine Tanrı
          ikisini affederek onların yaşamasına izin vermiş. Bu olaydan sonra iki
          140 yıl daha yaşamışlar.
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
