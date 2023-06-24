import React from "react";
import avci from "../images/avci.jpg";
import fabrika from "../images/fabrika.jpg";
import korkuEvi from "../images/korkuEvi.jpg";
import gizem from "../images/gizem.jpg";
import karanlik from "../images/karanlik.jpg";
import cocuk1 from "../images/cocuk1 .jpg";

export const MezarOtesi = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Mezarın Ötesindeki Çocukar</h1>
        </div>
        <img
          src={cocuk1}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          İngiltere’nin batı tarafında bulunan Devon bölgesinde, tam üç yüz yıl
          kadar eski bir çiftlik evi bulunuyordu. Bu çiftlik evinin sahibi ise
          Egna Ruggles adlı yaşlı bir kadıncağızdı. Egna evinin üst karında
          orayı sanki kendi oyun alanlarıymış gibi kullanan iki küçük kız
          çocuğunun yaşadığını biliyordu. Üstelik bu iki çocuğun yıllar önce
          ölmüş olduklarını da biliyordu. Yani iki hayalet çocukla birlikte
          yaşıyor, onların seslerini duyuyor ve bazen de yatak odasının önünde
          oynadıklarını görüyordu. Ama Egna onlardan korkmuyordu. Ara sıra çok
          ses yaptıklarında sessiz olmalarını söylüyor ve çocukları
          susturabiliyordu. Ziyaretçi Bir gün Egna Ruggles’ın ziyaretine bir
          kadın geldi. Eski bir arkadaş olan bu ziyaretçiye ev sahibi evinde
          garip bir şeyler hissedip hissetmediğini sordu. Ziyaretçisi bu evde
          yaklaşık olarak dört yaşlarında iki çocuğun hayaletinin olduğunu
          söyledi. Çocukların ikisi de kızdı ve birinin ismi E birininki de A
          ile başlıyordu. Egna Ruggles çocukların kim olduğunu merak edip
          kiliseye gitti ve bu evde eskiden yaşayan iki kız çocuğun daha dört
          yaşındayken öldüğünü öğrendi. Çocukların ölümlerinin arasında 56 yıl
          vardır. İkisi de bu evde güzel zamanlar geçirdikleri için hala
          ayrılmak istemiyorlardı. Egna Ruggles ve çocuklar arasında 58 yaş
          vardı. Ama Egna çocukları anlayabiliyordu Kilise görevlisinin
          çocukların burada çok mutlu oldukları için gitmek istemedikleri
          fikrini de anlıyordu. Bu yüzden ara sıra onları susturarak onlarla
          birlikte yaşamaya devam etti. Neyse ki çocuklar geçmiş zaman
          terbiyesiyle büyüdükleri için onun sözünü dinliyorlardı.
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
