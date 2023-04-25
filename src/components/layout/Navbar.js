import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import Modal from "react-bootstrap/Modal";
import { Outlet } from "react-router-dom";

import brandLogoWhite from "../../assets/img/brand-logo-white.png";
import flagUk from "../../assets/img/flag/uk.svg";
import flagSpain from "../../assets/img/flag/spain.svg";
import flagRussia from "../../assets/img/flag/russia.svg";
import flagTurkey from "../../assets/img/flag/turkey.svg";

export default function Navbar() {
  const [showFlagDropdown, setShowFlagDropdown] = useState(false);
  // create a React ref for the dropdown element
  const flagDropdown = useRef(null);

  const [showNavbarDropdown, setShowNavbarDropdown] = useState(false);
  const navbarDropdown = useRef(null);

  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!showFlagDropdown) return;
    function handleClick(event) {
      event.preventDefault();
      event.stopPropagation();
      if (
        flagDropdown.current &&
        !flagDropdown.current.contains(event.target)
      ) {
        setShowFlagDropdown(false);
      } else {
        setShowFlagDropdown(true);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [showFlagDropdown]);

  useEffect(() => {
    function navMenu(event) {
      let navbarObj = document.querySelectorAll(".navbar")[0];
      let bodyObj = document.querySelectorAll("body")[0];
      let navbarIconObj = document.querySelectorAll(".navbar-toggler-icon")[0];
      if (
        navbarDropdown.current &&
        !navbarDropdown.current.contains(event.target)
      ) {
        setShowNavbarDropdown(false);
        navbarObj.classList.remove("active");
        bodyObj.classList.remove("offcanvas--open");
        navbarIconObj.classList.remove("active");
      } else {
        setShowNavbarDropdown(true);
        navbarObj.classList.toggle("active");
        bodyObj.classList.toggle("offcanvas--open");
        navbarIconObj.classList.toggle("active");
      }
    }
    window.addEventListener("click", navMenu);
    // clean up
    return () => window.removeEventListener("click", navMenu);
  }, [showNavbarDropdown]);

  useEffect(() => {
    function whenScroll(event) {
      event.preventDefault();
      event.stopPropagation();
      var t = $(".navbar-sticky");
      var st = $(window).scrollTop();
      if (st >= 120) {
        t.addClass("navbar-sticky--moved-up");
      } else {
        t.removeClass("navbar-sticky--moved-up");
      }
      if (st >= 250) {
        t.addClass("navbar-sticky--transitioned");
      } else {
        t.removeClass("navbar-sticky--transitioned");
      }
      if (st >= 500) {
        t.addClass("navbar-sticky--on");
      } else {
        t.removeClass("navbar-sticky--on");
      }
    }
    window.addEventListener("scroll", whenScroll);
    // clean up
    return () => window.removeEventListener("scroll", whenScroll);
  }, []);

  return (
    <header className="navbar navbar-sticky sticky-bg-color--dark navbar-expand-lg navbar-dark">
      <div className="container-fluid position-relative">
        <a className="navbar-brand" href="/">
          <img
            className="navbar-brand__regular"
            src={brandLogoWhite}
            alt="brand-logo"
            style={{ objectFit: "contain" }}
          />
          <img
            className="navbar-brand__sticky"
            src={brandLogoWhite}
            alt="sticky brand-logo"
            style={{ objectFit: "contain" }}
          />
        </a>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="navbarToggler"
          aria-label="Toggle navigation"
          onClick={() => setShowNavbarDropdown((prev) => !prev)}
        >
          <span className="navbar-toggler-icon" ref={navbarDropdown}></span>
        </button>

        <div className="navbar-inner">
          {/* <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="navbarToggler"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
          <nav>
            <ul className="navbar-nav" id="navbar-nav">
              {/* <li key="nav__how_it_works" className="nav-item">
                <a className="nav-link" href="/#working-process">
                  How it works
                </a>
              </li>
              <li key="nav__roadmap" className="nav-item">
                <a className="nav-link" href="/#roadmap">
                  Roadmap
                </a>
              </li> */}
              <li key="nav__introduce" className="nav-item">
                <a className="nav-link" href="#introduce" rel="noreferrer">
                  Introduce
                </a>
              </li>
              <li key="nav__tokenomics" className="nav-item">
                <a className="nav-link" href="#tokenomics" rel="noreferrer">
                  Tokenomics
                </a>
              </li>
              <li key="nav__roadmap" className="nav-item">
                <a className="nav-link" href="#roadmap" rel="noreferrer">
                  Roadmap
                </a>
              </li>
              <li key="nav__team" className="nav-item">
                <a className="nav-link" href="#team" rel="noreferrer">
                  Team
                </a>
              </li>
              <li key="nav__documents" className="nav-item">
                <a className="nav-link" href="#documents" rel="noreferrer">
                  Documents
                </a>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>

        <div className="d-flex align-items-center ml-lg-1 ml-xl-2 mr-5 mr-sm-6 m-lg-0">
          <button 
            className="btn btn-size--sm btn-bg--cta--1 rounded--full btn-hover--3d btn-hover--splash smooth-scroll"
            onClick={() => setShowComingSoon(true)}
          >
            <span className="btn__text d-flex align-items-center">
              <i className="fa fa-gem color--white pr-1 h6-font font-w--700"></i>
              Connect Wallet
            </span>
          </button>

          <div className="dropdown-module dropdown-module--dark d-inline-block position-relative ml-1 ml-sm-2">
            <button
              className="dropdown-module__toggler"
              type="button"
              onClick={() => setShowFlagDropdown((prev) => !prev)}
            >
              <span className="flag-image">
                <img
                  src={flagUk}
                  height={48}
                  width={48}
                  alt="flag"
                  ref={flagDropdown}
                />
              </span>
            </button>

            {showFlagDropdown && (
              <ul className="dropdown-module-list">
                <li>
                  <a className="dropdown-module__item d-flex align-items-center" href="/">
                    <span className="flag-image mr-2">
                      <img
                        src={flagUk}
                        height={48}
                        width={48}
                        alt="flag"
                        className="svg"
                      />
                    </span>
                    English
                  </a>
                </li>
                {/* <li>
                  <a className="dropdown-module__item d-flex align-items-center" href="/">
                    <span className="flag-image mr-2">
                      <img
                        src={flagSpain}
                        height={48}
                        width={48}
                        alt="flag"
                        className="svg"
                      />
                    </span>
                    Español
                  </a>
                </li>
                <li>
                  <a className="dropdown-module__item d-flex align-items-center" href="/">
                    <span className="flag-image mr-2">
                      <img
                        src={flagRussia}
                        height={48}
                        width={48}
                        alt="flag"
                        className="svg"
                      />
                    </span>
                    Русский
                  </a>
                </li>
                <li>
                  <a className="dropdown-module__item d-flex align-items-center" href="/">
                    <span className="flag-image mr-2">
                      <img
                        src={flagTurkey}
                        height={48}
                        width={48}
                        alt="flag"
                        className="svg"
                      />
                    </span>
                    Türk
                  </a>
                </li> */}
              </ul>
            )}
          </div>
          <Modal
            size="md"
            show={showComingSoon}
            onHide={() => setShowComingSoon(false)}
            aria-labelledby="example-modal-sizes-title-sm"
            dialogClassName="comingsoon-dialog"
          >
            <Modal.Body style={{ height: 60 }}>
              <p>Coming Soon...</p>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </header>
  );
}
