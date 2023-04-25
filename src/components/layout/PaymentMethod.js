import React, { useState, useEffect, useRef } from "react";

import paymentMethod1 from "../../assets/img/payment-mehtod-1.png";
import paymentMethod2 from "../../assets/img/payment-mehtod-2.png";
import paymentMethod3 from "../../assets/img/payment-mehtod-3.png";
import paymentMethod4 from "../../assets/img/payment-mehtod-4.png";
import paymentMethod5 from "../../assets/img/payment-mehtod-5.png";
import paymentMethod6 from "../../assets/img/payment-mehtod-6.png";
import paymentMethod7 from "../../assets/img/payment-mehtod-7.png";

export default function PaymentMethod() {
  return (
    <section
        className="pt-4 pb-5 pb-lg-10 section--dark bg-color--dark--1 border--bottom"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <p>You can purchase Bitbons through services:</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="logo-group">
                <span className="logo-group__image">
                  <img src={paymentMethod1} alt="payment-mehtod-logo" className="img-fluid" style={{ objectFit: "fill" }} />
                </span>
                <span className="logo-group__image">
                  <img src={paymentMethod2} alt="payment-mehtod-logo" className="img-fluid" style={{ objectFit: "fill" }} />
                </span>
                <span className="logo-group__image">
                  <img src={paymentMethod3} alt="payment-mehtod-logo" className="img-fluid" style={{ objectFit: "fill" }} />
                </span>
                <span className="logo-group__image">
                  <img src={paymentMethod4} alt="payment-mehtod-logo" className="img-fluid" style={{ objectFit: "fill" }} />
                </span>
                <span className="logo-group__image">
                  <img src={paymentMethod5} alt="payment-mehtod-logo" className="img-fluid" style={{ objectFit: "fill" }} />
                </span>
                <span className="logo-group__image">
                  <img src={paymentMethod6} alt="payment-mehtod-logo" className="img-fluid" style={{ objectFit: "fill" }} />
                </span>
                <span className="logo-group__image">
                  <img src={paymentMethod7} alt="payment-mehtod-logo" className="img-fluid" style={{ objectFit: "fill" }} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}