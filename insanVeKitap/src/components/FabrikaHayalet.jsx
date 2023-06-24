import React from "react";
import korkuEvi from "../images/korkuEvi.jpg";
import karanlik from "../images/karanlik.jpg";
import gizem from "../images/gizem.jpg";
import avci from "../images/avci.jpg";
import fabrika from "../images/fabrika.jpg";

export const FabrikaHayalet = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Fabrikadaki Hayalet</h1>
        </div>
        <img
          src={fabrika}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Moskova’nın 24 numaralı fabrikası, 1941 yılında ilginç bir hikâyeye
          konu oldu. 1912’de inşa edilen bu fabrikada, uçak motorlarının üretimi
          yapılıyordu. Moskova’nın en büyük mezarlıklarından biri olan
          Semönovskoye mezarlığı, 19. Yüzyıldan itibaren savaşlarda ölen
          askerlerin gömüldüğü bir mezarlıktı. Bu mezarlık, 24 numaralı
          fabrikanın hemen yanında bulunuyordu. 1930 yılında mezar taşlarının
          kaldırılmasıyla, mezarlık kapanır. Kapanan mezarlığın yerine, fabrika
          için test atölyesi açılır. Bu atölyenin açılmasının üzerinden fazla
          bir zaman geçmeden, izahı olmayan bir takım olaylar yaşanır. Fabrikada
          çalışan işçiler, fabrikada esrarengiz bir takım olayların yaşandığını
          iddia ederler. Çeşitli sesler duyan ve hareket eden gölgeler gören
          işçiler, bu durumdan çok korkarlar. Pek çok işçi, gece vardiyasına
          kalmak istemez. İşçilere rağmen, fabrika yönetimi ve fabrikayı
          korumakla görevli olan askerler hayaletlere inanmaz. Fakat gün
          geçtikçe, hayalet gördüğünü iddia eden işçilerin sayısı artış
          gösterir. Hayaletlere inanmayan fabrika yönetimi, iddiaların
          artmasıyla gerçekçi açıklamalar aramaya başlar. Dönemin önemli
          konularından biri olan Sovyet Rusya ve Nazi Almanya’sı arasındaki
          gerginlik, fabrika yönetimi alarma geçirir. Fabrika yönetimi, Nazi
          ajanlarının fabrikanın faaliyetlerini aksatmaya çalıştığını düşünür.
          İşçilerin hayalet olarak nitelendirdiği durumlar, belki de Nazi
          ajanlarının bir oyunudur. Bu durumu göz önünde bulunduran fabrika
          yönetimi, fabrikanın korumasını arttırır. Yine de, olayların ardı
          arkası kesilmez. İşçiler hala hayalet gördüklerini söylerler. Bu
          olayın aydınlatılması adına, iç savaş gazisi olan İvan Hrapov
          görevlendirilir. Sabırlı ve metanetli kişiliğiyle bilinen Hrapov,
          oldukça rasyonel bir insandır. Hrapov, hayaletlerin varlığına inanmaz
          ve mistik olayları mantık dışı bulur. Hrapov’a göre, hayalet sanılan
          şeyler kılık değiştiren düşmanlardır. Hrapov, bu halk düşmanlarını en
          kısa sürede ortaya çıkaracağından emindir. Takvimler Mayıs 1941’i
          gösterirken, İvan Hrapov fabrikaya gelerek görevine başlar.Hrapov’un
          fabrikaya geldiği ilk zamanlarda, ortalık oldukça durgundur. Fakat bir
          süre sonra, hayaletler tekrar dolaşmaya başlarlar. Fabrikanın
          atölyesinde aramalar yapılsa da herhangi bir şey bulunamaz. Hrapov, bu
          işi çözmekte kararlıdır ve fabrikayı devriye gezmeye karar verir. Gece
          devriyesi esnasında, bir işçi korkunç bir şekilde çığlık atar. Çığlığı
          duyan İvan Hrapov, hızlı bir şekilde işçinin yanına gider ve
          gördüklerine inanamaz. Hrapov insan figürüne benzeyen bir şeyin, oda
          da uçtuğunu görür. Uçan şey, bir hayalettir. Hayalet yükselerek,
          havada çözünür. Hrapov, şoka girer ve ne yapacağını bilemez. Görevine
          istinaden, Hrapov’dan beklenen bir rapor vardır. Hrapov, rapora ne
          yazacağı konusunda oldukça kararsızdır. Fabrikada bir hayaletin
          dolandığından emin olan Hrapov, rapora gördüğü her şeyi yazar. Raporu
          teslim alan fabrika yönetimi de, oldukça şaşırır. Fabrika yönetimi
          için, hayaletlerin varlığına inanmak oldukça güçtür. Tüm bu olayların
          sonucunda, işin netlik kazanması adına bir araştırma başlatılır. Fakat
          bu araştırma sonlandırılamadan, Almanya ile savaş başlar. Fabrikanın
          taşınmasıyla, tüm bu olaylar son bulur. Günümüzde bu esrarengiz
          fabrikada, uçak motorları üreten “Salüt” faaliyet göstermektedir.
          Semönovskoye Mezarlığı’nın arazisinde bulunan kilise de onarılarak,
          Rus Ortodoks Kilisesi’ne verilmiştir. Mezarlıkta yatan askerler için,
          Vatan Savunucuları Anıtı açılacağı açıklanmıştır. Fabrikada görülen
          hayaletler ise hala gizemini koruyor.
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
