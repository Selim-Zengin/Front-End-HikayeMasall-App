import React from "react";
import yenilmez from "../images/yenilmez.jpg";
import uzaydan from "../images/uzaydan.jpg";
import soz from "../images/soz.jpg";
import tembeller from "../images/tembeller.jpg";
import uzayda from "../images/uzayda.jpg";

export const Uzaydan = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Uzaydan Gelen Görünmez Misafirler </h1>
        </div>
        <img
          src={uzaydan}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Uzayda bulunan gezegenlerin birinde yaşayan robotlar bir gün yakın
          gezegende bulanan akrabalarını ziyaret etmek için yola çıkarlar.
          Akrabalarını çok özlemiş olan robotlar bir an önce gitmek istedikleri
          yere varmak için acele ederler. Anne, baba ve iki çocuk robottan
          oluşan aile bir müddet uzay dolmuşunu bekledikten sonra sonunda gelen
          dolmuşa büyük bir heyecan ile binerler. Dolmuş onları sevdiklerine
          ulaştıracak ve kısa da olsa sevdikleri ile birlikte güzel bir tatil
          geçireceklerdir. Robot ailesi tam da bunları hayal ederken beklenmedik
          bir olay ile karşı karşıya kaldılar. İçi yolcu dolu olan uzay dolmuşu
          bir anda arızalanarak uzay boşluğu içerisinde sürüklenmeye başlamış,
          içerisinde olanlar ne olup bittiğini anlayamadan dünya üzerinde bir
          bahçeye zorunlu iniş yapmak zorunda kalmış. Bir müddet uzay
          dolmuşundan çıkmak istemeyen robotlar biraz zaman geçmesinin ardından
          ürkek ve endişeli bir biçimde uzay dolmuşundan çıkarak etrafı kolaçan
          etmeye başlamışlar. Her biri bir başka yere dağılan robotlardan
          kimileri görünmezlik özelliklerini kullanarak görünmez hale
          bürünmüşler. Böylece dünya üzerinde yaşayan canlılardan
          korunabileceklerini düşünmüşler. Güzel bir tatil ve sevdikleri ile
          birlikte eğlenceli vakit geçireceklerini düşünerek çıkmış oldukları
          yolculukta kendilerine dünyada bulan aile ise, bahçesine düştükleri
          evin içerisine girerek orayı teftiş etmeye başlamış. Çocuklar çocuk
          odasına giderek dinlenmeye çekilmişler. Anne robot ve baba robot ise
          evin kendileri için uygun olup olmadığını kontrol etmeye devam
          etmişler. Evin kendilerini almaya gelecek ekibi beklemek için uygun
          olduğunu anlayan robotlar uzay ekipleri gelene kadar burada bekleme
          kararı almışlar. Akşam olup ev halkı işten ve okuldan eve döndüğünde,
          görünmez halde olan robotları hiç fark etmemişler. Anne robot insan
          anne farkında olmadan ona ev işlerinde yardımcı olmuş. Baba robot ise
          ailenin bozuk olan arabasını süper mekanik güçleri ile tamir etmiş.
          Çocuk robotlar eve gelen ve akran oldukları insan çocukları o kadar
          çok sevmişler ki görünür olup onlarla oyunlar oynamamak için
          kendilerini zor tutmuşlar.Uzay kurtarma ekibini beklerken günler
          günleri kovalamış. Uzay kurtarma ekibi düşen uzay dolmuşunun yerini
          bir türlü saptayamamış. Dünyaya düşen diğer diğer robotlar çeşitli
          yerlere yerleşerek artık dünyada yaşamak zorunda olduklarını kabul
          etmişler. Aradan çok uzun zaman geçmiş olmasına rağmen bir gün uzay
          kurtarma ekibi ile dünyaya gelen uzaylılar bir bağlantı kurmuşlar.
          Yerleri tespit edilen robotlar uzay kurtarma ekipleri tarafından
          bulundukları yerlerden alınarak uzaydaki evlerine geri götürülmüşler.
          Uzun zaman birlikte yaşamak zorunda oldukları insanlardan ayrılmak
          zorunda kalan robotlar onları asla unutmamış.
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
