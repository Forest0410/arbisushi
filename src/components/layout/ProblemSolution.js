import React, { useState, useEffect, useRef } from "react";

export default function ProblemSolution() {
  return (
    <section className="space--top pb-6 section--dark bg-color--dark--2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center text-lg-left mb-5 mb-lg-6 reveal">
              <h2 className="h3-font">
                Main problem of the <br />
                current market?
              </h2>
            </div>
          </div>
        </div>
        <div className="row pb-6">
          <div className="col-12 col-lg-6 reveal">
            <ul className="pl-2">
              <li className="color--primary mb-3 h5-font">
                <h3 className="h5-font font-w--600 mb-1">
                  Lack of transparency
                </h3>
                <p className="h6-font">
                  Up to 60% of the young generation admits that transparency
                  influences their decision to donate.
                </p>
              </li>
              <li className="color--primary mb-3 h5-font">
                <h3 className="h5-font font-w--600 mb-1">
                  Expensive admin costs
                </h3>
                <p className="h6-font">
                  High marketing upfront costs and fund transfer commissions
                  make smaller charities difficult to maintain.
                </p>
              </li>
              <li className="color--primary mb-3 h5-font">
                <h3 className="h5-font font-w--600">Managing a portfolio</h3>
                <p className="h6-font">
                  Large portfolios are hard to manage because of low liquidity,
                  slippage and high transaction costs.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-6 reveal">
            <div className="bg-color--dark--1 border--around p-3 rounded--10">
              <h3 className="mb-2">Our solution</h3>
              <p className="h6-font">
                We have built smart contracts that release ICO funds to the
                project only following the decision of its token buyers once the
                project meets its milestones.
                <br />
                <br />
                To create a transparent, decentralized infrastructure, where one
                can track the targeted use of funds. Thanks to the W12 protocol,
                any party can create a SpaceMax organization of the type they
                need, set up its roadmap and determine the use of funds. Each
                participant will be able to track and control funds, and assess
                the impact of the contribution.
              </p>
            </div>
          </div>
        </div>
        <hr className="border--bottom" />
      </div>
    </section>
  );
}
