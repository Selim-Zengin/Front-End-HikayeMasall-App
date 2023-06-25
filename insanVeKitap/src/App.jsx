import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import resim from "./images/logo.png";
import { Anasayfa } from "./components/anasayfa";
import { KorkuHikayeleri } from "./components/KorkuHikayeleri";
import { OrmanKorku } from "./components/OrmanKorku";
import { MezarSes } from "./components/MezarSes";
import { KorkuEv } from "./components/KorkuEv";
import { KaranliktaTekBasina } from "./components/KaranliktaTekBasina";
import { GizemliCiglik } from "./components/GizemliCiglik";
import { HayaletEv } from "./components/HayaletEv";
import { HayaletAvci } from "./components/HayaletAvci";
import { MezarOtesi } from "./components/MezarOtesi";
import { FabrikaHayalet } from "./components/FabrikaHayalet";
import { DedeKorkut } from "./components/DedeKorkut";
import { Segrek } from "./components/Segrek";
import { Dumrul } from "./components/Dumrul";
import { KanliKoca } from "./components/KanliKoca";
import { Dirse } from "./components/Dirse";
import { Salur } from "./components/Salur";
import { Bamsi } from "./components/Bamsi";
import { Uruz } from "./components/Uruz";
import { Kazık } from "./components/Kazık";
import { Emren } from "./components/Emren";
import { AskHikaye } from "./components/AskHikaye";
import { Romeo } from "./components/Romeo";
import { Ruh } from "./components/Ruh";
import { Kimi } from "./components/Kimi";
import { Kerem } from "./components/Kerem";
import { Leyla } from "./components/Leyla";
import { Ferhat } from "./components/Ferhat";
import { Tahir } from "./components/Tahir";
import { Hak } from "./components/Hak";
import { Ozlem } from "./components/Ozlem";

function App() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid">
            <img
              src={resim}
              width="90"
              height="65"
              className="d-inline-block align-text-top"
            />
            <div className="navbar-collapse justify-content-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link active navbar-font-size">
                    <span className="navbar-text">Anasayfa</span>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    style={{
                      color: "white",
                    }}
                    className="nav-link dropdown-toggle navbar-font-size"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hikayeler
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to="KorkuHikayeleri"
                        className="nav-link navbar-font-size"
                        style={{
                          fontSize: "18px",
                          color: "black",
                          marginLeft: 2,
                        }}
                      >
                        Korku Hikayeleri
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="DedeKorkut"
                        className="nav-link navbar-font-size"
                        style={{
                          fontSize: "18px",
                          color: "black",
                          marginLeft: 2,
                        }}
                      >
                        Dede Korkut Hikayeleri
                      </Link>
                    </li>
                    <li>
                    <Link
                        to="AskHikaye"
                        className="nav-link navbar-font-size"
                        style={{
                          fontSize: "18px",
                          color: "black",
                          marginLeft: 2,
                        }}
                      >
                        Aşk Hikayeleri
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="nav-link navbar-font-size">Features</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link navbar-font-size" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/KorkuHikayeleri" element={<KorkuHikayeleri />} />
          <Route path="/OrmanKorku" element={<OrmanKorku />} />
          <Route path="/MezarSes" element={<MezarSes />} />
          <Route path="/KorkuEv" element={<KorkuEv />} />
          <Route
            path="/KaranliktaTekBasina"
            element={<KaranliktaTekBasina />}
          />
          <Route path="/GizemliCiglik" element={<GizemliCiglik />} />
          <Route path="/HayaletEv" element={<HayaletEv />} />
          <Route path="/HayaletAvci" element={<HayaletAvci />} />
          <Route path="/MezarOtesi" element={<MezarOtesi />} />
          <Route path="/FabrikaHayalet" element={<FabrikaHayalet />} />
          <Route path="/DedeKorkut" element={<DedeKorkut />} />
          <Route path="/Segrek" element={<Segrek />} />
          <Route path="/Dumrul" element={<Dumrul />} />
          <Route path="/KanliKoca" element={<KanliKoca />} />
          <Route path="/Dirse" element={<Dirse />} />
          <Route path="/Salur" element={<Salur />} />
          <Route path="/Bamsi" element={<Bamsi />} />
          <Route path="/Uruz" element={<Uruz />} />
          <Route path="/Kazık" element={<Kazık/>}/>
          <Route path="/Emren" element={<Emren/>}/>
          <Route path="AskHikaye" element={<AskHikaye/>}/>
          <Route path="/Romeo" element={<Romeo/>}/>
          <Route path="/Ruh" element={<Ruh/>}/>
          <Route path="/Kimi" element={<Kimi/>}/>
          <Route path="/Kerem" element={<Kerem/>}/>
          <Route path="/Leyla" element={<Leyla/>}/>
          <Route path="/Ferhat"element={<Ferhat/>}/>
          <Route path="/Tahir" element={<Tahir/>}/>
          <Route path="/Hak" element={<Hak/>}/>
          <Route path="/Ozlem" element={<Ozlem/>}/>
        </Routes>
      </Router>

      <footer className="text-center py-3">
        <div className="container">
          <p className="mb-0">www.insanvekitap.com</p>
        </div>
      </footer>
    </>
  );
}

export default App;
