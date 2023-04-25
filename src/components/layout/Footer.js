import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";

import brandLogoWhite from "../../assets/img/brand-logo-white.png";

export default function Footer() {
  useEffect(() => {
    function cssElem() {
      $(".height-emulator").css({
        height: $(".footer--fixed").outerHeight(true),
      });
    }
    cssElem();
    window.addEventListener("resize", cssElem);
    // clean up
    return () => window.removeEventListener("resize", cssElem);
  }, []);

  return (
    <footer className="footer footer--fixed section--dark bg-color--dark--3">
      {/* <div className="border--bottom pt-4 pb-4">
        <div className="container">
          <div className="row align-items-center text-center text-lg-left">
            <div className="col-12 col-lg-6 mb-2 mb-lg-0">
              <h3 className="font-size--30 mb-2 mb-md-0">
                Subscribe and stay updated!
              </h3>
            </div>
            <div className="col-12 col-lg-6 ml-md-auto pl-lg-4 pl-xl-0">
              <div className="newsletter-form form--v1 d-lg-flex align-items-lg-center justify-content-lg-between">
                <form action="/" className="form">
                  <div className="input-group input-group--rounded d-flex">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      style={{ color: "black" }}
                    />
                    <button
                      className="btn btn-bg--primary rounded--full btn-hover--splash"
                      type="submit"
                    >
                      <span className="btn__text">Join Now</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="py-6 py-lg-10">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-6 col-xl-5 mx-auto mb-4 mb-lg-0 text-center text-lg-left">
              <span className="mb-2">
                <img src={brandLogoWhite} alt="brand-logo" style={{ objectFit: "fill" }} />
              </span>
              <p className="text-color--300">
                The main objectives of the project are to meet the needs of
                cryptocurrency projects and users for traditional services, and
                to provide access to investment product.
              </p>
            </div>
            <div 
              className="col-12 col-lg-6 ml-lg-auto text-center text-lg-right"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <ul className="icon-group icon-rounded icon-rounded-color--gray justify-content-center justify-content-lg-end mb-2 mb-lg-2">
                {/* <li>
                  <a href="/" className="text-color--300">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li> */}
                <li>
                  <a href="https://t.me/ArbitrumFoundation" className="text-color--300">
                    <i className="fab fa-telegram-plane"></i>
                  </a>
                </li>
                {/* <li>
                  <a href="/" className="text-color--300">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li> */}
                <li>
                  <a href="https://twitter.com/arbitrum" className="text-color--300">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                {/* <li>
                  <a href="/" className="text-color--300">
                    <i className="fab fa-medium-m"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="text-color--300">
                    <i className="fab fa-bitcoin"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="text-color--300">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li> */}
              </ul>
              {/* <ul className="list-unstyled d-flex flex-wrap justify-content-center justify-content-lg-end remove-space--x">
                <li className="mx-2 ml-lg-2">
                  <a href="/" className="body-font text-color--300">
                    Terms & Conditions
                  </a>
                </li>
                <li className="mx-2 ml-lg-2">
                  <a href="/" className="body-font text-color--300">
                    Privacy Policy
                  </a>
                </li>
                <li className="mx-2 ml-lg-2">
                  <a href="/" className="body-font text-color--300">
                    Cookie Preferences
                  </a>
                </li>
              </ul> */}
              <p className="text-color--400 font-size--14">
                © 2023 &nbsp;
                <a href="/" className="text-color--400">
                  SpaceMax
                </a>
                . All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
