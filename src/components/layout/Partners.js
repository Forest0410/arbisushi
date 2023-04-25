import React, { useState, useEffect, useRef } from "react";

import bgOverlay04 from "../../assets/img/layout/bg-overlay-04.png";
import partnerLogo01 from "../../assets/img/partner-logo-v2-1.png";
import partnerLogo02 from "../../assets/img/partner-logo-v2-2.png";
import partnerLogo03 from "../../assets/img/partner-logo-v2-3.png";
import partnerLogo04 from "../../assets/img/partner-logo-v2-4.png";
import partnerLogo05 from "../../assets/img/partner-logo-v2-5.png";
import partnerLogo06 from "../../assets/img/partner-logo-v2-6.png";
import partnerLogo07 from "../../assets/img/partner-logo-v2-7.png";
import partnerLogo08 from "../../assets/img/partner-logo-v2-8.png";
import partnerLogo09 from "../../assets/img/partner-logo-v2-9.png";
import partnerLogo10 from "../../assets/img/partner-logo-v2-10.png";
import partnerLogo11 from "../../assets/img/partner-logo-v2-11.png";
import partnerLogo12 from "../../assets/img/partner-logo-v2-12.png";

export default function Partners() {
  return (
    <section className="space--top pb-4 section--dark bg-color--dark--2">
      <div
        className="background-holder opacity--05"
        style={{
          backgroundImage: `url(${bgOverlay04.src})`,
          width: "100%",
          height: "100%",
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 mx-auto">
            <div className="text-center mb-5 mb-lg-6 reveal">
              <h2 className="h3-font mb-2">Our partners</h2>
            </div>
          </div>
        </div>
        <div className="position-relative reveal">
          <div className="vertical-border d-flex pos-abs-center h-100 w-100">
            <span className="column-border"></span>
            <span className="column-border"></span>
            <span className="column-border"></span>
          </div>
          <div className="row horizontal-border text-center mb-lg-6 pb-lg-6 d-flex align-items-center">
            <div className="col-6 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span>
                <img src={partnerLogo01} alt="partner-logo" className="img-fluid" style={{ objectFit: "fill" }} />
              </span>
            </div>
            <div className="col-6 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span>
                <img src={partnerLogo02} alt="partner-logo" className="img-fluid" style={{ objectFit: "fill" }} />
              </span>
            </div>
            <div className="col-6 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span>
                <img src={partnerLogo03} alt="partner-logo" className="img-fluid" style={{ objectFit: "fill" }} />
              </span>
            </div>
            <div className="col-6 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span>
                <img src={partnerLogo04} alt="partner-logo" className="img-fluid" style={{ objectFit: "fill" }} />
              </span>
            </div>
          </div>
          <div className="row horizontal-border text-center mb-lg-6 pb-lg-6 d-flex align-items-center">
            <div className="col-6 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span>
                <img src={partnerLogo05} alt="partner-logo" className="img-fluid" style={{ objectFit: "fill" }} />
              </span>
            </div>
            <div className="col-6 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span>
                <img src={partnerLogo06} alt="partner-logo" className="img-fluid" style={{ objectFit: "fill" }} />
              </span>
            </div>
            <div className="col-6 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span>
                <img src={partnerLogo07} alt="partner-logo" className="img-fluid" style={{ objectFit: "fill" }} />
              </span>
            </div>
            <div className="col-6 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span>
                <img src={partnerLogo08} alt="partner-logo" className="img-fluid" style={{ objectFit: "fill" }} />
              </span>
            </div>
          </div>
          <div className="row horizontal-border text-center mb-lg-6 pb-lg-6 d-flex align-items-center">
            <div className="col-6 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span>
                <img src={partnerLogo09} alt="partner-logo" className="img-fluid" style={{ objectFit: "fill" }} />
              </span>
            </div>
            <div className="col-6 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span>
                <img src={partnerLogo10} alt="partner-logo" className="img-fluid" style={{ objectFit: "fill" }} />
              </span>
            </div>
            <div className="col-6 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span>
                <img src={partnerLogo11} alt="partner-logo" className="img-fluid" style={{ objectFit: "fill" }} />
              </span>
            </div>
            <div className="col-6 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span>
                <img src={partnerLogo12} alt="partner-logo" className="img-fluid" style={{ objectFit: "fill" }} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
