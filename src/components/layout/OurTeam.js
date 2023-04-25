import React, { useState, useEffect, useRef } from "react";

import mamber02 from "../../assets/img/mamber-2.png";
import mamber03 from "../../assets/img/mamber-3.png";
import mamber04 from "../../assets/img/mamber-4.png";
import mamber11 from "../../assets/img/mamber-11.png";

export default function OurTeam() {
  return (
    <section
      className="space--top section--dark bg-color--dark--2 team team--v1"
      id="team"
    >
      <div className="pb-6 pb-lg-6">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 col-md-8 mx-auto reveal">
              <div className="text-center mb-5 mb-lg-7">
                <h2 className="h3-font mb-2">Our team</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <div className="card card-hover--3d align-items-center border--none text-center pt-5 reveal">
                <img
                  src={mamber11}
                  alt="mamber"
                  className="img-fluid"
                  style={{ objectFit: "fill" }}
                />
                <div className="card-body align-items-center py-4">
                  <h3 className="h6-font font-w--600 color--primary">
                    Elizabeth Guzman
                  </h3>
                  <span className="font-size--14 opacity--80 font-w--500">
                    Founder, CEO
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <div className="card card-hover--3d align-items-center border--none text-center pt-5 reveal">
                <img
                  src={mamber02}
                  alt="mamber"
                  className="img-fluid"
                  style={{ objectFit: "fill" }}
                />
                <div className="card-body align-items-center py-4">
                  <h3 className="h6-font font-w--600 color--primary">
                    Tom Castro
                  </h3>
                  <span className="font-size--14 opacity--80 font-w--500">
                    Founder, CTO
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <div className="card card-hover--3d align-items-center border--none text-center pt-5 reveal">
                <img
                  src={mamber03}
                  alt="mamber"
                  className="img-fluid"
                  style={{ objectFit: "fill" }}
                />
                <div className="card-body align-items-center py-4">
                  <h3 className="h6-font font-w--600 color--primary">
                    Steven Clark
                  </h3>
                  <span className="font-size--14 opacity--80 font-w--500">
                    Backend developer
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <div className="card card-hover--3d align-items-center border--none text-center pt-5 reveal">
                <img
                  src={mamber04}
                  alt="mamber"
                  className="img-fluid"
                  style={{ objectFit: "fill" }}
                />
                <div className="card-body align-items-center py-4">
                  <h3 className="h6-font font-w--600 color--primary">
                    Phoebe Watkins
                  </h3>
                  <span className="font-size--14 opacity--80 font-w--500">
                    CMO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
