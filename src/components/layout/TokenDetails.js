import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

export default function TokenDetails() {
  const presaleAddress = "0x652890E8e90Ee6D1C335C74b533B0E04545A05BD";
  const search = useLocation().search;
  const navigate = useNavigate();
  const refcode = new URLSearchParams(search).get("ref");
  const [Inwallet, setInwallet] = useState("");
  const [invite, setInvite] = useState(null);
  const [generatedLink, setGenLink] = useState("");
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [rewards, setrewards] = useState(0);
  const [balance, setBanalce] = useState(0);
  const [withdrawMsg, setWithdrawmsg] = useState("");
  const [histories, setHistories] = useState([]);
  const [copyBtn, setcopyBtn] = useState("Copy");
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  useEffect(() => {
    const wallet = localStorage.getItem("wallet");
    setInwallet(wallet);
    if (wallet) {
      axios.post("https://raresea-be.vercel.app/api/invite/get", { wallet: wallet }).then((res) => {
        if (res.data.invite) {
          setInvite(res.data.invite);
          setTotal(res.data.invite.total);
          setCount(res.data.invite.count);
          setGenLink(res.data.invite.code);
          setBanalce(res.data.invite.balance);
          setrewards(res.data.invite.rewards);
        }
        if (res.data.histories) {
          setHistories(res.data.histories);
        }
      });
    }
  }, []);

  const handleclaim = () => {    
    if (!Inwallet || Inwallet.length !== 42) {
      setShowErrorMsg(true);
      return;
    }
    localStorage.setItem("wallet", Inwallet);
    axios.post("https://raresea-be.vercel.app/api/invite/count", { wallet: Inwallet }).then((res) => {
      const link =
        Inwallet.substring(5, 10).toUpperCase() + res.data.count.toString();
      axios
        .post("https://raresea-be.vercel.app/api/invite/add", {
          address: Inwallet,
          link: link,
          refcode: refcode,
        })
        .then((res) => {
          setInvite(res.data.invite);
          setGenLink(res.data.invite.code);
          setTotal(res.data.invite.total);
          setCount(res.data.invite.count);
          setBanalce(res.data.invite.balance);
          setrewards(res.data.invite.rewards);
        });
    });
  };

  const handleSocial = async (social) => {
    if (!Inwallet || Inwallet.length !== 42) {
      setShowErrorMsg(true);
      return;
    }
    localStorage.setItem("wallet", Inwallet);
    if (invite == null) {
      alert("Can't find your wallet now. Please check and try again.");
      return;
    }
    if (invite[social] == true) {
      alert("You already claimed token.");
      return;
    }
    await axios
      .post("https://raresea-be.vercel.app/api/invite/social", { wallet: Inwallet, social: social })
      .then((res) => {
        setInvite(res.data.invite);
        setGenLink(res.data.invite.code);
        setTotal(res.data.invite.total);
        setCount(res.data.invite.count);
        setBanalce(res.data.invite.balance);
        setrewards(res.data.invite.rewards);
      });
    if (social == "twitter") {
      window.open("https://twitter.com", "_blank");
    } else if (social == "retweet") {
      window.open("https://twitter.com", "_blank");
    } else {
      window.open("https://twitter.com", "_blank");
    }
  };

  const handleWithdraw = async () => {
    const wallet = localStorage.getItem("wallet");
    if (wallet) {
      const res = await axios.post("https://raresea-be.vercel.app/api/invite/get", { wallet: wallet });
      if (res.data.status == false) {
        alert(res.data.status.msg);
      } else {
        let inv = res.data.invite;
        if (inv.balance == 0) {
          alert("Mini withdraw 5000 ARBIDOGE. Keep referring.");
          return;
        }
        if (inv.balance < 5000 && histories.length == 0) {
          alert("Mini withdraw 5000 ARBIDOGE. Keep referring.");
          return;
        } else {
          const res_withdraw = await axios.post("https://raresea-be.vercel.app/api/invite/withdraw", {
            wallet,
          });
          if (res_withdraw.data.status == false) alert(res_withdraw.data.msg);
          else {
            setHistories(res_withdraw.data.histories);
            setInvite(res_withdraw.data.invite);
            setTotal(res_withdraw.data.invite.total);
            setCount(res_withdraw.data.invite.count);
            setBanalce(res_withdraw.data.invite.balance);
            setrewards(res_withdraw.data.invite.rewards);
          }
        }
      }
    } else if (!wallet) {
      setWithdrawmsg("Can't find your wallet address. Please try again later.");
    }
  };

  const copyPresaleAddress = () => {
    navigator.clipboard.writeText(presaleAddress);
    window.alert("Copied to the clipboard");
  };

  const setPresaleAddress = (e) => {
    setInwallet(e.target.value);
  };

  return (
    <section
      className="space section--dark bg-color--dark--1 token-sale-details token-sale-details--v1"
      id="presale"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 mx-auto reveal">
            <div className="text-center mb-5 mb-lg-7 reveal">
              <h2 className="h3-font mb-2">Pre-sale is live</h2>
              <div className="card bg-color--black-opacity--15 border--none p-2 w-100 mb-2">
                <span className="body-font font-w--500 mb-1">
                  Pre-sale Address
                </span>
                <span className="color--primary h6-font font-w--700">
                  {presaleAddress}
                </span>
                <div className="mt-2">
                  <button
                    text={presaleAddress}
                    className="copy btn btn-size--sm btn-bg--primary rounded--full btn-hover--splash btn-hover--3d"
                    onClick={copyPresaleAddress}
                  >
                    <span className="btn__text">Copy Address</span>
                  </button>
                </div>
              </div>
              <p>
                ● Pre-sale price tier 1 (for purchase amount &lt; 1 ETH): 1 ETH
                = 50,000 $ARB.
              </p>
              <p>
                ● Pre-sale price tier 2 (for purchase amount &ge; 1 ETH): 1 ETH
                = 80,000 $ARB.
              </p>
              <p>
                The minimum purchase is 0.1 ETH, and the maximum purchase is 10
                ETH.
              </p>
              <p>
                Send ETH from your wallet to the pre-sale address above. Our
                system will send $ARB tokens to your wallet instantly.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-lg-4 mb-3 reveal">
            <div className="card bg-color--black-opacity--15 border--none p-2 p-md-4 w-100">
              <span className="body-font font-w--500 mb-1">Token Name</span>
              <span className="color--primary h4-font font-w--700">ARB</span>
            </div>
          </div>
          <div className="col-6 col-lg-4 mb-3 reveal">
            <div className="card bg-color--black-opacity--15 border--none p-2 p-md-4 w-100 h-100">
              <span className="body-font font-w--500 mb-1">Token Symbol</span>
              <span className="color--primary h4-font font-w--700">ARB</span>
            </div>
          </div>
          <div className="col-6 col-lg-4 mb-3 reveal">
            <div className="card bg-color--black-opacity--15 border--none p-2 p-md-4 w-100 h-100">
              <span className="body-font font-w--500 mb-1">Decimals</span>
              <span className="color--primary h4-font font-w--700">18</span>
            </div>
          </div>
          <div className="col-6 col-lg-4 mb-3 reveal">
            <div className="card bg-color--black-opacity--15 border--none p-2 p-md-4 w-100 h-100">
              <span className="body-font font-w--500 mb-1">
                Contract Address
              </span>
              <span className="color--primary font-w--700">
                0x9aC4d84af3e457baDBfaa87b8101Ae4E763670C3
                <a
                  href="https://etherscan.io/token/0x9aC4d84af3e457baDBfaa87b8101Ae4E763670C3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-external-link-alt text-secondary"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="col-6 col-lg-4 mb-3 reveal">
            <div className="card bg-color--black-opacity--15 border--none p-2 p-md-4 w-100 h-100">
              <span className="body-font font-w--500 mb-1">Blockchain</span>
              <span className="color--primary h4-font font-w--700">
                Ethereum ERC-20
              </span>
            </div>
          </div>
          <div className="col-6 col-lg-4 mb-3 reveal">
            <div className="card bg-color--black-opacity--15 border--none p-2 p-md-4 w-100 h-100">
              <span className="body-font font-w--500 mb-1">Total Supply</span>
              <span className="color--primary h4-font font-w--700">
                10,000,000,000
              </span>
            </div>
          </div>
        </div>
        <div
          className="bonuses bonuses--v1 bg-color--black-opacity--10 rounded--05 mt-1 mt-md-2"
          id="airdrop"
        >
          <div className="row">
            <div className="col-12">
              <div className="border--bottom pt-4 pb-2 text-center">
                <h4 className="font-size--30 font-w--600">$ARB Airdrop</h4>
              </div>
            </div>
          </div>
          {generatedLink.length === 0 ? (
            <div className="row py-6 justify-content-center" id="airdrop-block">
              <div className="col-12 col-md-10 mx-auto flex-column align-items-center flex-sm-row align-items-sm-end justify-content-center justify-content-md-between text-center">
                <div className="newsletter-form form--v1 d-lg-flex align-items-lg-center justify-content-lg-between">
                  <div id="airdrop-form" className="form" data-lpignore="true">
                    <input name="ref" type="hidden" value="x2HX" />
                    <div className="input-group input-group--rounded d-flex">
                      <input
                        id="inpPresaleAddress"
                        name="address"
                        type="text"
                        className="form-control"
                        placeholder="Enter your ETH address"
                        style={{ color: "#6c757d" }}
                        onChange={setPresaleAddress}
                      />
                      <button
                        className="btn btn-bg--primary rounded--full btn-hover--splash"
                        type="button"
                        onClick={handleclaim}
                      >
                        <span className="btn__text">Claim</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row py-6 justify-content-center" id="airdrop-block">
              <div
                className="mb-5 mb-lg-7 text-center text-md-left reveal text-break"
                style={{ width: "80%" }}
              >
                <p className="h6-font">
                  <span className="font-w--600 mr-3">
                    <b>Refer Link:</b>
                  </span>
                  <span
                    id="referlink"
                    className="mr-3"
                    data-text="https://raresea.live/ "
                    data-bs-original-title=""
                    title=""
                    aria-describedby="tooltip709244"
                  >
                    {window.location.protocol +
                      "//" +
                      window.location.host +
                      window.location.pathname}
                    ?ref={generatedLink}
                  </span>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setcopyBtn("Copied");
                      navigator.clipboard.writeText(
                        window.location.protocol +
                          "//" +
                          window.location.host +
                          window.location.pathname +
                          "?ref=" +
                          generatedLink
                      );
                    }}
                  >
                    <i className="fa fa-copy ms-2"></i> {copyBtn}
                  </a>
                </p>
                <p className="h6-font mt-1">
                  Copy and share your refer link, you and the invitee will be
                  rewarded 1000 ARBIDOGE at the same time, each person can invite up
                  to 50 people, and the reward can be up to 50000 ARBIDOGE tokens.
                </p>
                <div className="row mt-4 text-center justify-content-between">
                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 pt-1 h6-font">
                    <p>
                      <span>{balance}</span> ARBIDOGE
                    </p>
                    <p>Balance</p>
                  </div>
                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 pt-1 h6-font">
                    <p>
                      <span>{rewards}</span> ARBIDOGE
                    </p>
                    <p>Rewards</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12">
                    <hr style={{borderTopColor: "white"}}></hr>
                  </div>
                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 pt-1 h6-font">
                    <p>
                      <span>{total}</span>
                    </p>
                    <p>Referred</p>
                  </div>
                  {isMobile == false && (
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 justify-content-center pt-1">
                      <button
                        id="withdraw"
                        data-address="0xb04712c148aa46e19e5d64664da6168f71f5cfd5"
                        className="btn btn-size--sm"
                        style={{ backgroundColor: "#8364E2", color: "white" }}
                        onClick={handleWithdraw}
                      >
                        Withdraw
                      </button>
                    </div>
                  )}
                </div>
                {isMobile && (
                  <div className="row mt-4 text-center justify-content-between">
                    <div className="col-12 pt-1">
                      <div className="row justify-content-center">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                          <button
                            id="withdraw"
                            data-address="0xb04712c148aa46e19e5d64664da6168f71f5cfd5"
                            className="btn btn-size--sm"
                            style={{
                              backgroundColor: "#8364E2",
                              color: "white",
                            }}
                            onClick={handleWithdraw}
                          >
                            Withdraw
                          </button>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                          <a
                            id="telegram"
                            className="btn btn-size--sm"
                            style={{
                              backgroundColor: "#8364E2",
                              color: "white"
                            }}
                            href="https://github.com"
                            target="_blank"
                          >
                            Telegram
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="row mt-5 justify-content-between">
                  <div className="col-12">
                    <div className="row justify-content-between socialArray">
                      <div className="col-8">
                        <p className="h6-font">
                          - Follow our Twitter Page (+500 ARBIDOGE)
                        </p>
                      </div>
                      <div className="col-4" style={{ textAlign: "right" }}>
                        <button
                          id="withdraw"
                          data-address="0xb04712c148aa46e19e5d64664da6168f71f5cfd5"
                          className="btn btn-size--sm"
                          style={{
                            backgroundColor: "#8364E2",
                            color: "white",
                          }}
                          disabled={invite == null ? false : invite.twitter}
                          onClick={() => handleSocial("twitter")}
                        >
                          Twitter
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-2">
                    <div className="row justify-content-between socialArray">
                      <div className="col-8">
                        <p className="h6-font">
                          - Retweet the Pinned + tag 3 friends (+500 ARBIDOGE)
                        </p>
                      </div>
                      <div className="col-4" style={{ textAlign: "right" }}>
                        <button
                          id="withdraw"
                          data-address="0xb04712c148aa46e19e5d64664da6168f71f5cfd5"
                          className="btn btn-size--sm"
                          style={{
                            backgroundColor: "#8364E2",
                            color: "white",
                          }}
                          disabled={invite == null ? false : invite.retweet}
                          onClick={() => handleSocial("retweet")}
                        >
                          Retweet
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-2">
                    <div className="row justify-content-between socialArray">
                      <div className="col-8">
                        <p className="h6-font">- Join pur Discord(+500 ARBIDOGE)</p>
                      </div>
                      <div className="col-4" style={{ textAlign: "right" }}>
                        <button
                          id="withdraw"
                          data-address="0xb04712c148aa46e19e5d64664da6168f71f5cfd5"
                          className="btn btn-size--sm"
                          style={{
                            backgroundColor: "#8364E2",
                            color: "white",
                          }}
                          onClick={() => handleSocial("discord")}
                          disabled={invite == null ? false : invite.discord}
                        >
                          Discord
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* {histories.length > 0 && (
                <div className="row mt-5 text-center justify-content-between">
                  <table>
                    <thead>
                      <tr>
                        <td style={{ fontSize: 16, fontWeight: "bold" }}>
                          Time
                        </td>
                        <td style={{ fontSize: 16, fontWeight: "bold" }}>
                          Amount
                        </td>
                        <td style={{ fontSize: 16, fontWeight: "bold" }}>
                          Status
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {histories.map((history, index) => (
                        <tr key={index}>
                          <td> {history.time} </td>
                          <td> {history.rewarded} </td>
                          <td> {history.status} </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )} */}
                {/* <p
                style={{
                  fontSize: "1.3rem",
                  color: "red",
                  marginTop: "30px",
                }}
              >
                {withdrawMsg}
              </p> */}
              </div>
            </div>
          )}
        </div>
        <Modal
          size="md"
          show={showErrorMsg}
          onHide={() => setShowErrorMsg(false)}
          aria-labelledby="example-modal-sizes-title-sm"
          dialogClassName="errormsg-dialog"
        >
          <Modal.Body style={{ height: 100 }}>
            <p>
              The wallet address is incorrect.<br></br> Please check and try
              again.
            </p>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
}
