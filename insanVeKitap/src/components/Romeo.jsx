import React from "react";
import segrek from "../images/segrek.jpg";
import salur from "../images/salur.jpg";
import bamsi from "../images/bamsi.jpg";
import dirse from "../images/dirse.jpg";
import romeo from "../images/romeo.jpg";
import ruhikizim from "../images/ruhikizim.jpg";
import kerem from "../images/kerem.jpg";
import leyla from "../images/leyla.jpg";

export const Romeo = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Rome Ve Juliet</h1>
        </div>
        <img
          src={romeo}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Ölümsüz aşk hikâyeleri arasında yer alan Romeo ve Juliet Hikâyeleri
          pek çok tiyatro sahnesine konu olmayı başarmıştır. Ayrıca insanların
          severek okuduğu bir hikâyedir aslında. Aşk insanı olduğu dünyadan
          başka diyarlara götüren içinde bin bir çiçeğin açmasını sağlayan ve
          kelebeklerin uçuşması ile ifade edilen bir olgudur. Gerçek aşk insan
          iradesinden tamamen bağımsızdır. İrade dışı ortaya çıkan bir duygudur
          ve kolay bir şekilde kontrol edilemez. Yapılan bazı kazılarda bir
          çiftin kemiklerine rastlanmıştır. Bu kemiklerin ise yaklaşık beş bin
          yıllık olabileceği belirtilmektedir. Bu sebeple ise aslında Romeo ve
          Juliet’e ait olduğu da düşünülmektedir. Romeo ve Juliet hikâyesi uzun
          yıllardan beridir sürekli olarak adından söz ettiren bir aşkı
          anlatmaktadır.Romeo ve Juliet Hikâyesi düşman olan iki ailenin kızı ve
          oğlunun aşkını anlatmaktadır. Verona’da yaşayan ve uzun süredir düşman
          olan iki zengin aile varmış. Bu ailelerden biri Montegü diğeri ise
          Kapulet olarak adlandırılmaktaymış. Kapuletler’in balosunda tesadüfen
          Juliet ve Montegu’nun oğlu Romeo karşılaşmışlar. Bu karşılaşma
          sonucunda birbirlerine büyük bir sevgi ve aşk ile bağlanmışlar. Bunu
          duyan Juliet’in akrabaları âşık olduğu kişinin düşmanlarının oğlu
          olduğu sebebi ile onları ayırmak için bir takım çabalar içine
          girmişlerdir. Fakat Romeo ve Juliet Bu durumu dinlemeyerek gizlice
          evlenme hayalleri kurmaya başlamışlardır. Zira onlar bu evliliğin ili
          ailenin barışmasına vesile olacağını düşünür. Gizli evlilik planları
          yapan çift bu umut ile Peter Lorenzo tarafından gerçekleştirilmiş olan
          bir tören sonucunda evlenirler. Yaşanan bir sokak kavgası sırasında
          Romeo’nun arkadaşlarından biri olan Merkutio öldürülür. Bu durumun
          üzerine ise Romeo arkadaşının öcünü almak isteyerek sevgilisinin
          kardeşi olan Tybalt’ı bıçaklar. Dük ise onu sürgüne gönderir. Tüm
          bunların üzerine Juliet’in ailesi onun genç bir kont ile evlenmesini
          ister. Bunun ise bir an önce gerçekleştirilmesi taraftarıdırlar.Fakat
          Juliet bunu asla istemez. O Romeo’yu çok seviyor ve ona sadık bir
          şekilde kalmak istemektedir. Genç kızın bunu gerçekleştirebilmesi için
          yapması gereken tek bir şey vardır. O da yalnızca ölmektir. Juliet
          Romeo’yu çok seviyor ve başkasını asla istemiyordur. Bu sebeple ise
          yaşamının son bulmasına karar verir. Zira başka türlü Romeo’suna sadık
          kalması mümkün değildir. Bunun üzerine intihar eder ve hayatına son
          verir. Romeo ise Juliet olmadan yaşamanın çok zor ve katlanılmaz bir
          hal aldığını görür. Zira onun tek aşkı artık hayatta değildir. Buna
          dayanamayan Romeo da hayatına son verme kararı alır. Bunun üzerine ise
          bir bıçak yardımı ile intihar ederek yaşamına son verir. Romeo ve
          Juliet hikâyesi büyük bir aşkın dilden dile anlaşılmasını sağlamıştır.
          Bu sayede bu efsanevi aşk hikâyesi tiyatrolara konu olmuş ve
          yüzyıllarca unutulmayacak bir eser haline gelmiştir.
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
