import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyPrevArror(props) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className="carosuel-arrow carosuel-arrow--vertical carosuel-arrow--prev"
      onClick={onClick}
    >
      <i className="icon icon-up-arrow"></i>
    </button>
  );
}

function MyNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className="carosuel-arrow carosuel-arrow--vertical carosuel-arrow--next"
      onClick={onClick}
    >
      <i className="icon icon-down-arrow"></i>
    </button>
  );
}

export default function Roadmap() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    prevArrow: <MyPrevArror />,
    nextArrow: <MyNextArrow />,
    beforeChange: function (currentSlide, nextSlide) {
      // If browser resized, check width again
      var current_year = "";
      if ($(window).width() <= 767) {
        current_year = $(".slick-active").children().children().data("year");
      } else {
        current_year = $(".slick-active:eq(1)")
          .children()
          .children()
          .data("year");
      }
      $(".roadmap__year li").each(function () {
        if ($(this).html() == current_year) {
          $(".roadmap__year li").removeClass("active");
          $(this).addClass("active");
        }
      });
    },
    afterChange: function (currentSlide) {
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          verticalSwiping: false,
          // rtl: true,
          slidesToShow: 1,
          adaptiveHeight: true,
          prevArrow: <MyPrevArror />,
          nextArrow: <MyNextArrow />,
        },
      },
    ],
  };

  useEffect(() => {
    function initRoadmapYear() {
      var carouselItem = $(".carosuel-slider--v6 .slick-slide");
      // append item
      var years = [];
      $(".roadmap__year").html("");
      carouselItem.each(function (index, item) {
        var domObj = item.firstChild.firstChild;
        var year = $(domObj).data("year");
        var dom;
        if ($(this).hasClass("slick-active")) {
          dom = '<li class="h3-font font-w--700 active">' + year + "</li>";
        } else {
          dom = '<li class="h3-font font-w--700">' + year + "</li>";
        }
        
        if (years.includes(year) === false) {
          $(".roadmap__year").append(dom);
          years.push(year);
        }
      });
    }
    initRoadmapYear();
  }, []);

  return (
    <section
      className="space hidden roadmap roadmap--v1 section--dark bg-color--dark--1"
      id="roadmap"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 mx-auto reveal">
            <div className="text-center mb-sm-5 mb-lg-7">
              <h2 className="h3-font mb-2">Company Roadmap</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-7 pb-md-0 reveal">
          <div className="col-12 col-xl-1 mx-auto mx-lg-0 text-center">
            <ul className="roadmap__year list-unstyled d-xl-flex flex-xl-column"></ul>
          </div>
          <div className="col-12 col-xl-9 ml-xl-auto">
            {/* <div className="carosuel-slider--v6"> */}
            <Slider {...settings} className="carosuel-slider--v6">
              <div className="slide mb-1" data-year="2020">
                <div className="d-md-flex align-items-md-center">
                  <div className="mr-5 pr-5 mr-xl-7 pr-xl-7 mb-3 mb-md-0 position-relative">
                    <span className="text-color--400 font-w--600 mb-1 opacity--60">
                      2020
                    </span>
                    <h3 className="slide__title font-size--26 text-color--200 font-w--600">
                      Quarter - 1
                    </h3>
                    <span className="d-none d-md-inline-block decor decor--square decor--light"></span>
                  </div>
                  <ul className="pl-2 pl-md-0">
                    <li className="text-color--400">
                      <p className="h6-font">
                        Founders of INT meet to confirm ideas around
                        decentralized travel platform.
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">
                        Token is tested and ready for release.
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">
                        Whitepaper available in both English and Chinese.
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">Sale website optimized.</p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">
                        Web platform and application designed around user
                        accessibility.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="slide mb-1" data-year="2020">
                <div className="d-md-flex align-items-md-center">
                  <div className="mr-5 pr-5 mr-xl-7 pr-xl-7 mb-3 mb-md-0 position-relative">
                    <span className="text-color--400 font-w--600 mb-1 opacity--60">
                      2020
                    </span>
                    <h3 className="slide__title font-size--26 text-color--200 font-w--600">
                      Quarter - 2
                    </h3>
                    <span className="d-none d-md-inline-block decor decor--square decor--light"></span>
                  </div>
                  <ul className="pl-2 pl-md-0">
                    <li className="text-color--400">
                      <p className="h6-font">
                        Listing INT token on exchanges (Approximately 3-month
                        after Main-sale concludes).
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">
                        Integration of platform in line with blockchain
                        including fiat and cryptocurrency payment methods.
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">
                        Peer-to-Peer chat option and amalgamation of AI-based
                        dispute system development.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="slide mb-1" data-year="2020">
                <div className="d-md-flex align-items-md-center">
                  <div className="mr-5 pr-5 mr-xl-7 pr-xl-7 mb-3 mb-md-0 position-relative">
                    <span className="text-color--400 font-w--600 mb-1 opacity--60">
                      2020
                    </span>
                    <h3 className="slide__title font-size--26 text-color--200 font-w--600">
                      Quarter - 3
                    </h3>
                    <span className="d-none d-md-inline-block decor decor--square decor--light"></span>
                  </div>
                  <ul className="pl-2 pl-md-0">
                    <li className="text-color--400">
                      <p className="h6-font">
                        Release of IcoNijna beta application and web platform
                        Release Ticket bookings on the platform.
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">
                        Release V.2 of the IcoNijna platform updated now
                        offering Airlines platform.
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">Development of Smart contract.</p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">Sale website optimized.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="slide mb-1" data-year="2021">
                <div className="d-md-flex align-items-md-center">
                  <div className="mr-5 pr-5 mr-xl-7 pr-xl-7 mb-3 mb-md-0 position-relative">
                    <span className="text-color--400 font-w--600 mb-1 opacity--60">
                      2021
                    </span>
                    <h3 className="slide__title font-size--26 text-color--200 font-w--600">
                      Quarter - 1
                    </h3>
                    <span className="d-none d-md-inline-block decor decor--square decor--light"></span>
                  </div>
                  <ul className="pl-2 pl-md-0">
                    <li className="text-color--400">
                      <p className="h6-font">
                        Release V.2 of the IcoNijna platform updated now
                        offering Airlines platform.
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">
                        Integration of platform in line with blockchain
                        including fiat and cryptocurrency payment methods.
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">
                        Development of ICO personal account.
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">Beta testing.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="slide mb-1" data-year="2021">
                <div className="d-md-flex align-items-md-center">
                  <div className="mr-5 pr-5 mr-xl-7 pr-xl-7 mb-3 mb-md-0 position-relative">
                    <span className="text-color--400 font-w--600 mb-1 opacity--60">
                      2021
                    </span>
                    <h3 className="slide__title font-size--26 text-color--200 font-w--600">
                      Quarter - 2
                    </h3>
                    <span className="d-none d-md-inline-block decor decor--square decor--light"></span>
                  </div>
                  <ul className="pl-2 pl-md-0">
                    <li className="text-color--400">
                      <p className="h6-font">
                        Listing INT token on exchanges (Approximately 3-month
                        after Main-sale concludes).
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">
                        Integration of platform in line with blockchain
                        including fiat and cryptocurrency payment methods.
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">
                        Peer-to-Peer chat option and amalgamation of AI-based
                        dispute system development.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="slide mb-1" data-year="2021">
                <div className="d-md-flex align-items-md-center">
                  <div className="mr-5 pr-5 mr-xl-7 pr-xl-7 mb-3 mb-md-0 position-relative">
                    <span className="text-color--400 font-w--600 mb-1 opacity--60">
                      2021
                    </span>
                    <h3 className="slide__title font-size--26 text-color--200 font-w--600">
                      Quarter - 3
                    </h3>
                    <span className="d-none d-md-inline-block decor decor--square decor--light"></span>
                  </div>
                  <ul className="pl-2 pl-md-0">
                    <li className="text-color--400">
                      <p className="h6-font">
                        Founders of INT meet to confirm ideas around
                        decentralized travel platform.
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">
                        Token is tested and ready for release.
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">
                        Whitepaper available in both English and Chinese.
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">Sale website optimized.</p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">
                        Web platform and application designed around user
                        accessibility.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="slide mb-1" data-year="2022">
                <div className="d-md-flex align-items-md-center">
                  <div className="mr-5 pr-5 mr-xl-7 pr-xl-7 mb-3 mb-md-0 position-relative">
                    <span className="text-color--400 font-w--600 mb-1 opacity--60">
                      2022
                    </span>
                    <h3 className="slide__title font-size--26 text-color--200 font-w--600">
                      Quarter - 1
                    </h3>
                    <span className="d-none d-md-inline-block decor decor--square decor--light"></span>
                  </div>
                  <ul className="pl-2 pl-md-0">
                    <li className="text-color--400">
                      <p className="h6-font">
                        Release of IcoNijna beta application and web platform
                        Release Ticket bookings on the platform.
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">
                        Release V.2 of the IcoNijna platform updated now
                        offering Airlines platform.
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">Development of Smart contract.</p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">Sale website optimized.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="slide mb-1" data-year="2022">
                <div className="d-md-flex align-items-md-center">
                  <div className="mr-5 pr-5 mr-xl-7 pr-xl-7 mb-3 mb-md-0 position-relative">
                    <span className="text-color--400 font-w--600 mb-1 opacity--60">
                      2022
                    </span>
                    <h3 className="slide__title font-size--26 text-color--200 font-w--600">
                      Quarter - 2
                    </h3>
                    <span className="d-none d-md-inline-block decor decor--square decor--light"></span>
                  </div>
                  <ul className="pl-2 pl-md-0">
                    <li className="text-color--400">
                      <p className="h6-font">
                        Release V.2 of the IcoNijna platform updated now
                        offering Airlines platform.
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">
                        Integration of platform in line with blockchain
                        including fiat and cryptocurrency payment methods.
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">
                        Development of ICO personal account.
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">Beta testing.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="slide mb-1" data-year="2022">
                <div className="d-md-flex align-items-md-center">
                  <div className="mr-5 pr-5 mr-xl-7 pr-xl-7 mb-3 mb-md-0 position-relative">
                    <span className="text-color--400 font-w--600 mb-1 opacity--60">
                      2022
                    </span>
                    <h3 className="slide__title font-size--26 text-color--200 font-w--600">
                      Quarter - 3
                    </h3>
                    <span className="d-none d-md-inline-block decor decor--square decor--light"></span>
                  </div>
                  <ul className="pl-2 pl-md-0">
                    <li className="text-color--400">
                      <p className="h6-font">
                        Listing INT token on exchanges (Approximately 3-month
                        after Main-sale concludes).
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">
                        Integration of platform in line with blockchain
                        including fiat and cryptocurrency payment methods.
                      </p>
                    </li>
                    <li className="text-color--400">
                      <p className="h6-font">
                        Peer-to-Peer chat option and amalgamation of AI-based
                        dispute system development.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Slider>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
