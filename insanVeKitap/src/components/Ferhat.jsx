import React from "react";
import romeo from "../images/romeo.jpg";
import kerem from "../images/kerem.jpg";
import leyla from "../images/leyla.jpg";
import ferhat from "../images/ferhat.jpg";
import ruhikizim from "../images/ruhikizim.jpg";

export const Ferhat = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Ferhat İle Şirin</h1>
        </div>
        <img
          src={ferhat}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Şiirlere, hikayelere konu olmuş olan imkansız bir aşk masalı olmuştur
          Ferhat İle Şirin Hikayesi. Birbirlerini çok sevmelerine rağmen
          engellere takılan sevgililerin yüzyıllardır dilinden düşmeyen gerçek
          bir aşk öyküsüdür. Feryat yaşadığı dönemin en iyi nakkaş ustasıdır.
          Bütün dini yapıların, sarayların süslemelerini o yapmaktadır. Yaptığı
          süslemelerin ve eserlerin Şirin’e olan bitmeyen sevdasını yansıttığı
          için çok güzel olduğu rivayet edilir. Ferhat, güçlü ve yiğit bir
          delikanlıdır. Mehmene Banu isimli Amasya Sultanının kız kardeşi olan
          Şirin’e ilk görüşte kalbini kaptırmıştır. Şirin’de Ferhat’a
          sevdalanmıştır. Fakat ikisinin de bilmediği birşey vardı. Mehmene
          Banu’da Ferhat’ı daha önce görmüş ve aşık olmuştu. Ferhat bir gün
          Şirin’e istemeleri için ailesini Mehmene Banu’ya gönderir. Mehmene
          Banu’da Ferhat’ı sevdiği için Şirin’i vermek istemez. Fakat kız
          kardeşine de aşırı bir sevgi ve bağlılığı olduğundan dolayı kardeşini
          de üzmek istemez. Buna bir çare bulmakta gecikmez. Kızı vermek için
          Ferhat’a bir şart sunar. Der ki: Şehirde su yoktur. Kızı sana vermemi
          istiyorsan eğer, şehre suyu getir. Bende sana kardeşimi vereyim.
          Ferhat hiç itiraz etmez önüne sunulan bu imkansız şart karşında.
          Ailesi ve çevresindekiler Ferhat’ın bu çılgınca işten vazgeçmesi için
          çok diller dökerler. Fakat Ferhat aşkı için her şeyi göze almıştır.
          Suyu şehre getirecek ve Şirin’e kavuşacaktı. Kendisine lazım olacak
          kazma, kürek gibi bütün ekipmanı toplayıp düştü yollara. Suyu getirmek
          için önce plan ve projelere başladı. Günümüzde Şahinkayası olarak
          bilinen yerden getirmeliydi suyu, en uygun ve en elverişli yer
          orasıydı çünkü. Fakat şehre oldukça uzak bir mesafedeydi. Ama aşkı
          için yapmalıydı. Koca dağa başlar vurmaya. O vurdukça kazmayı kayalar
          parça parça oluyor ve Ferhat kazmayı vura vura ilerliyordu. Mehmene
          Banu’da olanı biteni adım adım takip ediyordu. Günler geçtikçe
          Ferhat’ın umudu artıyordu. Mehmene Banu’da her geçen gün Ferhat’ın
          suya yaklaştığını görünce karamsarlığa kapılıyor ve buna bir çare
          düşünüyordu. Ferhat suyu getirmemeliydi. Bu zorlu görevi
          başaramamalıydı. Çok geçmeden Mehmene Banu’nun aklına bir kurnazlık
          geldi. Bir cadı bulunması emrini verir ve cadı bulunur. Cadıdan
          Ferhat’ı durdurmak için bir büyü yapmasını ister. Cadı ise büyü yapmak
          yerine farklı bir çözüm yolu bulmuştur. Bir kazanda helva kavurur ve
          helvayı bir kaba koyarak Ferhat’ın kazmakta olduğu dağa doğru yol
          alır. Ferhat’ı görünce O’na şöyle seslenir: Şirin öldü bak sana
          helvasından getirdim. Hala hırsla ne vuruyorsun kayalara böyle der.
          Ferhat bunu duyunca çılgına döner ve elinde bulunan kazmayı havaya
          fırlatarak, Şirin öldüyse bana yaşamak haram der. Havadan yere düşen
          kazma Ferhat’ın başına isabet eder ve Ferhat oracıkta can verir. Olayı
          haber alan Şirin hemen kayalıklara gelir ve O’da kendini kayalıklardan
          aşağıya atar. Şehir suya kavuşmuştur ama artık ne Ferhat kalkmıştır ne
          de Şirin.
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
