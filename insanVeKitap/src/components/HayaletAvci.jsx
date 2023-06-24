import React from "react";
import avci from "../images/avci.jpg";
import fabrika from "../images/fabrika.jpg";
import korkuEvi from "../images/korkuEvi.jpg";
import gizem from "../images/gizem.jpg";
import karanlik from "../images/karanlik.jpg";

export const HayaletAvci = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Hayalet Avcısı Harry Prlce</h1>
        </div>
        <img
          src={avci}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Harry Prlce aslında bir psişik araştırmalar uzmanıdır. İngiltere’de bu
          uzmanın ismi bir bina ile birlikte anılır. Bu bina, İngiltere’nin
          tarihi binalarından birisi olan Borley. Borley içinde oturan çoğu
          kişinin garip deneyimler yaşadığı ilginç bir binadır. Viktorya
          döneminden kalan bu bina 20 yıla yakın bir süre hayaletler tarafından
          gasp dilmiş. İçinde yaşayan herkes bu olaya ilişkin bir şeyler
          yaşamış. Harry Prlce ise, bu olayı araştırmak için çok çabalamış. Bina
          ve içerisinde yaşananlarla ilişkili bir kitabı yayınlanmış. Bu kitap
          sayesinde herkes psişik dünya adı verilen farklı bir alanla ilgili
          daha çok bilgi edinmiş. Harry Prlce’in ismi de hayalet avcısı olarak
          kalmış. Hayaletli Borley Binası Borley 1863 yılında inşa edilen tarihi
          bir bina. Harry Prlce ile bu binayla ilgili araştırmalarına 1929’da
          başlamış. O zamana kadar binanın içinde yaşayanlar farklı sesler
          duyduklarını hatta garip varlıklar gördüğünü anlatmış. Gördükleri
          içinde bir rahibe, başı olamayan bir adam, sürekli arabasını çekmekte
          olan bir arabacı ve de tanımlanamayan upuzun ve siyah bir varlık
          varmış. Zincir şıkırtıları, binanın yanındaki kiliseden sürekli
          duyulan ilahiler, kırılan cam sesleri ve çok fazla ayak sesi binada
          yaşayanları sürekli korkutmuş. Harry Prlce içerisinde yaşayan
          insanların anlattıklarını tam 19 yıl boyunca araştırmış ve
          duyduklarından bir kitap hazırlamış. Binanın İçinden Araştırmalar
          Harry Prlce, 1937 senesinde bir takım bilim insanı ve mühendisler gibi
          araştırmacılardan oluşan yaklaşık 40 kişiyle birlikte binada oturmaya
          başlamış. Önceleri fark edilen tek şey bazı odaların diğerlerinden
          daha soğuk olmasıdır. Bazen bir odada kalan araştırmacılardan birisi
          birdenbire odanın ısısının yaklaşık on derece düştüğüne şahit olur.
          Öte yandan araştırmacı Harry Prlce dahil bir kaç kişi rahibenin
          hayaletini görür ve hatta onunla konuşur.Rahibe çok eskiden Fransa’dan
          bu binaya getirilmiş. Ev sahibi ile evlenmek üzereyken öldürülmüş.
          Prlce bu olayla ilgili bir araştırma yapar ve rahibenin bahsettiği
          zamanda ölen bir kadının kafatasına ve mezarına ulaşır. Yaptığı
          araştırmanın sonuçlarını yayınlayan Prlce daha sonra Londra
          Üniversitesi’nde psişik araştırmalarla ilgili bir laboratuvar
          kurulmasına da öncülük eder.
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
