import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";

import bgOverlay06 from "../../assets/img/layout/bg-overlay-06.svg";

export default function Hero() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    let timerInterval = null;
    var endTime = new Date("30 April 2023 10:00:00 GMT+00:00");
    var end_ts = Math.floor(Date.parse(endTime) / 1000);
    var prev_days = 0;
    var prev_hours = 0;
    var prev_minutes = 0;
    var prev_seconds = 0;
    function timerCountDown() {
      var now_ts = Math.floor(new Date().getTime() / 1000);
      var ts_diff = end_ts - now_ts;
      if (ts_diff < 0) {
        return;
      }
      if (ts_diff < -3) {
        clearInterval(timerInterval);
        window.location.reload();
        return;
      }
      var days = Math.floor(ts_diff / 60 / 60 / 24);
      var hours = Math.floor((ts_diff - days * 60 * 60 * 24) / 60 / 60);
      var minutes = Math.floor(
        (ts_diff - days * 60 * 60 * 24 - hours * 60 * 60) / 60
      );
      var seconds = Math.floor(
        ts_diff - days * 60 * 60 * 24 - hours * 60 * 60 - minutes * 60
      );
      if (prev_days != days) {
        $(".count_down_days .number").text(days < 10 ? "0" + days : days);
      }
      if (prev_hours != hours) {
        $(".count_down_hours .number").text(hours < 10 ? "0" + hours : hours);
      }
      if (prev_minutes != minutes) {
        $(".count_down_minutes .number").text(
          minutes < 10 ? "0" + minutes : minutes
        );
      }
      $(".count_down_seconds .number").text(
        seconds < 10 ? "0" + seconds : seconds
      );
      prev_days = days;
      prev_hours = hours;
      prev_minutes = minutes;
      prev_seconds = seconds;
    }
    timerInterval = setInterval(timerCountDown, 1000);
  }, []);

  return (
    <section className="hero hero--v3 ico-progress ico-progress--v2 section--dark bg-color--dark--1 d-flex align-items-center hidden">
      <div
        className="background-holder background--move z-index1"
        style={{
          backgroundImage: `url(${bgOverlay06.src})`,
          width: "100%",
          height: "100%",
        }}
      >
        {/* <img
          src={bgOverlay06}
          alt="image"
          className="background-image-holder"
          style={{ objectFit: "fill" }}
        /> */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8 px-lg-0 mx-auto mb-3 mb-lg-0 mt-8 mt-lg-0 text-center z-index2">
            <div className="hero-content">
              <h1 className="hero__title h2-font mb-2">
                Welcome to the future of Ethereum
              </h1>
              <p className="hero__description mb-3 mb-lg-5 mb-md-6">
                The $ARB airdrop and presale are currently available for a
                limited time, so hurry up to claim your $ARB tokens.
              </p>
              <a href="/#presale" className="btn btn-bg--cta--1 rounded--full btn-hover--3d btn-hover--splash mb-2 mx-1 smooth-scroll">
                <i className="fa fa-gem color--white pr-1 h6-font font-w--700"></i>
                <span className="btn__text">Pre-sale</span>
              </a>

              <a href="/#airdrop" className="btn btn-bg--primary rounded--full btn-hover--3d btn-hover--splash mb-2 mx-1 smooth-scroll">
                <i className="fa fa-parachute-box color--white pr-1 h6-font font-w--700"></i>
                <span className="btn__text">Airdrop</span>
              </a>
            </div>
          </div>
          <div
            className="col-12 col-md-1 mr-md-3 text-center icon-group--sticky"
            style={{ zIndex: "10" }}
          >
            <ul className="icon-group icon-group--vertical rounded--full rounded--full justify-content-center">
              {/* <li>
                <a href="/" className="color--primary">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li> */}
              <li>
                <a href="https://t.me/ArbitrumFoundation" className="color--primary">
                  <i className="fab fa-telegram-plane"></i>
                </a>
              </li>
              {/* <li>
                <a href="/" className="color--primary">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li> */}
              <li>
                <a href="https://twitter.com/arbitrum" className="color--primary">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              {/* <li>
                <a href="/" className="color--primary">
                  <i className="fab fa-medium-m"></i>
                </a>
              </li>
              <li>
                <a href="/" className="color--primary">
                  <i className="fab fa-bitcoin"></i>
                </a>
              </li>
              <li>
                <a href="/" className="color--primary">
                  <i className="fab fa-youtube"></i>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-md-10 mx-auto text-md-center">
            <div className="bg-color--dark--2 rounded--10 pr-lg-3 d-md-inline-block d-lg-block">
              <div className="pricing-info d-md-flex align-items-center justify-content-between justify-content-md-start">
                <div className="d-md-flex align-items-center justify-content-md-center justify-content-lg-start text-center text-md-left mb-md-0">
                  <div className="pricing-info-item pricing-info-item--active px-md-2 mr-xl-4">
                    <span className="text-color--400 font-size--20">
                      Current Price
                    </span>
                    <p className="font-size--20 font-w--700 mt-md-2">
                      1 <span className="font-w--500">ETH</span> = 50,000 &nbsp;
                      <span className="font-w--500">ARB</span>
                    </p>
                  </div>
                  <div className="pricing-info-item py-1"></div>
                </div>
                <div className="text-center text-md-left pb-2 pb-lg-0 px-3">
                  <span className="text-color--400 font-size--20 mt-2">
                    Airdrop ending
                  </span>
                  <ul className="d-flex justify-content-center justify-content-lg-start text-left px-0">
                    <li className="d-flex flex-column mr-2 mr-sm-3 count_down_days">
                      <span className="number color--white opacity--80 font-size--40 font-w--600">
                        00
                      </span>
                      <span className="text-color--400">Days</span>
                    </li>
                    <li className="d-flex flex-column mr-2 mr-sm-3 count_down_hours">
                      <span className="number color--white opacity--80 font-size--40 font-w--600">
                        00
                      </span>
                      <span className="text-color--400">Hours</span>
                    </li>
                    <li className="d-flex flex-column mr-2 mr-sm-3 count_down_minutes">
                      <span className="number color--white opacity--80 font-size--40 font-w--600">
                        00
                      </span>
                      <span className="text-color--400">Minutes</span>
                    </li>
                    <li className="d-flex flex-column count_down_seconds">
                      <span className="number color--white opacity--80 font-size--40 font-w--600">
                        00
                      </span>
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
