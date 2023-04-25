import React, { useState, useEffect, useRef } from "react";

import iconDecentralized from "../../assets/img/icon-decentralized.svg";
import iconP2p from "../../assets/img/icon-p2p.svg";
import iconWallet from "../../assets/img/icon-wallet.svg";
import iconLedger from "../../assets/img/icon-ledger.svg";

export default function Benefits() {
  return (
    <section className="space section--dark bg-color--dark--2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-9 mx-auto mx-md-0">
            <div className="mb-5 mb-lg-7 text-center text-md-left reveal">
              <h2 className="h3-font mb-2">How to claim $ARB?</h2>
              <p className="h6-font">
                $ARB is an ERC-20 governance token native to the Arbitrum One
                rollup chain. The total supply of $ARB is 10 billion, with an
                initial allocation of 1.162 billion to Arbitrum platform users.
                $ARB tokens can now be obtained through participating in the
                airdrop and presale. After the airdrop and presale, $ARB will be
                listed on top-tier exchanges such as Binance, Okex, Upbit, and
                Coinbase.
              </p>
            </div>
          </div>
        </div>
        <div className="position-relative remove-space--bottom">
          <div className="vertical-border d-flex pos-abs-center h-100 w-100">
            <span className="column-border"></span>
          </div>
          <div className="row horizontal-border justify-content-between mb-lg-5 pb-lg-5 reveal">
            <div className="col-12 col-md-6">
              <div className="d-lg-flex mb-4 mb-lg-0 text-center text-md-left">
                <span className="mb-3 mb-lg-0 mr-md-3">
                  <img
                    src={iconDecentralized}
                    alt="icon"
                    style={{ objectFit: "fill" }}
                  />
                </span>
                <div>
                  <h3 className="h5-font font-w--600 text-color--200 mb-2">
                    Airdrop Rules
                  </h3>
                  <p>
                    ● Send an ETH wallet address to participate in airdrop, you
                    can get 100 $ARB tokens.
                  </p>
                  <p>
                    ● Copy and share your referral link with your friends, and
                    you will receive a reward of 100 $ARB tokens for each
                    referral. You can invite up to 50 people, and the reward can
                    be up to 5000 $ARB Tokens.
                  </p>
                  <p>
                    ● The $ARB airdrop will end on April 1. After the airdrop
                    ends, $ARB tokens will be automatically distributed to your
                    submitted ETH wallet address. This airdrop is completely
                    free of charge.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-lg-flex mb-4 mb-lg-0 text-center text-md-left">
                <span className="mb-3 mb-lg-0 mr-md-3">
                  <img
                    src={iconLedger}
                    alt="icon"
                    style={{ objectFit: "fill" }}
                  />
                </span>
                <div>
                  <h3 className="h5-font font-w--600 text-color--200 mb-2">
                    Pre-sale Rules
                  </h3>
                  <p>
                    ● Pre-sale price tier 1 (for purchase amount &lt; 1 ETH): 1
                    ETH = 50,000 $ARB. Pre-sale price tier 2 (for purchase
                    amount &ge; 1 ETH): 1 ETH = 80,000 $ARB. The minimum
                    purchase is 0.1 ETH, and the maximum purchase is 10 ETH.
                  </p>
                  <p>
                    ● Send ETH from your wallet to the pre-sale address. Our
                    system will automatically send $ARB tokens to your wallet
                    instantly. You can send ETH any amount.
                  </p>
                  <p>
                    ● The distribution of $ARB tokens will be based on ETH time
                    arrived. First come, first served. If the pre-sale is sold
                    out and you failed to purchase, a refund will be
                    automatically issued to your wallet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
