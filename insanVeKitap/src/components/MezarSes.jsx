import React from "react";
import fabrika from "../images/fabrika.jpg";
import korkuEvi from "../images/korkuEvi.jpg";
import gizem from "../images/gizem.jpg";
import karanlik from "../images/karanlik.jpg";
import orman from "../images/orman.jpg";
import mezar from "../images/mezarlık.jpg";

export const MezarSes = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 50 }}
      >
        <div className="card-body">
          <h1 className="card-title">Mezardan Gelen Sesler</h1>
        </div>
        <img
          src={mezar}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Ezgi ve kardeşi Ömer, her hafta sonu yaptıkları gibi İngilizce kursuna
          doğru evden ayrılmışlardı. Ezgi 13 yaşında, kardeşi de 10 yaşındaydı.
          Anneleri yanlarına akşamdan hazırladığı peynirli poğaçalardan
          koymuştu. Ders arası olduğunda bu iki kardeş kantinde buluşup meyve
          suyu eşliğinde annelerinin yaptığı mis gibi poğaçaları yiyeceklerdi.
          Ömer, ablasının sözünü hiç dinlemez, her zaman bir bahane bulup
          birlikte gidip birlikte dönecekleri yollarda genelde dönüş saatlerinde
          Ezgiyi yalnız bırakırdı. O gün de öyle oldu ve derse beraber
          gitmelerine rağmen, akşama doğru ders çıkışında yine bir kaçış yolu
          bulmuş olan Ömer, ablasına haber dahi vermeden dershaneden ayrılmıştı.
          Çıkışta her zamanki buluşma noktalarında bütün dershane öğrencilerinin
          kapıdan çıkışını öylece durup izleyen Ezgi, bugün de kardeşinin haber
          vermeden kendisinden önce eve ya da arkadaşlarıyla oyun oynamaya
          gitmiş olacağını düşündü. Böyle düşünerek başını bulunduğu noktadan,
          otobüs durağına kadar olan yokuşun yukarısındaki durağa doğru çevirdi.
          Yine tek başına bu yol kenarındaki mezarlığın yanından geçmek zorunda
          kalacaktı. İşte Ömer’e de aslında sadece bunun için çok kızıyordu. O
          yokuş yukarı olan mezarlık kenarındaki yoldan tek başına geçmekten hep
          ürküyordu. Ürkmesine çok ürküyordu ama şu anda eve gidebileceği daha
          iyi bir çıkış yolu da yoktu. Mecburen o yoldan geçecek ve otobüs
          durağına varacaktı. Dershanedeki öğrenciler birer birer yanından
          geçmiş, Ezgiyse yavaş adımlarla diğerlerinin gittiği yönün aksine
          doğru olan istikamette yol almaya başlamıştı. Kış mevsimindeki bu
          erken kararan havaları hiçbir zaman sevememişti Ezgi. Yeni yeni
          kararmaya başlayan havada, elleri cebinde, başını paltosunun içine
          gömer gibi yavaş adımlarla yokuşu tırmanmaya başladı. İçinde öyle
          büyük bir korku vardı ki, yolun tam karşı tarafında yer alan mezarlığa
          hiç bakmamaya çalışıyordu. Yol bitme bilmiyor, sanki her adımında
          yokuşun tepesindeki otobüs durağı daha da uzaklaşıyordu.Çaresiz bir
          şekilde yokuşu tırmanırken kalbi de hızla çarpmaya devam ediyordu.
          Karşı yoldaki mezarlığa bakmamak için çok çabalıyordu ama sebebini
          bilmediği bir çekimle, kaçamak bakışlar atmaktan da geri durmuyordu.
          Sonra kendi kendine korkacak bir şey yok, hem orada kimse de yok,
          diyerek etraftan gelen seslere kulak kabartmaya başladı. Sanki aynı
          anda hem köpek havlamaları hem de türünü bilmediği kuşlar çığlık atar
          gibi sesler çıkarmaya başlamıştı. Birden bu seslerin de etkisiyle
          olduğu yerde kalakaldı. Ne yapacağını, hangi yöne doğru kaçacağını
          hesaplamaya çalıştı. Beyni çok hızlı çalışmaya başladı, ne kadar
          korksa da seslerin kaynağını merak etmekten alıkoyamıyordu kendini.
          Ardından mezarlığa doğru hızlı adımlarla yürümeye başladı. Sesler
          şimdi daha da yakından gelmeye başlamıştı. Dikkatini toplayıp sebebini
          öğrenmeye çalıştı ama sanki kalbinin sesi kulaklarında çınlıyormuş
          gibi geliyordu. Artık korkudan olduğu yere çakılıp kalmıştı ki Ömer ve
          onun üç arkadaşının mezarlığın ağaçları arasından kendisine kahkahayla
          güldüğünü fark etti.
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
