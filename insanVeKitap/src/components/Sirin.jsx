import React from "react";
import yenilmez from "../images/yenilmez.jpg";
import uzayda from "../images/uzayda.jpg";
import tembeller from "../images/tembeller.jpg";
import soz from "../images/soz.jpg";
import sirin from "../images/sirin.jpg";

export const Sirin = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Şirin Kedi ve Prenses Masalı</h1>
        </div>
        <img
          src={sirin}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Bir varmış bir yokmuş. Evvel zaman içinde kalbur zaman içinde uzak bir
          ülkede, şirin bir kedi varmış. Bu kedi, sarayın bahçesinde yaşayan
          prensesin en yakın arkadaşıydı. Prenses, kedinin zarifliğine ve
          zekasına hayrandı. Kedi, prensese her zaman neşeli anlar yaşatır ve
          onunla paylaşımlarıyla prensesi mutlu ederdi. Adeta beraber
          büyümüşlerdi ve birbirlerinin en yakın dostulardı. Bir gün, prenses
          yalnız kalmıştı. Sarayda herkesin işi vardı ve prenses, kendini
          hüzünlü hissediyordu. Kedi bunu fark etti ve prensese yaklaştı. “Neden
          üzgünsün, prensesim?” diye sordu. Prenses, kedinin yanına oturdu ve
          ona, “Babam bana istemediğim bir prensle evlenmemi söyledi. Kendimi
          hiç mutlu hissetmiyorum” dedi. Kedi bunu duyunca önce bir afalladı
          fakat daha sonra kedi, prensesi dinledi ve ona yardım etmek istedi.
          “Sana bir fikir verebilirim prensesim. Baban seni zorla evlendiremez.
          Bir prens seni kalbinden sevmeden seni sevmeni bekleyemez” dedi.
          Prenses, kedinin söyledikleriyle rahatladı ve ona teşekkür etti. Biraz
          da olsa üzüntüsü kedi dostu sayesinde azalmıştı. Aradan birkaç gün
          geçti ve prenses, sarayda bir balo düzenleyeceğini duyurdu. Balo için
          birçok prens davet edildi ve prenses, kediye dans edecek bir prens
          aramasını söyledi. Kedi, prensesin isteğini yerine getirmek için,
          birçok prensle görüştü, konuştu ve tanıştı. Fakat ne yazık ki prenses,
          hiç kimseyle dans etmek istemedi. Günler geçti ve prenses artık
          umudunu kaybetmişti. Derken saraya, yakışıklı mı yakışıklı bir prens
          gelmişti. Prens, prensesin kalbini kazanmıştı. İkilinin birbirlerine
          sırılsıklam aşık olduğu ortaya çıktı. Prens, prensese gerçek bir aşkla
          bağlandı ve ona asla zarar gelmesine izin vermedi. Bir gün, prenses
          kediye dönüp, “Sen beni hep mutlu ettin. Senin sayende gerçek aşkımı
          buldum. Sen de benim en yakın arkadaşımsın. Seninle hep yanımda olmak
          istiyorum” dedi. Kedi, prensesin bu sözleriyle çok mutlu oldu ve
          prensesle birlikte yaşamak istediğini söyledi. Prens ve prenses,
          kediyi yanlarına aldılar ve sarayda mutlu bir hayat yaşamaya devam
          ettiler.Böylece, prensesin kalbine giren gerçek aşk sayesinde mutlu
          bir sona ulaşan, kediyi de yanına alan prens ve prenses bir ömür boyu
          sevgi, sadakat, huzur ve güven içerisinde yaşadı. Hem sevdiği adam hem
          de en yakın arkadaşı olan kedi prensesin yanında olduğu için prensesin
          sırtı hiçbir zaman yere gelmedi. Prenses 60 yaşına geldiğinde hala 20
          yaşında gösteriyordu. Çünkü en büyük ilacın sevgi ve dostluk olduğunu
          prens ve kediden öğrenerek tecrübe etmiş bulundu.
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
