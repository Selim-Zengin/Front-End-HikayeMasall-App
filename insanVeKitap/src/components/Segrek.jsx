import React from "react";
import segrek from "../images/segrek.jpg";
import dumrul from "../images/deliDumrul.jpg";
import kanli from "../images/kanli.jpg";
import salur from "../images/salur.jpg"
import bamsi from "../images/bamsi.jpg"
import dirse from "../images/dirse.jpg"

export const Segrek = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Uşun Koca Oğlu Segrek</h1>
        </div>
        <img
          src={segrek}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Memleketin birinde Uşun Koca isimli bir adam ve bu adamında iki oğlu
          varmış. Adamın büyük olan oğlunun adı Egrek’miş. Bu oğlan çok yiğit
          bir oğlanmış. Bu oğlan Bayındır Han’ın sohbetlerini dinlemeyi çok
          severmiş ve sürekli sohbet dinlemeye gidermiş. Sohbet alanına
          geldiğinde ise her zaman vezirin önüne otururmuş. Onun bu tavrı
          sohbete gelen diğer kişiler tarafından hoş karşılanmaz ve onun
          oturduğu yeri hak etmediğini düşünürlermiş. Bunu duyan Egrek üzülmüş
          ve yerini hak etmek için akına çıkmaya karar vermiş. İzin alıp akına
          çıkmış. Alınca Kalesi’ni kuşatmış ancak düşmanlar onu esir alarak
          kalenin zindanına hapsetmişler. Uşun Koca’nın küçük oğlunun adı ise
          Segrek’miş. Bu oğlan büyümüş ve abisi Egrek’in Alınca Kalesi’nde esir
          olduğunu öğrenmiş. Abisini esaretten kurtarmak istemiş. Ailesine bunu
          anlatınca ailesi buna karşı çıkmış ve Segrek’in gitmesini engellemek
          için onu bir kızla evlendirmişler. Segrek düğün gecesi karısına
          isteğini anlatmış ve karısı onun gitmesine razı olmuş. Bu arada Segrek
          karısına olur da dönemezse evlenmesini söylemiş ve abisini kurtarmak
          için evden ayrılmış. Segrek abisini kurtarmak için kaleye gitmiş ve
          tekfurun tüm adamlarını yenmiş. Tekfur durumun vahametini anlamış ve
          iki kardeşi birbiriyle savaştırmaya karar vermiş. Egrek’e de karşısına
          çıkan adamı yenerse serbest kalacağını haber vermiş. İki kardeş
          tekfurun belirlediği yerde karşılaşmışlar. Bellerinde bulunan kopuz
          sayesinde aynı soydan geldiklerini ve iki kardeş olduklarını
          anlamışlar. Bunun üzerine düşmanları olan tekfura karşı birlik olup
          savaşmışlar. Evlerine döndüklerinde de şölenle karşılanmışlar.
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
                <img src={segrek} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Uşun Koca Oğlu Segrek</h5>
                  <a href="/Segrek" className="btn btn-dark">
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
                <img src={salur} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Salur Kazan’ın Çadırı</h5>
                  <a
                    href="/Salur"
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
                <img src={bamsi} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Bamsı Beyrek</h5>
                  <a href="/Bamsi" className="btn btn-dark">
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
                <img src={dirse} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Dirse Han’ın Oğlu Boğaç</h5>
                  <a href="/Dirse" className="btn btn-dark">
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
