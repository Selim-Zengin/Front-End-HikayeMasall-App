import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import resim from "./images/logo.png";
import { Anasayfa } from "./components/anasayfa";
import { KorkuHikayeleri } from "./components/KorkuHikayeleri";

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
                    <li className="dropdown-item">
                      <Link
                        to="KorkuHikayeleri"
                        className="nav-link navbar-font-size"
                        style={{ fontSize: "20px", color: "black" }}
                      >
                        Korku Hikayeleri
                      </Link>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
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
