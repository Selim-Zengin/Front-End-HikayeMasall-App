import React from "react";
import romeo from "../images/romeo.jpg";
import kerem from "../images/kerem.jpg";
import leyla from "../images/leyla.jpg";
import hak from "../images/hak.jpg";
import ruhikizim from "../images/ruhikizim.jpg";

export const Hak = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Hak Edilen Sevgiyi Bulmak</h1>
        </div>
        <img
          src={hak}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Keşke sevgi, herkesin kalbinde bir damar gibi gezse. Sürekli işlevsel,
          sürekli sıcak kalsa tıpkı damarlarımızda ki kan gibi. Peter Deunow’un
          dediği gibi: “sevgiyi dünyadaki tüm kötülüklere karşı bir zırh gibi
          giy. Bu zırh hiçbir silahın delemeyeceği kadar kuvvetli ve kalın bir
          kalkandır.” Selver hanım her sabah olduğu gibi bugünde elinde beyaz
          değneği ve el kol yardımıyla otobüse bindi. Şoför: “Siz hanım efendi,
          soldan ikinci koltukta oturan hanım efendi “diye seslendi. Selver
          hanım otuz yaşında genç alımlı güzel bir bayandı. Eşi de denizde
          subayıydı. Çok severek evlenmişlerdi. Selver hanım martıları çok sever
          martılara simit atarken tanışmışlardı. İlk görüşte aşk dedikleri bu
          olsaydı gerek. Kısa zamanda tanışıp evlendiler. Evlilikten birkaç yıl
          sonra Selver Hanım göz doktoruna gitti ve yanlış teşhis sonunda
          gözlerini kaybetti artık göremiyordu. Selver hanım ameliyattan çıkınca
          eşi Fatih Bey çok üzüldü. Ama eşine bunu hissettirmemeliydi. Selver’in
          üzülmesine dayamazdı. Sonuna kadar eşinin yanında kalacağına ve her
          zaman ona destek olacağına söz verdi. Selver hanımın her geçen gün
          üzüntüsü artıyordu. Kendini Fatih Beye yük olarak görüyordu. Ve içine
          daha da kapanmaya başladı. Fatih bu duruma bir çözüm bulmalıydı ve
          buldu da. Eşinin eski işi geldi aklına ve cesaretlenip Selver’e bu
          konuyu açmak istedi. Akşam yemeğinde bu konuyu eşine açtı. “İstersen,
          tekrar işine dönebilirsin. Söz ben her zaman yanında olacağım. Seni
          ben götürüp ben getireceğim.” Selver başta bu fikre karşı çıkmış. Ben
          yapamam demişti ama fatih ona güveniyordu ve sen yaparsın diyerek
          cesaretlendirdi. Selver kabul etti ama isteksizce. Çünkü eşi Fatihi
          çok seviyordu onu kırmak istemiyordu. Umutsuzca olur dedi. Fatih her
          sabah Selver’i işe bırakıyor ve akşamları alıyordu. Günler böylece
          geçiyordu. Selver için işe gidip gelmek iyi gelmişti morali de yerine
          gelmişti. Ama fatih daha iyisini istiyordu.Akşam karısına: “Bundan
          sonra işe kendin gidip gelmelisin.” dedi. Selver, çok şaşırdı ama bu
          imkânsız, yapamam dedi. Fatih çok ısrar edince onu yine kıramadı.
          Aslında kendisi de bunu istiyordu biraz daha yükünü hafifletirim diye
          düşündü. Ve sabah bütün cesaretini toplayıp beyaz sopasını aldı ve
          evden çıktı otobüs durağına yetişip iş yerine giden otobüse binmeyi
          becerdi. Artık bu Selver için günlük basit bir iş olmuştu. Günlerce
          aylarca bu şekilde problemsiz bir şekilde gidip geldi. Yine bir gün
          otobüse binerken şoför: “Hanımefendi sizi çok kıskanıyorum dedi.
          Selver şaşkınlık içinde neden ki dedi. Şoför şöyle bir yanıt verdi:
          “Her sabah sizin arkanızda bir deniz subayı genç bir adam var. Sizinle
          beraber otobüse biniyor sizinle iniyor ve yol boyunca size aşkla
          bakıyor. Siz ışıkları geçene kadar bekliyor. Daha sonra siz binaya
          girince o da oradan ayrılıyor. Ve arkanızdan size el sallayıp sevgiyle
          öpücük atıyor.”
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
