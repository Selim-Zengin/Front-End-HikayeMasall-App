import React from "react";
import fabrika from "../images/fabrika.jpg";
import korkuEvi from "../images/korkuEvi.jpg";
import gizem from "../images/gizem.jpg";
import karanlik from "../images/karanlik.jpg";
import orman from "../images/orman.jpg";

export const OrmanKorku = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <div style={{ position: "fixed", left: "1462px", top: "180px" }}>
        <h1 style={{ color: "white", backgroundColor: "black", padding: 7 }}>
          Popüler Olanlar
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

      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 50 }}
      >
        <div className="card-body">
          <h1 className="card-title">Semanın Ormanda Korku Dolu Anları</h1>
        </div>
        <img
          src={orman}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Bir varmış bir yokmuş çok tatlı bir kasabada şirin mi şirin şeker mi
          şeker bir kız çocuğu varmış. Bu çocuğun ismi sema imiş. Sema herkes
          tarafından sevilen bir çocukmuş. Evinin bahçesinde oynar
          oyuncaklarıyla oynar resimler yapar herkes onu çok severmiş. Sema bir
          gün ailesi ile pikniğe gitmiş. Çünkü ailecek her hafta sonu piknik
          yaparlarmış. Sema orda ormanda dolaşmaya karar vermiş. Ama ailesine
          haber vermeyi unutmuş. Sema ormanları ve hayvanları çok sevdiği için
          koşarak ormanın derinliklerine ulaşmış. Her yerde hayvanlar varmış.
          Kuşlar, uğur böcekleri, kelebekler, kediler daha neler neler. Sema
          onlarla oynamaya başlamış. Sonra bir bakmış ki hava kararıyor. Güneş
          batmış. Ve soğuk olmaya başlamış. Semanın o çok sevdiği ortam bir anda
          gözüne korkunç gözükmeye başlamış. Sanki ağaçların dalları birer
          canavar kolu gibi geliyormuş ona. Sema korkudan ne yapacağını
          bilememiş ve korkudan ağlamaya başlamış. Hıçkıra hıçkıra ağlarken orda
          bir aslan görmüş. Aslan kükremiş sema daha çok korkmuş bağırarak
          koşmaya başlamış. Nereye doğru koştuğunu bile bilmeyen semanın boğazı
          kurumuş, su içmek istemiş. Yakında gelen dere sesine doğru gitmiş. Su
          içmiş ve bir anda derenin kenarında ona doğru koşan yüzen bir timsah
          görmüş. Avazı çıktığı kadar bağıran sema tekrar koşmaya başlamış. Bir
          ağaca sarılmış ağlamaktan gözleri şişmiş. Hem de üşüdüğü için elleri
          de buz gibi olmuş. Ağacın yanındayken yerden sesler duymuş. Bir de ne
          görsün kocaman bir fare. İmdat diye bağırmaya başlamış sema. Tekrar
          koşmaya başlamış. İyice kaybolduğunu düşünen sema Allah ben burada ne
          yapacağım tek başıma? Ben neden kimseye haber vermeden buralara kadar
          geldim? Artık kimse beni bulamayacak. Beni burada hayvanlar yiyecek,
          ailem de beni çok merak edecek.Bu sefer karar vermiş sürekli koşmaya.
          Çünkü durursa ya bir canavar onu o görmeden yakalayıp yerse diye
          endişelenmeye başlamış. Hiç durmadan koşuyormuş. Gerçekten de etrafta
          sürekli korkunç şeyler görmeye devam ediyormuş. Ayılar, köpekler,
          domuzlar, böcekler, yarasalar daha bir sürü hayvan hatta adını bile
          bilmediği ilk defa karşılaştığı hayvanları bile. En sonunda çok
          yorulmuş durup dinlenmeye karar vermiş. Tam nefesi normale dönerken.
          Ayaklarına doğru gelen simsiyah bir yılan görmüş. Tekrar koşmaya devam
          etmiş. Artık çaresiz kalan kız kendini yola atmış. Yolda bir süre
          koşmaya devam etmiş. Sonunda bir araba görmüş ve ailesinin yakınlarda
          olduğunu anlamış. Koşmuş ailesinin yanına. Onlara sarılmış. Ailesi
          semaya çok kızmış. Sonra her şeylerini toplamışlar evlerinin yolunu
          tutmuşlar. Yol boyu ailesi yaptığının ne kadar yanlış bir şey olduğunu
          söyleyip durmuşlar. Sema üzüntüden ne yapacağını bilemiyormuş.
          Ailesinden defalarca özür dilemiş. Bir daha asla böyle bir şey
          olmayacak demiş. Gerçekten de ailesi olmadan hiçbir şey yere izinsiz
          gitmemiş. Yaptığı hatanın farkında olan sema annesine sarılıp yolda
          uyuyuvermiş. Annesi de semanın üşümüş olduğunu anlayınca üzerine
          battaniye örtmüş ve evlerine girmişler.
        </p>
      </div>

      <br />
      <br />
      <br />
    </>
  );
};
