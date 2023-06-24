import React from "react";
import fabrika from "../images/fabrika.jpg";
import korkuEvi from "../images/korkuEvi.jpg";
import gizem from "../images/gizem.jpg";
import karanlik from "../images/karanlik.jpg";
import hayalet from "../images/hayalet.jpg";

export const HayaletEv = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Karanlıkta Tek Başına</h1>
        </div>
        <img
          src={hayalet}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Çiftçi John Bell ve ailesi kasabanın dışında uzak bir eve taşınır. Eve
          taşındıkları andan itibaren ilginç olaylarla karşılaşırlar. Sanki
          kapıdan birileri girmeye çalışıyormuş gibi sesler duymaya başlarlar.
          Ama görebildikleri hiçbir şey ya da hiç kimse yoktur. Ama zaman
          ilerledikçe eve girmeye şey başarıya ulaşır. Evdeki herkes korkunç bir
          şeyin eve girdiğini hisseder ama göremez. Giren bu şeyle birlikte
          kanat çırpınışları, farelerin tıkırtıları ve sanki vahşi hayvanların
          pençeleri sallanıyormuş gibi sesler duyarlar. Dehşete kapılan ev halkı
          ne olduğunu anlayamaz. Bilinmeyen Bir Varlık Tarafından Tokatlanma Bu
          sesler ve eve girmeye çalışan ne olduğu belirsiz varlık, çiftçi
          Bell’in ailesini korkutmaya devam eder. Bir gün evin küçük kızlarından
          daha 13 yaşında olan Betsy bağırarak uykusundan uyanır. Çünkü
          yatağında göremediği bir varlık ona şiddetli bir tokat atmıştır. Ama
          olaylar bununla da kalmaz. Evdeki diğer çocuklar da zamanla görünmeyen
          bir şey tarafından sürekli rahatsız edilir. Ne olduğunu anlayamayan
          Bell ailesi bu olayları kimseye anlatamaz. Ama bir gün canlarına tak
          eder ve korkudan ne yapacaklarını şaşırarak kasabanın papazına
          anlatmaya karar verirler. Papaz ve Şeytan Kovma Ayini Papaz evdeki
          garip durumdan kurtulmak için bir şeytan kovma ayini düzenler. Ama bu
          ayin pek işe yaramaz. Üstelik evdeki garip güç daha da öfkelenmiştir.
          Ayrıca zaman ilerledikçe daha güçlü biçimde kendini belli ediyordu.
          Önceleri fokurdamalara benzeyen sesi artık fısıltılar ve bazı
          kelimelere dönüşmüştü. Bu fısıltılar kutsal kitap İncil’e
          küfrediyordu. Evin babası Bell’in de ölüp mezara gideceğini
          söylüyordu. Bir gün bu görünmez ve korkutucu güç çiftçi Bell’e
          saldırdı. Ev halkı doktor çağırmak zorunda kaldı. Doktor da muayeneden
          sonra yaraların iyileşmesi için bir ilaç verdi. ama bu ile kısa bir
          süre içinde çok koyu bir sıvıya dönüştü ve işe yaramaz hale geldi.
          Doktor durumun farkındaydı ama Betsy’den şüpheleniyordu. Gün geçtikçe
          kötüye giden baba Bell sonunda öldü. Cenazede bu korkunç varlık tekrar
          duyuldu ve tam olarak yedi yıl sonra tekrar geleceğini söyledi. Dediği
          gibi yedi yıl sonra gelince de artık bir daha gelmeyeceğini ve 107 yıl
          görünmeyeceğini söyleyerek kayboldu.
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
