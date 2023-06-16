import "./App.css";
import resim from "./images/logo.png";
import React from "react";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
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
                <a className="nav-link active navbar-font-size" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-font-size" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-font-size" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle navbar-font-size"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
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
            </ul>
          </div>
        </div>
      </nav>
    
      <footer className="text-center py-3">
        <div className="container">
          <p className="mb-0">www.insanvekitap.com</p>
        </div>
      </footer>
    </>
  );
}

export default App;
