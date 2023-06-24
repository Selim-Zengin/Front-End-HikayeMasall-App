import React from 'react'
import fabrika from "../images/fabrika.jpg";
import korkuEvi from "../images/korkuEvi.jpg";
import gizem from "../images/gizem.jpg";
import karanlik from "../images/karanlik.jpg";


export const KorkuEv = () => {
  return (
    <>
          <div className="card container" style={{marginLeft:110,width:1200,marginTop:150}}>
   <div className="card-body">
     <h1 className="card-title">Korku Evi</h1>
   </div>
   <img src={korkuEvi} className="card-img-bottom" alt="..." style={{height:600}}/>
   <p style={{fontSize:30,marginTop:25}}>Esma, Gizem ve Metin hep birlikte Meral’e doğum günü hediyesi verebilmek için Meral’i “Korku Evi’ne” götürmeye karar vermişlerdi.  Meral on üç yaşının ilk günlerini yaşıyordu.  Artık genç kız oldum ve arkadaşlarımla birlikte korku evine gitmemde bir sakınca olamaz diye düşünerek arkadaşlarının hediyesini mutlulukla kabul etmişti.

Meral’in arkadaşları akşam gitmenin daha heyecanlı olacağını söylediler ve dört arkadaş Korku Evi’nin yolunu tutmaya başladılar.

Meral; “Geç kalmadan döner miyiz?” dedi.

Metin; “yok canım alt tarafı karanlık bir evin içini gezip geleceğiz en fazla ne kadar süremizi alabilir ki…” şeklinde Meral’in sorusunu cevapladı.

Dört arkadaş birbirlerine belli ememeye çalışsalar da aslında daha şimdiden korkmaya başlamışlardı. Evde nelerle karşılaşacaklarını bilmiyorlardı. Alt tarafı bir ev, diyerek yüksek sesle konuşup birbirlerine korkmadıklarını belli etseler bile içten içe oldukça ürkmüşlerdi.

Hava kararıyordu, caddedeki insanlar hızlıca evlerine gitmeye çalışıyorlardı. Ve her dakika insan sayısı azalmaya başlıyor, gittikleri yollar ilerledikçe adeta ıssızlaşıyordu. Çıkmaz sokağa gelmişlerdi ki Esma; “İnternette baktığımız ev burası olmalı.” dedi.

Üç katlı müstakil bir eve doğru bakmaya başladılar.  Dört arkadaş, evin dışı bile bu kadar ürkütücüyse kim bilir içerisi nasıldır diye biran düşünmeye başladılar.  Ama hiçbirisi ben şimdiden korkmaya başladım haydi geri dönelim diyemedi.

Metin ilk adımı attı ve haydi kızlar takip edin beni eminim çok heyecanlı olacak, baksanıza evin dışı bile gerilim dolu diyerek korkmuyormuşçasına yüksek sesle güldü ve yürümeye başladı. Metin, Esma, Gizem ve en son da Meral cesaretini toplayıp evin içine girebilmeyi başarmışlardı.

Kapı girişinde personel dört arkadaşı karşıladı ve onlara evin içinde hayaletlerin dahi olabileceğini, evin kapısını üstlerine kilitleyeceğini ve evin karanlık olduğunu, ışıkların ne olursa olsun yanmayacağını söyledi.Ayrıca evin içinde aydınlık olsun diye el fenerlerinin olduğunu ancak gençlerin saklanan el fenerlerini kendilerinin bulmasının bir görev olduğunu da belirtti. “Gençler evde gördüğünüz her şey gerçek” diyerek birden ışıklar söndü ve personel hızlıca kapıyı kilitlemeye başladı.

Dört arkadaş olduğu yerde donakaldı ve ne yapacağını bilemedi. Gizem; “Tüm bu saçmalıklara inanmadınız değil mi, hayalet diye bir şey yoktur.” dedi ve tam bu sırada Metin çığlık atmaya başladı.

Kızlar, neden bağırdın ne oldu diye sorunca, Metin kim bana dokundu diye sordu ve o an dört arkadaş gerçekten korkmaya başlamıştı çünkü Meral, kimse dokunmadı hayalet, dedi. Dört arkadaş bir an önce evden çıkabilmek için el fenerini aramaya başladılar.

Zaman geçmek bilmiyor, adeta nefes bile alamıyorlardı. El ele tutuşup tüm evde el fenerini ve anahtarı aramaya başladılar.  Meral sonunda el fenerini buldu ve anahtarın kapının üstünde olduğunu fark edince, dört arkadaş arkasına dahi bakmadan Korku Evin’den çıkmaya başladılar.</p>
 </div>
 <div style={{ position: "fixed", left: "1463px",top:"180px"}}>
        <h1 style={{color:"white",backgroundColor:"black",padding:7}}>Benzer Olanlar</h1>
      </div>

      <div
         className="container text-center position-fixed"
         style={{
           width: "22rem",
           backgroundColor: "white",
           right: 100,
           top: 250
         }}
       >
         <div style={{ overflow: "auto", height: "650px" }}>
          <div className="col" style={{ border: "3px solid #000000" }}>
            <div className="col" style={{ marginBottom: 159 }}>
              <div className="card" style={{ width: "19rem", height: "9rem" }}>
                <img src={korkuEvi} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Korku Evi</h5>
                  <a href="/KorkuEv" className="btn btn-dark">
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
                <img src={gizem} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Gizemli Cığlık</h5>
                  <a href="/GizemliCiglik" className="btn btn-dark" style={{marginTop:15}}>
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
                <img src={fabrika} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Fabrikadaki Hayalet</h5>
                  <a href="/FabrikaHayalet" className="btn btn-dark">
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
                <img src={karanlik} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Karanlıkta Tek Başına</h5>
                  <a href="/KaranliktaTekBasina" className="btn btn-dark">
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
  )
}
