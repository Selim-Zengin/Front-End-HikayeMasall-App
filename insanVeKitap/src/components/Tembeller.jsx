import React from "react";
import yenilmez from "../images/yenilmez.jpg";
import uzayda from "../images/uzayda.jpg";
import tembeller from "../images/tembeller.jpg";
import soz from "../images/soz.jpg";

export const Tembeller = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Tembeller Ülkesinde Çalışkan Olmak</h1>
        </div>
        <img
          src={tembeller}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Dere tepe düz gittikten sonra varılan bir ülkede yaşamını sürdüren
          halk tembellikleri ile ün salmış. Ülkede küçük büyük, yaşlı genç,
          kadın erkek hiç kimse çalışmayı sevmezmiş. Ülkenin sokakları tembel
          çöpçüler nedeniyle çöplerle doluymuş. Ülkedeki evler tembel ev
          hanımları nedeniyle kirden ve pislikten geçilmez hale gelmiş. Ülke
          halkı o kadar tembelmiş ki ülke genelinde kendi kendine büyümüş olan
          meyve ağaçlarındaki meyveler bile toplanmaz hep çürür gidermiş. Ülkede
          çalışkanlığı ile ün yapmış sadece bir tek kişi varmış. Tek olmanın
          vermiş olduğu hayal kırıklığı ile bütün gün yalnız başına çabalayan bu
          genç sabahın ilk saatler ile kalkar evini ve evinin bahçesini temizler
          sonrada çiftçilik yaptığı tarlanın yolunu tutarmış. Kurak geçen bir
          yazın sonunda ülkede kalan son yiyeceklerde tükenmeye başlamış. Ülke
          halkı tembelliğinden ne yapacağını bilemeden bir çözüm yolu bulmak
          için kafa yormaya başlamış. Tembelliklerinden düşünmenin bile zor
          geldiği halk ne yapacakları konusunda doğru bir sonuç bulamamış.
          Sonunda kış gelmiş ve kapıyı çalmış. Soğuktan ve yiyecek sıkıntısından
          ne yapacağını bilemeyen halk önde gelen kişileri çalışkan gencin evine
          göndererek ondan akıl alma kararı almış. Çalışkanlığı sayesinde kışı
          rahat geçirmeyi planlayan genç tüm yaz boyu biriktirdiği erzakları ve
          yiyecekleri onlarla paylaşabileceğini ancak bunun karşılığında
          kendisine ücret ödenmesini istemiş. Elinde kendisine yetecek kadar
          erzak bırakan ve geri kalanını tembel köylülere satan çalışkan genç
          kendisine çok güzel bir hayat kuracak parayı biriktirmiş. Tüm kışı
          evinde huzur ile geçiren genç ilk baharın gelmesi ile eşyalarını
          toplayarak köyden ayrılmış. Yeni bir hayat kurmak için herkesin
          kendisi gibi çalışkan olduğu bir şehre yerleşmiş. Çalışkanlığının
          zahmetini zengin bir hayat ile ödüllendiren genç yerleşmiş olduğu
          şehirde de çalışkanlığı ile ün salmış. Şehrin ileri gelenlerinden bir
          fabrikatör genci yanına çağırarak ona fabrikasında çok güzel bir iş
          vermiş. Zamanla patronunun gözüne daha fazla girmeyi başaran genç bir
          gün patronunun güzel kızı ile karşılaşmış. Tüm cesaretini toplayarak
          patronundan kızını isteyen gence patronun verdiği cevap çok
          manidarmış. ‘’Kızımı senin gibi çalışkan birisi ile evlendirmek benim
          için büyük bir onurdur.’’ Demiş.Çalışkanlığın hiçbir zaman
          kaybetmeyeceğini daha iyi anlayan genç o saatten sonra işine ve hayata
          çok daha büyük bir özveri ile tutunmuş. Tembelliğin belini kıran ve
          artık çalışmaya başlayan eski köyünden de zaman zaman haber alıyormuş.
        </p>
      </div>
      <div style={{ position: "fixed", left: "1423px", top: "180px" }}>
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
          top: 260,
        }}
      >
        <div style={{ overflow: "auto", height: "650px" }}>
          <div className="col" style={{ border: "3px solid #000000" }}>
            <div className="col" style={{ marginBottom: 159 }}>
              <div className="card" style={{ width: "19rem", height: "9rem" }}>
                <img src={yenilmez} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Yenilmez Askerler Masalı</h5>
                  <a href="/Yenilmez" className="btn btn-dark">
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
                <img src={uzayda} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Uzayda Asılı Kalan Astronotlar Masalı</h5>
                  <a
                    href="/Uzayda"
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
                <img src={tembeller} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Tembeller Ülkesinde Çalışkan Olmak</h5>
                  <a href="/Tembeller" className="btn btn-dark">
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
                <img src={soz} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Söz Dinlemeyen Tren Bobi Masalı</h5>
                  <a href="/Soz" className="btn btn-dark">
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
