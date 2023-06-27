import React from "react";
import romeo from "../images/romeo.jpg";
import kerem from "../images/kerem.jpg";
import leyla from "../images/leyla.jpg";
import ruhikizim from "../images/ruhikizim.jpg"

export const Kerem = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Kerem İle Aslı</h1>
        </div>
        <img
          src={kerem}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Asıl isimi Ahmet Mirza olarak bilinen Kerem, Isfahan Şahı’nın oğludur.
          Aslı ise Isfahan Şahı’nın hazinedarlığını yapan Ermeni bir rahibin
          kızıdır. Kerem ile Aslı birbirlerini severler. Isfahan Şahı, oğlu
          Kerem için Aslı’yı Rahipten ister. Rahip, bir Müslümana kızını vermek
          istemez. Fakat Şahı’n isteğini de hemen reddedemez. Hükümdardan biraz
          zaman ister. Hükümdar, rahibe karar vermesi için mühlet verir. Fakat
          rahip bu mühleti düşünmek için değil memleketten kaçmak için kullanır.
          Rahip ve kızı Aslı gizlice kaçarlar. Kerem, aşkı Aslı’nın peşinden
          yollara düşer. Sevdiğini aramaya koyulan Kerem, Anadolu’yu bir baştan
          diğer başa gezmeye başlar. Kerem sadık arkadaşı (Sofu Kardeş) sazı ile
          virane bir aşık olmuştur. Her gittiği vilayette, her rastladığı kişiye
          hem yanık türkülerini söyler hem de Aslı’yı sorar. Kimi Kerem’e cevap
          verir kimi sorusunu cevapsız bırakır. Kerem artık dağlara, nehirlere,
          kayalara, gördüğü hayvanlara derdini dökmeye başlar. Karşısına çıkan
          Karlı, zorlu, boranlı bellerden yol isteyerek Aslı’yı aramaya devam
          eder. Önüne çıkan engeller, aşk ateşiyle yanan Kerem’in inkisarına
          uğrarlar ve bir daha iflah olmazlar. Kerem’in Aslı’ya olan aşkı ateş
          olur düşer içine. Aşkının ateşinde pişe pişe kemale erer Kerem. O
          artık keramet sahibidir. Allah Kerem’in her dileğini yerine
          getirmektedir. Kimi vilayetlerde anlatılan hikayeye göre Kerem,
          Aslı’ya bir süre kavuşur. Aslı rahip babasından habersiz bir süre
          Kerem ile görüşür. Birbirlerine sevgilerini, duygularını anlatırlar,
          dertlerini dökerler. Bazı anlatıcılara göre Kerem Aslı’yı araya araya
          Halep’e varır. Burada Halep Paşasına kendini çok sevdirir. Paşa’da
          rahibi tehdit edip kızını Kerem’e vermesi için razı eder. Aslı ile
          Kerem’in nikâhları kıyılır. Fakat kötü kalpli rahip yine yapacağını
          yapar ve kızı Aslı’ya büyülü bir gerdek kıyafeti giydirir. Büyülü
          kıyafetin düğmeleri sonuna kadar açılırsa tekrar kendiliğinden
          kapanırmış. Bu kıyafet yüzünden Kerem, Aslı’nın düğmelerini
          çözemezmiş. Kerem’in yüreği yanar kül olurmuş. Aslı’ın saçları,
          Kerem’in küllerine karışmış. Kıvılcım alan saçlar birden bire tutuşur
          ve Aslı’da kül olur. Sevdalıların külleri birbirine karışır ve iki
          aşık birbirine kavuşur.
        </p>
      </div>
      <div style={{ position: "fixed", left: "1423px", top: "250px" }}>
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
