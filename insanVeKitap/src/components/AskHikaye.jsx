import React from "react";
import romeo from "../images/romeo.jpg";
import ruhikizim from "../images/ruhikizim.jpg";
import gonlunce from "../images/gonlunce.jpg";
import kerem from "../images/kerem.jpg";
import leyla from "../images/leyla.jpg";
import ferhat from "../images/ferhat.jpg";
import tahir from "../images/tahir.jpg";
import hak from "../images/hak.jpg";
import ozlem from "../images/ozlem.jpg";

export const AskHikaye = () => {
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
          Aşk Hikayeleri
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

      <div
        className="container text-center"
        style={{ background: "white", marginLeft: 40 }}
      >
        <div className="row  border-4 border-dark">
          <div className="col-md-4">
            <div
              className="card  border-4 border-dark"
              style={{ width: "25rem", height: "32rem" }}
            >
              <img
                src={romeo}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Romeo Ve Juliet</h3>
                <p className="card-text" style={{ textAlign: "center" }}>
                  Ölümsüz aşk hikâyeleri arasında yer alan Romeo ve Juliet
                  Hikâyeleri pek çok tiyatro sahnesine konu olmayı başarmıştır.
                  Ayrıca insanların severek…
                </p>
                <a href="/Romeo" className="btn btn-dark" style={{marginTop:59}}>
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
                src={ruhikizim}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Ruh İkizim</h3>
                <p className="card-text">
                  Toprak, yirmili yaşların henüz başındaydı. Ne ilk aşkını
                  yaşayabilmişti ne kavuşmayı ne de ayrılığı… Aşka inanıyordu,
                  belki de inanmak istiyordu.…
                </p>
                <a href="/Ruh" className="btn btn-dark" style={{marginTop:60}}>
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
                src={gonlunce}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">
                  Kimi Gönlünce, Kimi Ömrünce Sever
                </h3>
                <p className="card-text">
                  Denizin dalgası vapura çarpıyordu. Kaptan son yolcuları
                  bekliyor olsa gerek. Hülya okula geç kalacaktı. Dağınık kömür
                  karası saçları yüzüne çarpıyordu.…
                </p>
                <a href="/Kimi" className="btn btn-dark">
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
                src={kerem}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Kerem İle Aslı</h3>
                <p className="card-text">
                  Asıl isimi Ahmet Mirza olarak bilinen Kerem, Isfahan Şahı’nın
                  oğludur. Aslı ise Isfahan Şahı’nın hazinedarlığını yapan
                  Ermeni bir rahibin kızıdır.…
                </p>
                <a
                  href="/Kerem"
                  className="btn btn-dark"
                  style={{ marginTop: 48 }}
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
                src={leyla}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Leyla İle Mecnun Hikayesi</h3>
                <p className="card-text">
                  Leyla ile Mecnun hikayesi çok meşhur olan bir hikayedir.
                  Mecnun, bir kabile reisi olan adaklar ve dualar ile dünyaya
                  gözlerini…
                </p>
                <a
                  href="/Leyla"
                  className="btn btn-dark"
                  style={{ marginTop: 48 }}
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
                src={ferhat}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Ferhat İle Şirin Hikayesi</h3>
                <p className="card-text">
                  Şiirlere, hikayelere konu olmuş olan imkansız bir aşk masalı
                  olmuştur Ferhat İle Şirin Hikayesi. Birbirlerini çok
                  sevmelerine rağmen engellere takılan…
                </p>
                <a
                  href="/Ferhat"
                  className="btn btn-dark"
                  style={{ marginTop: 48 }}
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
                src={tahir}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">Tahir İle Zühre Hikayesi</h3>
                <p className="card-text">
                  Geçmiş zamanın birinde zengin ve tanınmış bir padişah
                  yaşarmış. Padişahın askeri, malı, mülkü, kısaca her şeyi
                  varmış. Fakat padişahın çok… Devamını Oku »
                </p>
                <a
                  href="/Tahir"
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
                src={hak}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Hak Edilen Sevgiyi Bulmak</h3>
                <p className="card-text">
                  Keşke sevgi, herkesin kalbinde bir damar gibi gezse. Sürekli
                  işlevsel, sürekli sıcak kalsa tıpkı damarlarımızda ki kan
                  gibi. Peter Deunow’un…
                </p>
                <a
                  href="/Hak"
                  className="btn btn-dark"
                  style={{ marginTop: 72 }}
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
                src={ozlem}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Özlem Kokulu Kadın</h3>
                <p className="card-text">
                  Güneşin tenindeki yakıcılığına aldırmadan heyecan içindeki
                  yürüyüşüne devam ediyordu. Sanki ilk ziyaretiymiş gibi…
                  Sabırsızlanıyordu. Anlatacak o kadar çok şey birikmişti…
                </p>
                <a
                  href="/Ozlem"
                  className="btn btn-dark"
                  style={{ marginTop: 38 }}
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
              Aşk Hikayeleri Nedir
            </h1>
            <p
              style={{ fontSize: "30px", color: "black" }}
              className="card-text"
            >
              Aşk, sevgi ve kahramanlık gibi konular işlenir. Ortaya çıktıkları
              dönemin sosyal, siyasal ve kültürel özelliklerini yansıtır.
              Olaylar halkın anlayacağı, sade bir dille anlatılır. Âşıklar,
              olayları saz çalarak taklitler yaparak anlatırlar.
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
