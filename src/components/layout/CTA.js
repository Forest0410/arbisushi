import React, { useState, useEffect, useRef } from "react";

import deviceMockup from "../../assets/img/device-mockup.png";

export default function CTA() {
  return (
    <section className="space section--dark bg-color--dark--2 border--bottom switchable d-lg-flex align-items-md-center">
      <div className="col-12 col-lg-6 mb-lg-0 text-center mb-3 reveal">
        <picture className="switchable__image">
          <img
            src={deviceMockup}
            alt="image"
            className="img-fluid"
            style={{ objectFit: "fill" }}
          />
        </picture>
      </div>
      <div className="switchable__content">
        <div className="container">
          <div className="row">
            <div className="col-12 ml-md-auto">
              <div className="mb-4 text-center text-sm-left reveal">
                <h2 className="h3-font mb-1">Analytics in your pocket now!</h2>
                <p className="h6-font">
                  Login to the SpaceMax App and use ETH from your Eidoo wallet
                  to buy ARB tokens and get hardware rewards.
                </p>
              </div>
              <ul className="pl-2 mb-6 text-left reveal">
                <li className="text-color--300 mb-1">
                  <p>Send and receive ARB</p>
                </li>
                <li className="text-color--300 mb-1">
                  <p>Create child profiles</p>
                </li>
                <li className="text-color--300 mb-1">
                  <p>
                    Build family networks by inviting trusted family members
                  </p>
                </li>
                <li className="text-color--300 mb-1">
                  <p>
                    View their own personal balance and compare its market value
                  </p>
                </li>
                <li className="text-color--300 mb-1">
                  <p>Transfer to exchanges to convert to other currencies</p>
                </li>
                <li className="text-color--300 mb-1">
                  <p>See notifications from across the family network</p>
                </li>
              </ul>
              <div className="button-group d-flex flex-column flex-sm-row align-items-center reveal">
                <div className="d-flex flex-column align-items-center mb-2">
                  <a href="/" className="btn btn-bg--primary btn-border--width--2 rounded--full color--white btn-hover--splash">
                    <span className="btn__text">Download Now</span>
                  </a>
                  <span className="text-color--500 mt-2">
                    Available for any OS
                  </span>
                </div>
                <div className="ml-sm-3 mb-sm-7">
                  <a className="lightbox h6-font color--primary d-flex align-items-center justify-content-center" data-autoplay="true" data-vbtype="video" href="https://www.youtube.com/watch?v=aRh_eUQSmIg">
                    <i className="icon icon-button-circle-play color--primary font-size--26"></i>
                    <span className="ml-1 font-w--700">Watch our video</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
