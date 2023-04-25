import React, { useState, useEffect, useRef } from "react";

export default function ICOProgress() {
  return (
    <section className="ico-progress ico-progress--v2 section--dark bg-color--dark--1">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-10 mx-auto text-md-center">
            <div className="bg-color--dark--2 rounded--10 mb-2">
              <div className="d-sm-flex justify-content-sm-between p-3 border--bottom mb-8">
                <div className="ico-progress__text text-center text-sm-left mb-1 mb-sm-0">
                  <span className="body-font text-color--400">
                    Raised funds
                  </span>
                  <p className="color--primary font-size--24 font-w--700">
                    7.5M ICT
                  </p>
                </div>
                <div className="ico-progress__text text-center mb-1 mb-sm-0">
                  <span className="body-font text-color--400">
                    Token Distributed
                  </span>
                  <p className="color--primary font-size--24 font-w--700">
                    156.45
                  </p>
                </div>
                <div className="ico-progress__text text-center text-sm-right">
                  <span className="body-font text-color--400">
                    Total USD Rised
                  </span>
                  <p className="color--primary font-size--24 font-w--700">
                    $6.000.000
                  </p>
                </div>
              </div>

              <div className="position-relative pt-3">
                <div className="d-flex">
                  <div
                    className="ico-progress__stages jsElement"
                    data-left="10"
                    style={{left: "10%"}}
                  >
                    <span className="body-font font-w--300">Soft cap</span>
                    <p className="color--white font-w--700 text-left">
                      3,000 <span className="font-w--500">ETH</span>
                    </p>
                  </div>
                  <div
                    className="ico-progress__stages jsElement"
                    data-left="80"
                    style={{left: "80%"}}
                  >
                    <span className="body-font color--white font-w--300">
                      Hard cap
                    </span>
                    <p className="color--white font-w--700">
                      20,000<span className="font-w--500">ETH</span>
                    </p>
                  </div>
                </div>
                <div className="ico-progress-bar rounded--full d-flex align-items-center mb-2">
                  <div
                    className="ico-progress-bar__inner rounded--full bg-color--primary jsElement"
                    data-progress-horizon="35"
                    style={{width: "35%"}}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-color--dark--2 rounded--10 pr-lg-3 d-md-inline-block d-lg-block">
              <div className="pricing-info d-lg-flex align-items-center justify-content-between">
                <div className="d-md-flex align-items-center justify-content-md-center justify-content-lg-start text-center text-md-left mb-md-2 mb-lg-0">
                  <div className="pricing-info-item pricing-info-item--active mr-md-4">
                    <span className="text-color--400 text-color--400">
                      Current Price
                    </span>
                    <p className="font-size--20 font-w--700">
                      0.00065 <span className="font-w--500">ETH</span>
                    </p>
                    <span className="discount h6-font">15% OFF</span>
                  </div>
                  <div className="pricing-info-item">
                    <span className="text-color--400 text-color--400">
                      Next Price
                    </span>
                    <p className="font-size--20 font-w--700">
                      0.00070 <span className="font-w--500">ETH</span>
                    </p>
                    <span className="discount h6-font">15% OFF</span>
                  </div>
                </div>

                <div className="text-center text-lg-left pb-2 pb-lg-0 px-3">
                  <ul
                    className="countdown d-flex justify-content-center justify-content-lg-start text-left"
                    id="date"
                    data-date="Sep 30, 2019"
                  >
                    <li className="d-flex flex-column mr-2 mr-sm-3">
                      <span
                        className="countdown__count color--white opacity--80 font-size--30 font-w--600"
                        id="days"
                      >00</span>
                      <span className="text-color--400">Days</span>
                    </li>

                    <li className="d-flex flex-column mr-2 mr-sm-3">
                      <span
                        className="countdown__count color--white opacity--80 font-size--30 font-w--600"
                        id="hours"
                      >18</span>
                      <span className="text-color--400">Hours</span>
                    </li>

                    <li className="d-flex flex-column mr-2 mr-sm-3">
                      <span
                        className="countdown__count color--white opacity--80 font-size--30 font-w--600"
                        id="minutes"
                      >59</span>
                      <span className="text-color--400">Minutes</span>
                    </li>

                    <li className="d-flex flex-column">
                      <span
                        className="countdown__count color--white opacity--80 font-size--30 font-w--600"
                        id="seconds"
                      >40</span>
                      <span className="text-color--400">Seconds</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
