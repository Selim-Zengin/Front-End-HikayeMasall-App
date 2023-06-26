import React from "react";
import uzaydan from "../images/uzaydan.jpg";
import yenilmez from "../images/yenilmez.jpg";
import uzayda from "../images/uzayda.jpg";
import tembeller from "../images/tembeller.jpg";
import soz from "../images/soz.jpg"


export const Uzayda = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Uzayda Asılı Kalan Astronotlar Masalı </h1>
        </div>
        <img
          src={uzaydan}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Bilimin ve teknolojinin son sürat geliştiği bir çağda bir grup bilim
          insanı uzayı daha detaylı incelemek ve orada olanlar hakkında bilgi
          edinme için bir uzay gezisi planlamışlar. Uzaya gidecek ekip uzun
          uğraşlar neticesinde seçilerek netlik kazanmış. Devasa büyüklükte olan
          uzay mekiği görenleri hayrete düşürmekteymiş. Uzay mekiğinin
          içerisinde uzay yolculuğu sırasında astronotlara gerekli her şey
          bulunmaktaymış. Uzay yolculuğunun günü geldiğinde tüm ekip büyük bir
          heyecan ile astronotların mekiğe binmesini izlemişler. Tüm işlemler
          tamam olup uzay mekiği yola çıktığında ise, tüm ekibi ayrılık hüznü
          kaplamış. Astronotlar görev sürelerini tamamlayacak ve tekrar dünyaya
          döneceklermiş. Uzay mekiğinin havalanması ile karışık duygular
          yaşamaya başlayan astronotlar hem çok heyecanlı ve gururluymuş hem de
          ailelerinden ve çalışma arkadaşlarından ayrıldıkları için
          üzülüyorlarmış. Başlarına geleceklerden habersiz uzaya doğru yükselen
          astronotları kötü bir sürpriz beklemekteymiş. Bir müddet uzaya doğru
          yol aldıktan sonra uzay mekiğinde bir sorun ortaya çıkmış. Panikle ne
          yapmaları gerekiyorsa yapmaya çalışan astronotlar kısa süre sonra uzay
          mekiğinin tüm dünya ile iletişiminin kesildiğini ve artık hareket
          etmediklerini anlamışlar. Bir süre uzay mekiğini tekrar çalıştırmak ve
          dünyaya dönmek için uğraşmışlar. Dünya ile kopan iletişimlerini
          yeniden kazanmak ve yardım istemek için ellerinden geleni yapmışlar
          fakat tüm bu çabaları bir sonuç vermemiş. Uzay mekiği içerisinde
          yaşamlarını sürdürmeye başlayan astronotlar günden güne zorlanmaya
          başlamışlar. Sınırlı olan yiyecek stoklarının bitmesi onları en çok
          düşündüren konular arasında yer almaktaymış. Günlerden bir gün uzay
          içerisinde kendilerine yaklaşan bir parlak bir cisim fark etmişler. Bu
          cismin ne olduğunu hiçbiri anlayamamış. Parlak cisim yavaş yavaş uzay
          mekiğine yaklaşmış bu esnada astronotlar derin bir uykuya dalmışlar.
          Parlak cismin ne olduğunu ve ne yapmak istediğini bilmedikleri için
          uyumak istememişler ancak kimse bu derin uykuya karşı koyamamış. Ne
          kadar uyudular, onlar uykudayken neler oldu, parlak ışık nereye gitti
          bilinmez ama uykularından uyandıklarında uzay mekiğinin hareket
          ettiğini ve rotasının dünya olduğunu görmüşler.Sevinç içerisinde
          birbirlerine sarılan astronotlar dünyaya ve ailelerine kavuşacakları
          için çok mutlu olmuşlar. Kısa süren ancak yaşadıkları heyecan
          nedeniyle bir türlü bitmek bilmeyen yolculuk sonrasında astronotlar
          uzay mekiğini başarılı bir biçimde dünyaya indirmişler. Astronotlardan
          uzun süredir haber alamayan aileleri ve yetkililer hemen merkezin
          yolunu tutmuş. Uzun süren sarılmalar ve sevinç gözyaşları eşliğinde
          herkes sevdiklerine kavuşmuş. Bir türlü açıklanamayan parlak ışığın
          akıbetini ise kimse bulamamış.
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
