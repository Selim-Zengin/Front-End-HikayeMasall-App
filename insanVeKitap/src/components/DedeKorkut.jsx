import React from "react";
import segrek from "../images/segrek.jpg";
import dumrul from "../images/deliDumrul.jpg";
import kanli from "../images/kanli.jpg";
import dirse from "../images/dirse.jpg";
import salur from "../images/salur.jpg";
import bamsi from "../images/bamsi.jpg";
import uruz from "../images/uruz.jpg";
import kazikli from "../images/kazikli.jpg";
import emren from "../images/emren.jpg";

export const DedeKorkut = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div
        className="card"
        style={{ fontSize: 55, textAlign: "center", color: "#000000" }}
      >
        <div
          className="card-body"
          style={{ borderTop: "none", borderBottom: "none" }}
        >
          Dede Korkut Hikayeleri
        </div>
      </div>

      <div style={{ position: "fixed", left: "1423px", top: "255px" }}>
        <h1 style={{ color: "white", backgroundColor: "black", padding: 7 }}>
          Popüler Olanlar
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

      <div
        className="container text-center"
        style={{ background: "white", marginLeft: 40 }}
      >
        <div className="row  border-4 border-dark">
          <div className="col-md-4">
            <div
              className="card  border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={segrek}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Uşun Koca Oğlu Segrek</h3>
                <p className="card-text" style={{ textAlign: "center" }}>
                  Memleketin birinde Uşun Koca isimli bir adam ve bu adamında
                  iki oğlu varmış. Adamın büyük olan oğlunun adı Egrek’miş. Bu…
                </p>
                <a href="/Segrek" className="btn btn-dark">
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={dumrul}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Deli Dumrul</h3>
                <p className="card-text">
                  Geçmiş zamanların birinde Deli Dumrul isimli bir adam
                  yaşarmış. Bu adam yaşadığı yerde bulunan kuru bir çayın
                  üzerine köprü yaptırmış…
                </p>
                <a href="/Dumrul" className="btn btn-dark">
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={kanli}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Kanlı Koca Oğlu Kanturalı</h3>
                <p className="card-text">
                  Oğuzlar arasında Kanlı Koca isimli birisi yaşarmış. Bu adamın
                  Kanturalı isimli bir oğlu varmış. Kanlı Koca oğlunun
                  evlenmesini istermiş. Oğluna…
                </p>
                <a href="/KanliKoca" className="btn btn-dark">
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4  mt-5">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem" }}
            >
              <img
                src={dirse}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Dirse Han’ın Oğlu Boğaç</h3>
                <p className="card-text">
                  Halkın hükümdarı olan Bayındır Han her yıl halkı için şölen
                  düzenlermiş. Şölen zamanının geldiğini fark eden Bayındır Han
                  yardımcılarına o…
                </p>
                <a
                  href="/Dirse"
                  className="btn btn-dark"
                  style={{ marginTop: 25 }}
                >
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4  mt-5">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={salur}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Salur Kazan’ın Çadırı</h3>
                <p className="card-text">
                  Salur Kazan bir gün büyük bir şölene katılmış. Bu şölende çok
                  eğlenmiş ve çok içki içmiş. Bu sebeple de sarhoş…
                </p>
                <a
                  href="/Salur"
                  className="btn btn-dark"
                  style={{ marginTop: 55 }}
                >
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4  mt-5">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={bamsi}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Bamsı Beyrek</h3>
                <p className="card-text">
                  Yörenin birinde Kam Büre oğlu Bamsı Beyrek ile Banıçiçek
                  isimli iki kişi yaşarmış. Bunlar bebekken birbirlerine beşik
                  kertmesi ilan edilmişler.…
                </p>
                <a
                  href="/Bamsi"
                  className="btn btn-dark"
                  style={{ marginTop: 25 }}
                >
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4  mt-5">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                style={{ height: "12rem" }}
                src={uruz}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">Uruz’un Tutsak Olması</h3>
                <p className="card-text">
                  Eski zamanlarda bir yörenin hükümdarı olan Kazan Bey varmış.
                  Kazan beyin ise Uruz isimli bir oğlu varmış. Kazan bey
                  oğlunun…
                </p>
                <a
                  href="/Uruz"
                  className="btn btn-dark"
                  style={{ marginTop: 45 }}
                >
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4  mt-5">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={kazikli}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Kazılık Koca Oğlu Yegenek</h3>
                <p className="card-text">
                  Oğuzların hanı Bayındır Han’ın Kazılık Koca isminde bir veziri
                  varmış. Kazılık Koca bir gün akın için hanından izin isteyerek
                  Karadeniz’deki…
                </p>
                <a
                  href="/Kazık"
                  className="btn btn-dark"
                  style={{ marginTop: 45 }}
                >
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4  mt-5">
            <div
              className="card h-100 border-4 border-dark"
              style={{ width: "25rem", height: "28rem" }}
            >
              <img
                src={emren}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Emren</h3>
                <p className="card-text">
                  Oğuzların hanı Bayındır Han emrindeki adamlardan Begin beyi
                  sınırlarını koruması için görevlendirmiş. Ona ihtiyaç duyduğu
                  kılıcı ve atı vermiş. Bunun…
                </p>
                <a
                  href="/Emren"
                  className="btn btn-dark"
                  style={{ marginTop: 26 }}
                >
                  Hikayeyi Oku
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginRight: 520 }}>
        <div
          className="card border-success mb-3 mx-auto border-4 border-dark"
          style={{ maxWidth: "80rem", marginTop: "30px" }}
        >
          <div className="card-body text-success " style={{ marginLeft: 100 }}>
            <h1 style={{ color: "black" }} className="card-title">
              Dede Korkut Hikayeleri nedir
            </h1>
            <p
              style={{ fontSize: "30px", color: "black" }}
              className="card-text"
            >
              Dede Korkut Kitabı, destansı Oğuz hikâyelerinin mecmuasıdır.
              İçerdiği on iki hikâyenin büyük bölümü ilk defa X.-XI. yüzyıllar
              arasında Oğuzların eski yurdu olan Seyhun nehri boylarında ortaya
              çıkmış, XI. yüzyılda Oğuzlar'ın Kuzey İran, Güney Kafkasya ve
              Anadolu'yu ele geçirmeleri ile Yakındoğu'ya gelmiştir.
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
