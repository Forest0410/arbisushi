import React, { useState, useEffect, useRef } from "react";

import $ from "jquery";

import pdf01 from "../../assets/img/pdf-01.png";
import pdf02 from "../../assets/img/pdf-02.png";
import pdf03 from "../../assets/img/pdf-03.png";
import pdf04 from "../../assets/img/pdf-04.png";

export default function DocFaq() {
  // const fileUrl = "/api/download/whitepaper.pdf";
  const fileUrl = "/files/whitepaper.pdf";

  useEffect(() => {
    function handleAccordion() {
      $(document).ready(function(){
        $(".btn-link").on("click", function(e){
          $(this).parent().siblings().find("button:not(.collapsed)").next().slideToggle(300);
          $(this).toggleClass("collapsed");
          $(this).next().slideToggle(300);
          $(this).parent().siblings().children("button").addClass("collapsed");
          e.preventDefault();
        });
      });
    }
    handleAccordion();
  }, []);

  function openWhitepaper(event) {
    window.open(fileUrl, "_blank", "noreferrer");
  }

  return (
    <section className="space section--dark bg-color--dark--1" id="documents">
      <div className="documents documents--v1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 col-md-8">
              <div className="text-center text-sm-left mb-5 mb-lg-7 reveal">
                <h2 className="h3-font mb-2">Documents</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3 mb-lg-0">
              <div className="card border--none align-items-center text-center pb-2 pt-5 reveal">
                <a href="/">
                  <img src={pdf01} alt="pdf" style={{ objectFit: "fill" }} />
                </a>
                <div className="card-body align-items-center pt-1">
                  <a href="/">
                    <h3 className="card-title h6-font font-w--600 color--white mb-0">
                      White Paper
                    </h3>
                  </a>
                </div>
                <div className="card-download d-flex flex-column align-items-center justify-content-center align-items-center pos-abs-center h-100 w-100 z-index1 p-2 pb-3">
                  <span className="h5-font font-w--700 mb-2">Download</span>
                  <div>
                    <a href="/" className="font-w--600 font-size--15 color--white">
                      <span>EN</span>
                    </a>
                    <a href="/" className="font-w--600 font-size--15 color--white">
                      <span>RU</span>
                    </a>
                    <a href="/" className="font-w--600 font-size--15 color--white">
                      <span>ES</span>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3 mb-lg-0">
              <div className="card border--none align-items-center text-center pb-2 pt-5 reveal">
                <img src={pdf02} alt="pdf" style={{ objectFit: "fill" }} />
                <div className="card-body align-items-center pt-1">
                  <button
                    className="mx-1 btn btn-size--sm btn-bg--cta--3 rounded--full btn-hover--splash btn-hover--3d"
                    onClick={openWhitepaper}
                  >
                    <h3 className="card-title h6-font font-w--600 color--white mb-0">
                      Whitepaper
                    </h3>
                  </button>
                </div>
                {/* <div className="card-download d-flex flex-column align-items-center justify-content-center align-items-center pos-abs-center h-100 w-100 z-index1 p-2 pb-3">
                  <span className="h5-font font-w--700 mb-2">Download</span>
                  <div>
                    <a href="/" className="font-w--600 font-size--15 color--white">
                      <span>EN</span>
                    </a>
                    <a href="/" className="font-w--600 font-size--15 color--white">
                      <span>RU</span>
                    </a>
                    <a href="/" className="font-w--600 font-size--15 color--white">
                      <span>ES</span>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            {/* <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3 mb-lg-0">
              <div className="card border--none align-items-center text-center pb-2 pt-5 reveal">
                <a href="/">
                  <img src={pdf03} alt="pdf" style={{ objectFit: "fill" }} />
                </a>
                <div className="card-body align-items-center pt-1">
                  <a href="/">
                    <h3 className="card-title h6-font font-w--600 color--white mb-0">
                      Presentation
                    </h3>
                  </a>
                </div>
                <div className="card-download d-flex flex-column align-items-center justify-content-center align-items-center pos-abs-center h-100 w-100 z-index1 p-2 pb-3">
                  <span className="h5-font font-w--700 mb-2">Download</span>
                  <div>
                    <a href="/" className="font-w--600 font-size--15 color--white">
                      <span>EN</span>
                    </a>
                    <a href="/" className="font-w--600 font-size--15 color--white">
                      <span>RU</span>
                    </a>
                    <a href="/" className="font-w--600 font-size--15 color--white">
                      <span>ES</span>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3 mb-lg-0">
              <div className="card border--none align-items-center text-center pb-2 pt-5 reveal">
                <a href="/">
                  <img src={pdf04} alt="pdf" style={{ objectFit: "fill" }} />
                </a>
                <div className="card-body align-items-center pt-1">
                  <a href="/">
                    <h3 className="card-title h6-font font-w--600 color--white mb-0">
                      Token Sale Terms
                    </h3>
                  </a>
                </div>
                <div className="card-download d-flex flex-column align-items-center justify-content-center align-items-center pos-abs-center h-100 w-100 z-index1 p-2 pb-3">
                  <span className="h5-font font-w--700 mb-2">Download</span>
                  <div>
                    <a href="/" className="font-w--600 font-size--15 color--white">
                      <span>EN</span>
                    </a>
                    <a href="/" className="font-w--600 font-size--15 color--white">
                      <span>RU</span>
                    </a>
                    <a href="/" className="font-w--600 font-size--15 color--white">
                      <span>ES</span>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="faq faq--v1" id="faq">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="text-center text-sm-left mb-5 mb-lg-7 reveal">
                <h2 className="h3-font mb-2">
                  Frequently <br />
                  asked questions
                </h2>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div
                className="accordion accordion--v1 remove-space--bottom reveal"
                id="accordion1"
              >
                <div className="card mb-1">
                  <button
                    className="btn btn-header btn-link"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    <span className="h6-font text-color--200 text-left font-w--600">
                      What is Cyrpto SpaceMax token?
                    </span>
                    <i className="icon icon-up-arrow"></i>
                  </button>
                  <div
                    id="collapse1"
                    className="collapse show"
                    data-parent="#accordion1"
                  >
                    <div className="card-body pl-3">
                      <p>
                        Our product solves crucial problems of such giant
                        services as Foursquare & Swarm, Groupon, and
                        Tripadvisor. Millenial travelers don’t possess any more
                        countless hours for preparing the trip itinerary
                        (reading Tripadvisor). Business travelers, in
                        particular, complain they are having maximum 2 to 5 free
                        hours during their work trips, which they don’t want to
                        spend on researching what is worth doing around.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <button
                    className="btn btn-header btn-link collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    <span className="h6-font text-color--200 text-left font-w--600">
                      Do we already have an application?
                    </span>
                    <i className="icon icon-up-arrow"></i>
                  </button>
                  <div
                    id="collapse2"
                    className="collapse"
                    data-parent="#accordion1"
                  >
                    <div className="card-body pl-3">
                      <p>
                        Our product solves crucial problems of such giant
                        services as Foursquare & Swarm, Groupon, and
                        Tripadvisor. Millenial travelers don’t possess any more
                        countless hours for preparing the trip itinerary
                        (reading Tripadvisor). Business travelers, in
                        particular, complain they are having maximum 2 to 5 free
                        hours during their work trips, which they don’t want to
                        spend on researching what is worth doing around.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <button
                    className="btn btn-header btn-link collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                    aria-expanded="false"
                    aria-controls="collapse3"
                  >
                    <span className="h6-font text-color--200 text-left font-w--600">
                      Why blockchain?
                    </span>
                    <i className="icon icon-up-arrow"></i>
                  </button>
                  <div
                    id="collapse3"
                    className="collapse"
                    data-parent="#accordion1"
                  >
                    <div className="card-body pl-3">
                      <p>
                        Our product solves crucial problems of such giant
                        services as Foursquare & Swarm, Groupon, and
                        Tripadvisor. Millenial travelers don’t possess any more
                        countless hours for preparing the trip itinerary
                        (reading Tripadvisor). Business travelers, in
                        particular, complain they are having maximum 2 to 5 free
                        hours during their work trips, which they don’t want to
                        spend on researching what is worth doing around.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <button
                    className="btn btn-header btn-link collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                    aria-expanded="false"
                    aria-controls="collapse4"
                  >
                    <span className="h6-font text-color--200 text-left font-w--600">
                      When is the SpaceMax token going to be transferable?
                    </span>
                    <i className="icon icon-up-arrow"></i>
                  </button>
                  <div
                    id="collapse4"
                    className="collapse"
                    data-parent="#accordion1"
                  >
                    <div className="card-body pl-3">
                      <p>
                        Our product solves crucial problems of such giant
                        services as Foursquare & Swarm, Groupon, and
                        Tripadvisor. Millenial travelers don’t possess any more
                        countless hours for preparing the trip itinerary
                        (reading Tripadvisor). Business travelers, in
                        particular, complain they are having maximum 2 to 5 free
                        hours during their work trips, which they don’t want to
                        spend on researching what is worth doing around.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <button
                    className="btn btn-header btn-link collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse5"
                    aria-expanded="false"
                    aria-controls="collapse5"
                  >
                    <span className="h6-font text-color--200 text-left font-w--600">
                      In what currency will the funds be collected?
                    </span>
                    <i className="icon icon-up-arrow"></i>
                  </button>
                  <div
                    id="collapse5"
                    className="collapse"
                    data-parent="#accordion1"
                  >
                    <div className="card-body pl-3">
                      <p>
                        Our product solves crucial problems of such giant
                        services as Foursquare & Swarm, Groupon, and
                        Tripadvisor. Millenial travelers don’t possess any more
                        countless hours for preparing the trip itinerary
                        (reading Tripadvisor). Business travelers, in
                        particular, complain they are having maximum 2 to 5 free
                        hours during their work trips, which they don’t want to
                        spend on researching what is worth doing around.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <button
                    className="btn btn-header btn-link collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse6"
                    aria-expanded="false"
                    aria-controls="collapse6"
                  >
                    <span className="h6-font text-color--200 text-left font-w--600">
                      Where can I store INT token?
                    </span>
                    <i className="icon icon-up-arrow"></i>
                  </button>
                  <div
                    id="collapse6"
                    className="collapse"
                    data-parent="#accordion1"
                  >
                    <div className="card-body pl-3">
                      <p>
                        Our product solves crucial problems of such giant
                        services as Foursquare & Swarm, Groupon, and
                        Tripadvisor. Millenial travelers don’t possess any more
                        countless hours for preparing the trip itinerary
                        (reading Tripadvisor). Business travelers, in
                        particular, complain they are having maximum 2 to 5 free
                        hours during their work trips, which they don’t want to
                        spend on researching what is worth doing around.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
