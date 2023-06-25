import React from "react";
import romeo from "../images/romeo.jpg";
import ruhikizim from "../images/ruhikizim.jpg"
import kerem from "../images/kerem.jpg";
import leyla from "../images/leyla.jpg";

export const Ruh = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Ruh İkizim</h1>
        </div>
        <img
          src={ruhikizim}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Toprak, yirmili yaşların henüz başındaydı. Ne ilk aşkını
          yaşayabilmişti ne kavuşmayı ne de ayrılığı… Aşka inanıyordu, belki de
          inanmak istiyordu. Arkadaşları, dostları hemen hemen her gün
          aşklarından bahsederken Toprak hiç oralı olmazdı. Ocak ayının son
          haftası soğuk ve karlı bir günde Toprak yine ikinci evim diye hitap
          ettiği kütüphanenin yolunu tutmuştu. Dondurucu rüzgârın ve karın
          etkisiyle nerdeyse kardan kadına dönüşmüş halde kütüphaneye girmeyi
          başarabilmişti. Bugün ders çalışmak yerine raftan herhangi bir kitabı
          seçip okumam keyif verecek diye düşünerek el yordamıyla bir roman
          seçmiş ve romanın rüzgârıyla hayal alemine uçmaya başlamıştı. Roman;
          aşkı, sevgiyi öyle güzel anlatıyordu ki Toprak kâh gülerek kâh
          ağlayarak okumayı sürdürüyordu. Roman daha önce bir öğrenci tarafından
          okunmuş ve kütüphaneye bağışlanmıştı. Daha önce okunan romanda,
          Toprağın en çok etkilendiği satırların altları çizilmişti. Hem
          satırların kırmızı kalemle altlarının çizilmesinden hem de kitabın
          arkasındaki not Toprağı çok etkilemişti. Roman dördüncü sınıftaki
          edebiyat öğrencisi Rüzgâr tarafından kütüphaneye bağışlanmıştı.
          Rüzgârı hiç tanımıyordu ama içinde ilk defa tarif edilmez bir
          heyecanla hemen tanıma arzusu başlamıştı. Aşka inanmak isteyen ve aşkı
          arayan bir kadın olmanın verdiği cesaretle, daha önce yapmadığı bir
          şeyi yaptı ve okulun sosyal medya hesabından Rüzgârı aramaya başladı.
          Elinde sadece Rüzgârın ismi, soy ismi, okuduğu bölüm ve sınıfı vardı.
          Eğer sosyal medya kullanıyorsa oradan bulabilmesi ve eklemesi için
          hiçbir engel yoktu. Hemen kitabın kütüphaneye bağış yapıldığı tarihe
          baktı ve evet, kitap bu yıl eylül ayında bağışlanmıştı. Her şey rüzgâr
          hızıyla gelişmiş ve Toprak okulun sosyal medya hesabından Rüzgârı
          kolayca bulmuştu. Ancak bir türlü arkadaşı ekle kutusuna
          tıklayamıyordu. En iyisinin, kitabın arkasındaki notun resmini çekmek
          olduğunu düşündü ve Rüzgârın romanı okuyanlara; “Hâlâ aşka inanıyor
          musun?” şeklinde yazdığı nota karşılık Toprak; “İnanmak istiyorum!”
          yazıp fotoğrafla birlikte gönderdi.Rüzgâr sosyal medya hesabına gelen
          mesaj isteği gördüğünde kütüphanede sunumuna hazırlanıyordu.
          Kütüphanede olmama rağmen telefonu sessize almayı yine unuttum,
          diyerek heyecanla mesajı tıkladı. Ekranda gördüğü ünlem işaretiyle
          süslenmiş bir mesajdı. Toprak adında bir kız… Bağış yaptığını ve
          okuduğunu dahi unuttuğu romanının resmini atmıştı. Şimdi ne yazsam,
          diye düşünüyordu. Heyecanlanmıştı ve ilk mesaja rağmen istemsizce
          gülmeye başlamıştı. Toprak ne güzel isim ne güzel kadınmış diye
          düşündü ve mesaj isteğini kabul edip arkadaşlık isteği gönderdi ve
          mesaja cevap verdi. Saatlerce mesajlaşmaya başlamışlardı, hava iyiden
          iyiye kararmıştı. Rüzgâr, mesajlarında; kütüphanede olduğunu yazmış ve
          Toprak da hâlâ kütüphanede olduğunu dile getirmişti. Kütüphane
          çıkışında buluşmayı kararlaştırmışlardı. Rüzgâr çıkış kapısında elinde
          eski okuduğu romanla kendisine doğru gelen Toprak’ı görünce sanki
          yıllardır tanıyormuşçasına bir hisse kapıldı. İlk çekincelerinin
          ardından; uzun uzun konuşmalar, kahkahalar eşliğinde kaldıkları yurda
          doğru gibi görünen; aslında birlikteliklerinin, aşklarının ilk
          adımlarını atmaya başlamışlardı. Rüzgâr, toprağın üzerindeki kirli
          tozları savurmaya başlamıştı bile…
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
          right: 139,
          top: 320,
        }}
      >
        <div style={{ overflow: "auto", height: "650px" }}>
          <div className="col" style={{ border: "3px solid #000000" }}>
            <div className="col" style={{ marginBottom: 159 }}>
              <div className="card" style={{ width: "19rem", height: "9rem" }}>
                <img src={ruhikizim} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Ruh İkizim</h5>
                  <a href="/Ruh" className="btn btn-dark">
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
                <img src={romeo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Romeo Ve Juliet</h5>
                  <a
                    href="/Romeo"
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
                <img src={kerem} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Kerem İle Aslı</h5>
                  <a href="/Kerem" className="btn btn-dark">
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
                <img src={leyla} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Leyla İle Mecnun</h5>
                  <a href="/Leyla" className="btn btn-dark">
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
