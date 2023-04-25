import React, { useState, useEffect, useRef } from "react";

import lineFund from "../../assets/img/icon-line-fund.png";
import lineScam from "../../assets/img/icon-line-scam.png";
import lineDecentralized from "../../assets/img/icon-line-decentralized.png";
import lineMore from "../../assets/img/icon-line-more.png";

export default function Features() {
  return (
    <section className="pb-3 pb-lg-10 section--dark bg-color--dark--2">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-md-6 col-lg-5">
            <div className="d-lg-flex mb-4 text-center text-md-left reveal">
              <span className="mb-3 mb-lg-0 mr-md-3 mt-lg-1">
                <img src={lineFund} alt="icon" style={{ objectFit: "fill" }} />
              </span>
              <div>
                <h3 className="h5-font font-w--600 mb-1">
                  Fund administration
                </h3>
                <p>
                  The fund is started in literally several minutes with minimal
                  costs using blockchain-based infrastructure that supports.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <div className="d-lg-flex mb-4 text-center text-md-left reveal">
              <span className="mb-3 mb-lg-0 mr-md-3 mt-lg-1">
                <img src={lineScam} alt="icon" style={{ objectFit: "fill" }} />
              </span>
              <div>
                <h3 className="h5-font font-w--600 mb-1">SCAM detection</h3>
                <p>
                  Large portfolios are hard to manage because of low liquidity,
                  slippage and high transaction costs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <div className="d-lg-flex mb-4 text-center text-md-left reveal">
              <span className="mb-3 mb-lg-0 mr-md-3 mt-lg-1">
                <img src={lineDecentralized} alt="icon" style={{ objectFit: "fill" }} />
              </span>
              <div>
                <h3 className="h5-font font-w--600 mb-1">
                  Decentralized infrastructure
                </h3>
                <p>
                  Large portfolios are hard to manage because of low liquidity,
                  slippage and high transaction costs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <div className="d-lg-flex mb-4 text-center text-md-left reveal">
              <span className="mb-3 mb-lg-0 mr-md-3 mt-lg-1">
                <img src={lineMore} alt="icon" style={{ objectFit: "fill" }} />
              </span>
              <div>
                <h3 className="h5-font font-w--600 mb-1">And much more</h3>
                <p>
                  Large portfolios are hard to manage because of low liquidity,
                  slippage and high transaction costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
