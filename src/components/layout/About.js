import React, { useState, useEffect, useRef } from "react";

import illustration03 from "../../assets/img/android-chrome-512x512.png";

export default function About() {
  const fileUrl = "/files/whitepaper.pdf";

  function openWhitepaper(event) {
    window.open(fileUrl, "_blank", "noreferrer");
  }

  return (
    <section
      className="space--top pb-5 pb-lg-10 about about--v3 section--dark bg-color--dark--1"
      id="introduce"
    >
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row text-center text-lg-left mb-10">
          <div className="col-12 col-lg-7 col-xl-6">
            <div className="text-center text-lg-left reveal">
              <h2 className="h3-font mb-3">SECURE SCALING FOR ETHEREUM</h2>
              <p className="h6-font mb-3">
                Arbitrum’s suite of scaling solutions provides faster speeds at
                a significantly lower cost, with the same level of security as
                Ethereum.
              </p>
              <p className="h6-font mb-3">
                Arbitrum One and Nova are powered by Nitro, our proprietary
                technology stack. Nitro&apos;s next-generation rollup
                architecture provides 7x more throughput than Ethereum and lower
                fees without sacrificing any security.
              </p>
              <p className="h6-font mb-3">
                Upcoming Stylus will enable users to deploy programs written in
                popular programming languages like Rust, C, C++, and more,
                side-by-side with existing Solidity dApps on the same Arbitrum
                blockchain.
              </p>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-center">
                {/* <a href={fileUrl} className="mx-1 btn btn-size--sm btn-bg--primary rounded--full btn-hover--splash btn-hover--3d">
                  <span className="btn__text">Whitepaper</span>
                </a> */}
                <button
                  className="mx-1 btn btn-size--sm btn-bg--primary rounded--full btn-hover--splash btn-hover--3d"
                  onClick={openWhitepaper}
                >
                  <span className="btn__text">Whitepaper</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-6 mb-6 mb-lg-0">
            <picture className="about__image reveal">
              <img
                src={illustration03}
                alt="illustration"
                className="img-fluid"
                style={{ objectFit: "contain" }}
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
