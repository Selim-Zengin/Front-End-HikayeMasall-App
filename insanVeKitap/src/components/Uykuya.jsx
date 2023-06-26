import React from "react";
import yenilmez from "../images/yenilmez.jpg";
import uykuya from "../images/uykuya.jpg";
import uzayda from "../images/uzayda.jpg";
import tembeller from "../images/tembeller.jpg";
import soz from "../images/soz.jpg";

export const Uykuya = () => {
  return (
    <>
      <div
        className="card container"
        style={{ marginLeft: 110, width: 1200, marginTop: 150 }}
      >
        <div className="card-body">
          <h1 className="card-title">Uykuya Yenik Düşen Minik Pazarcı</h1>
        </div>
        <img
          src={uykuya}
          className="card-img-bottom"
          alt="..."
          style={{ height: 600 }}
        />
        <p style={{ fontSize: 30, marginTop: 25 }}>
          Uzak diyarlarda kendi halinde yaşayan bir anne-oğul varmış. Büyük bir
          aşk ile evlendiği eşini savaş sırasında kaybeden anne yıllar boyu
          oğluna hem anne hem de baba olmuş. Anne-oğul yaşamını sürdürdükleri
          küçük köyde çiftçilik yaparak hayatlarını kazanırmış. Anne her gün gün
          ağarmadan erkenden kalkar ve bahçeye çıkarmış. O gün için pazarda
          satılacakları bahçeden büyük bir titizlik ile toplar ve sepetine
          doldururmuş. Bahçelerinde birbirinden lezzetli sebzeler ve meyveler
          yetişirmiş. Oğluna hazırladığı enfes kahvaltıyı birlikte keyif
          içerisinde, hoş sohbetler ederek yerlermiş. Kahvaltı sonrası oğlunu
          pazara o günkü ürünleri satmaya yolcu eden kadın evin rutin işlerini
          yapmak için koyulurmuş. Bu sırada yola koyulan oğlu, neşeli neşeli
          pazarın yolunu tutarmış. Her gün aynı yoldan büyük bir keyif ile
          geçerken yol boyu gördüğü tüm ağaçlara selam vermeyi unutmazmış.
          Günlerden bir gün pazara giderken dinlenmek için bir ağacın gölgesine
          uzanmış. Gel görelim küçük bedeni yorgunluk ile birlik olup onu uykuya
          daldırmış. Ağacın dibinde uyurken birbirinden güzel rüyalar görmüş,
          uçsuz bucaksız ormanlarda gezmiş, sayısız hayvan dostlar edinmiş,
          birbirinden enfes yemekler yiyerek karnını bir güzel doyurmuş. Vakit
          hayli geç olduğunda bir garip ses ile birlikte güzel uykusundan
          uyanmış. Uyanır uyanmaz etrafında olup biteni anlamaya çalışmış. Sesin
          geldiği yeri ve sesi çıkaran kişiyi bulmaya çalışmış ancak nafile…
          Uyku sersemi etrafta kimseyi bulamadığını anlayınca aklına pazara
          gitmek üzere yola çıktığı gelmiş. Annesinin büyük bir özenle
          hazırladığı sepetini aramış da aramış. Büyük bir pişmanlık ve üzüntü
          ile birlikte köye annesinin yanına dönmeye karar vermiş. Annesi her
          pazar dönüşü onu köyün girişinde karşılarmış. Al yanaklı, mavi gözlü,
          tombiş yüzlü oğlan köye yaklaştığında bu sefer annesinin onu
          beklemediğini fark etmiş. İçinde büyük bir endişe ile birlikte hızlı
          hızlı evlerine doğru koşmaya başlamış. Eve adım atar atmaz annesi onu
          büyük bir keyif ile karşılamış. Oğlan hayretler içerisinde tüm olan
          bitine anlam vermeye çalışırken, annesi bi çırpıda olan biteni ona
          anlatmış.‘’ Sen pazara giderken bir ağacın gölgesinde uyuyakalmışsın.
          Bu arada o yoldan geçmekte olan çok varlıklı bir adam seni ve pazara
          götürmek üzere yanına aldığını ürünlerimizi görmüş ve sana bu
          çalışkanlığından ötürü bir hediye vermek istemiş. Bundan böyle bu
          adamın himayesi altında yaşayacak ve artık hep ihmal ettiğin okuluna
          geri dönerek eğitimini tamamlayacaksın. ‘’ demiş. Ana-oğul olanlar
          karşısında şaşkın bir o kadar da mutlu bir şekilde birbirlerine
          sarılarak mutluluk göz yaşları dökmüşler.
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
