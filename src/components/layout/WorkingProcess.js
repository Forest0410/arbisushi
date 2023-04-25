import React, { useState, useEffect, useRef } from "react";

import bgOverlay08 from "../../assets/img/layout/bg-overlay-08.jpg";
import processLight from "../../assets/img/layout/process-light.svg";
import brandLogoIcon from "../../assets/img/brand-logo-icon.png";

export default function WorkingProcess() {
  return (
    <section
      className="space process process--v1 section--dark bg-color--dark--1 hidden"
      id="working-process"
    >
      <div 
        className="background-holder background--bottom background--contain background--move"
        style={{
          backgroundImage: `url(${bgOverlay08.src})`,
          width: '100%',
          height: '100%',
        }}
      >
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 mx-auto">
            <div className="text-center mb-5 reveal">
              <h2 className="h3-font mb-2">How it works?</h2>
              <p className="h6-font">
                Participants of the SpaceMax platform interact with each other
                within a global ecosystem. SpaceMax Token (INT) is a means of
                creating economic incentives to reward platform members. INT
                acts as the main component enabling SpaceMax Consensus between
                participants.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <div className="position-relative mt-xl-10 reveal">
              <div className="pos-abs-center d-none d-lg-block">
                <img src={processLight} alt="process" className="svg process__circle d-inline-block" style={{ objectFit: "fill" }} />
                <img src={brandLogoIcon} alt="brand-logo" className="pos-abs-center" style={{ objectFit: "fill" }} />
              </div>
              <div className="d-sm-flex justify-content-between ml-6 ml-sm-0">
                <div className="options options--left text-left remove-space--bottom">
                  <div className="option mb-3 mb-sm-10">
                    <h3 className="h6-font text-sm-right text-uppercase font-w--700">
                      Exchange <br />
                      commissions
                    </h3>
                    <span className="decor decor--light"></span>
                  </div>
                  <div className="option mb-3 mb-sm-10">
                    <h3 className="h6-font text-sm-right text-uppercase font-w--700">
                      Investment <br />
                      platform commissions
                    </h3>
                    <span className="decor decor--light"></span>
                  </div>
                  <div className="option mb-3 mb-sm-10">
                    <h3 className="h6-font text-sm-right text-uppercase font-w--700">
                      Mining <br />
                      pool commission
                    </h3>
                    <span className="decor decor--light"></span>
                  </div>
                </div>
                <div className="process__circle--mobile position-relative d-none d-sm-flex d-lg-none align-items-center">
                  <span className="mobile-logo">
                    <img src={brandLogoIcon} alt="brand-logo" className="pos-abs-center" style={{ objectFit: "fill" }} />
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="options options--right text-right remove-space--bottom">
                    <div className="option mb-3 mb-sm-10">
                      <h3 className="h6-font text-left text-uppercase font-w--700">
                        Margin <br />
                        trading commissions
                      </h3>
                      <span className="decor decor--light"></span>
                    </div>
                    <div className="option mb-3 mb-sm-10">
                      <h3 className="h6-font text-left text-uppercase font-w--700">
                        Electronic
                        <br />
                        payment system
                      </h3>
                      <span className="decor decor--light"></span>
                    </div>
                    <div className="option mb-3 mb-sm-10">
                      <h3 className="h6-font text-left text-uppercase font-w--700">
                        Bank <br />
                        commission
                      </h3>
                      <span className="decor decor--light"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-lg-2">
          <div className="col-12 text-center mt-5 mt-lg-10 reveal">
            <a href="/" className="btn btn-bg--cta--1 rounded--full btn-hover--splash btn-hover--3d">
              <span className="btn__text">Join the Whitelist</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
