import React, { useState, useEffect, useRef } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import sphere from "../../assets/img/layout/sphere.svg";

ChartJS.register(ArcElement);
ChartJS.register(Tooltip);
// ChartJS.register(Legend);

export const data = {
  labels: [
    "DAO TREASURY",
    "TEAM + ADVISORS",
    "INVESTORS",
    "INDIVIDUAL WALLETS",
    "DAOs IN ARBITRUM ECOSYSTEM",
  ],
  datasets: [
    {
      label: "",
      data: [42.78, 26.94, 17.53, 11.62, 1.13],
      backgroundColor: [
        "#3260ED",
        "#8CA8FF",
        "#B6BD00",
        "#D65800",
        "#FFB755",
      ],
      borderColor: [
        "#0C1013",
        "#0C1013",
        "#0C1013",
        "#0C1013",
        "#0C1013",
      ],
      borderWidth: 0,
      cutout: "75%"
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 2,
  legend: { 
    display: false, 
    labels: { 
      display: false 
    } 
  },
};

export default function TokenSale() {
  return (
    <section className="space token-saleinfo token-saleinfo--v1 section--dark bg-color--dark--2" id="tokenomics">
      <div
        className="background-holder background--cover background--top opacity--08"
        style={{
          backgroundImage: `url(${sphere.src})`,
          width: "100%",
          height: "100%",
        }}
      >
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 mx-auto reveal">
            <div className="text-center mb-5 mb-lg-7">
              <h2 className="h3-font mb-2">$ARB Distribution</h2>
              <p className="h6-font">
                $ARB is an ERC-20 governance token native to the Arbitrum One
                rollup chain. The initial supply cap is 10 billion. Here is
                the initial token allocation for $ARB:
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 pr-lg-6 mb-4 mb-lg-0">
            <div className="token-saleinfo-dist d-md-flex align-items-md-center reveal">
              <div
                id="pie-chart--v1"
                className="pie-chart--flat position-relative mx-auto mr-md-3 mb-3 mb-md-0"
              >
                <Doughnut data={data} />
                <div className="text-center color--primary d-flex flex-column pos-abs-center">
                  <span className="font-size--14 font-w--600 mb-1">
                    INITIAL SUPPLY CAP
                  </span>
                  <span className="font-w--600 mb-1">10,000,000,000</span>
                  <span className="font-w--600">$ARB</span>
                </div>
              </div>

              <div className="content dist-content">
                <ul className="content-list list-unstyled remove-space--bottom">
                  <li className="text-color--300 font-w--500 d-flex align-items-center justify-content-between mb-1">
                    <div className="d-flex align-items-center">
                      <span
                        className="oval--md mr-1 jsElement"
                        data-bg-color="#3260ED"
                        style={{backgroundColor: "#3260ED"}}
                      ></span>
                      <span className="content-list__name">
                        DAO TREASURY
                      </span>
                    </div>
                    <span className="content-list__value">42.78%</span>
                  </li>
                  <li className="text-color--300 font-w--500 d-flex align-items-center justify-content-between mb-1">
                    <div className="d-flex align-items-center">
                      <span
                        className="oval--md mr-1 jsElement"
                        data-bg-color="#8CA8FF"
                        style={{backgroundColor: "#8CA8FF"}}
                      ></span>
                      <span className="content-list__name">
                        TEAM + ADVISORS
                      </span>
                    </div>
                    <span className="content-list__value">26.94%</span>
                  </li>
                  <li className="text-color--300 font-w--500 d-flex align-items-center justify-content-between mb-1">
                    <div className="d-flex align-items-center">
                      <span
                        className="oval--md mr-1 jsElement"
                        data-bg-color="#B6BD00"
                        style={{backgroundColor: "#B6BD00"}}
                      ></span>
                      <span className="content-list__name">
                        INVESTORS
                      </span>
                    </div>
                    <span className="content-list__value">17.53%</span>
                  </li>
                  <li className="text-color--300 font-w--500 d-flex align-items-center justify-content-between mb-1">
                    <div className="d-flex align-items-center">
                      <span
                        className="oval--md mr-1 jsElement"
                        data-bg-color="#D65800"
                        style={{backgroundColor: "#D65800"}}
                      ></span>
                      <span className="content-list__name">
                        INDIVIDUAL WALLETS
                      </span>
                    </div>
                    <span className="content-list__value">11.62%</span>
                  </li>
                  <li className="text-color--300 font-w--500 d-flex align-items-center justify-content-between mb-1">
                    <div className="d-flex align-items-center">
                      <span
                        className="oval--md mr-1 jsElement"
                        data-bg-color="#FFB755"
                        style={{backgroundColor: "#FFB755"}}
                      ></span>
                      <span className="content-list__name">
                        DAOs IN ARBITRUM ECOSYSTEM
                      </span>
                    </div>
                    <span className="content-list__value">1.13%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
