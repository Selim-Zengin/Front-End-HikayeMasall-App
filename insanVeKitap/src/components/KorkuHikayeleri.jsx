import React from "react";
import orman from "../images/orman.jpg";
import mezar from "../images/mezarlık.jpg";
import korkuEvi from "../images/korkuEvi.jpg";
import karanlik from "../images/karanlik.jpg";
import gizem from "../images/gizem.jpg";
import hayalet from "../images/hayalet.jpg";
import avci from "../images/avci.jpg";
import cocuk1 from "../images/cocuk1 .jpg";
import fabrika from "../images/fabrika.jpg";


export const KorkuHikayeleri = () => {
  return (
    <>
      <br />
      <br />
      <br />
     <br />
     <br />
     
     <div className="card" style={{fontSize:55, textAlign:"center", color:"#000000"}}>
  <div className="card-body" style={{borderTop: "none", borderBottom: "none"}}>Korku Hikayeleri</div>
</div>
  
      <div style={{ position: "fixed", left: "1423px",top:"255px"}}>
        <h1 style={{color:"white",backgroundColor:"black",padding:7}}>Popüler Olanlar</h1>
      </div>
      <div

        className="container text-center position-fixed"
        style={{
          width: "22rem",
          backgroundColor: "white",
          right: 139,
          top: 320
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

      <div
        className="container text-center"
        style={{ background: "white", marginLeft: 40 }}
      >
        <div className="row  border-4 border-dark">
          <div className="col-md-4">
            <div
              className="card  border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={orman}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">
                  Semanın Ormanda Korku Dolu Anları
                </h3>
                <p className="card-text" style={{ textAlign: "center" }}>
                  Bir varmış bir yokmuş çok tatlı bir kasabada şirin mi şirin
                  şeker mi şeker bir kız çocuğu varmış. Bu çocuğun…
                </p>
                <a href="/OrmanKorku" className="btn btn-dark">
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={mezar}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Mezarlıktaki Sesler</h3>
                <p className="card-text">
                  Ezgi ve kardeşi Ömer, her hafta sonu yaptıkları gibi İngilizce
                  kursuna doğru evden ayrılmışlardı. Ezgi 13 yaşında, kardeşi de
                  10…
                </p>
                <a href="/MezarSes" className="btn btn-dark">
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={korkuEvi}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Korku Evi</h3>
                <p className="card-text">
                  Esma, Gizem ve Metin hep birlikte Meral’e doğum günü hediyesi
                  verebilmek için Meral’i “Korku Evi’ne” götürmeye karar
                  vermişlerdi. Meral on…
                </p>
                <a href="/KorkuEv" className="btn btn-dark">
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4  mt-5">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem" }}
            >
              <img
                src={karanlik}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Karanlıkta Tek Başına</h3>
                <p className="card-text">
                  Sevda ve arkadaşı Cemre, bugün doğum günü olan Aslı’ya sürpriz
                  bir doğum günü planı yapıyorlardı. Hafta sonu olduğu için
                  bugün…
                </p>
                <a href="/KaranliktaTekBasina" className="btn btn-dark" style={{ marginTop: 25 }}>
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4  mt-5">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={gizem}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Gizemli Çığlık</h3>
                <p className="card-text">
                  Yağmurlu bir gündü. Gökyüzü ikiye ayrılacak gibi gürlüyordu.
                  Sokakta hiç kimse kalmamış, tüm çocuklar evlerine gitmişti.
                  Bardaktan boşanırcasına yağan yağmur…
                </p>
                <a href="/GizemliCiglik" className="btn btn-dark">
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4  mt-5">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={hayalet}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Hayaletli Ev – Tennesse Şeytanı</h3>
                <p className="card-text">
                  Çiftçi John Bell ve ailesi kasabanın dışında uzak bir eve
                  taşınır. Eve taşındıkları andan itibaren ilginç olaylarla
                  karşılaşırlar. Sanki kapıdan…
                </p>
                <a href="/HayaletEv" className="btn btn-dark">
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4  mt-5">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                style={{ height: "12rem" }}
                src={avci}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">
                  Hayalet Avcısı Harry Price – Tennesse Şeytanı
                </h3>
                <p className="card-text">
                  Harry Prlce aslında bir psişik araştırmalar uzmanıdır.
                  İngiltere’de bu uzmanın ismi bir bina ile birlikte anılır. Bu
                  bina, İngiltere’nin tarihi…
                </p>
                <a href="/HayaletAvci" className="btn btn-dark">
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4  mt-5">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={cocuk1}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Mezarın Ötesindeki Çocuklar</h3>
                <p className="card-text">
                  İngiltere’nin batı tarafında bulunan Devon bölgesinde, tam üç
                  yüz yıl kadar eski bir çiftlik evi bulunuyordu. Bu çiftlik
                  evinin sahibi…
                </p>
                <a href="/MezarOtesi" className="btn btn-dark">
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4  mt-5">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={fabrika}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Fabrikadaki Hayalet</h3>
                <p className="card-text">
                  Moskova’nın 24 numaralı fabrikası, 1941 yılında ilginç bir
                  hikâyeye konu oldu. 1912’de inşa edilen bu fabrikada, uçak
                  motorlarının üretimi yapılıyordu.…
                </p>
                <a href="/FabrikaHayalet" className="btn btn-dark" style={{ marginTop: 26 }}>
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginRight: 520 }}>
        <div
          className="card border-success mb-3 mx-auto border-4 border-dark"
          style={{ maxWidth: "80rem", marginTop: "30px" }}
        >
          <div className="card-body text-success " style={{ marginLeft: 100 }}>
            <h1 style={{ color: "black" }} className="card-title">
              Korku Hikayesi Nedir
            </h1>
            <p
              style={{ fontSize: "30px", color: "black" }}
              className="card-text"
            >
              Korku kurgu, korku edebiyatı ve korku fantezi bir edebiyat türüdür
              ve okurlarına korku ve terör hissi vermeyi hedefler. Edebiyat
              tarihçisi J. A. Cuddon, korku hikâyelerini farklı uzunluklarda bir
              kurgu... okurlarını şaşırtıyor ve hatta korkutuyor, ya da belki de
              onlara nefret ve tiksinme hislerini aşılıyor. sözleri ile
              tanımlar.[1] Korku kurgu, genellikle tedirgin edici ve korkutucu
              bir atmosfer yaratır ve yine genellikle doğaüstüdür ancak bu onun
              her zaman doğaüstü olacağı anlamına da gelmez. Bir korku kurgu
              çalışması genellikle toplumun genelinin korktuğu bir benzetme
              olarak da tanımlanabilir.
            </p>
          </div>
        </div>
      </div>
      

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
