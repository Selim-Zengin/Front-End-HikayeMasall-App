import React from "react";
import segrek from "../images/segrek.jpg";
import dumrul from "../images/deliDumrul.jpg";
import kanli from "../images/kanli.jpg";
import dirse from "../images/dirse.jpg";
import salur from "../images/salur.jpg"
import bamsi from "../images/bamsi.jpg"

export const Dirse = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Dirse Han’ın Oğlu Boğaç</h1>
        </div>
        <img
          src={dirse}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Halkın hükümdarı olan Bayındır Han her yıl halkı için şölen
          düzenlermiş. Şölen zamanının geldiğini fark eden Bayındır Han
          yardımcılarına o sene gelen konukların üç farklı çadırda
          ağırlamalarını emretmiş. Konukların ağırlanacağı çadırların isimleri
          ise Ak çadır, Kara çadır ve Kızıl çadırmış. Bayındır han tarafından
          belirlenen bu çadırlardan kara çadıra çocuğu olmayan konuklarının, ak
          çadıra erkek çocuğu olan konuklarının ve kızıl çadıraysa kızları olan
          konuklarının oturtulmasını emretmiş. Çocuğu olmayan misafirlerin kara
          çadıra oturtulmasını istemesinin nedeni ise onlara çocuk verilmeyerek
          lanetlendiklerini düşünmesiymiş. O sene düzenlenen şölene gelen
          isimlerden birisi de Dirse Han’mış. Dirse Han’ın çocuğu yokmuş. Bu
          sebeple de kara çadırda ağırlanmış. Bu durumun nedenini öğrenen Dirse
          Han çok üzülmüş ve çocuğu olmadığı için karısına hesap sormaya karar
          vermiş. Evine dönüp karısına hesap sorarken Dirse Han’a bir öğüt
          verilmiş. Öğütte onun yemek düzenlemesi ve fakirleri doyurarak hayır
          dualarını alması söylenmiş. Bunun üzerine Dirse Han öğüdü dinlemiş ve
          büyük bir yemek düzenlemiş. İhtiyacı olan kişilere de yardım etmiş.
          Günler böylece geçmeye başlamış ve Dirse Han’ın bir oğlu olmuş. Oğlan
          büyümüş ve Bayındır Han’ın boğasıyla dövüşerek boğayı yenmeyi
          başarmış. Bunun üzerine oğlanın adına Boğaç Han denilmeye başlanmış.
          Oğlanın başarısı herkes tarafından takdir görmüş. Boğaç Han’ın
          sevilmesi babası Dirse Han’ın adamlarının kıskançlık yapmalarına neden
          olmuş. Bunun üzerine adamlar baba oğlun aralarını açmak için çaba
          harcamaya başlamışlar ve bir gün düzenledikleri av partisinde Dirse
          Han’a oğlunu vurdurtmuşlar. Yaralanan Boğaç Han günler sonra
          iyileşmiş. O sırada babası düşmanları tarafından kaçırılmış ve Boğaç
          Han babasının düşmanların elinden kurtulmuş. Bu sırada Dirse Han
          oğluna haksızlık ettiğini anlamış ve tahtını oğluna vererek halkın
          yeni hükümdarının oğlu olmasını sağlamış.
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
