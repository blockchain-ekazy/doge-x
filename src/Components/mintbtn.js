import React, { useState, useEffect } from "react";
import abi from "./abi.json";
import dogexabi from "./dogexabi.json";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import loadingImg from "./Imgs/images/loading.gif";

const REACT_APP_CONTRACT_ADDRESS = "0xbCbF811aDbb1A1A45A57c9A94506d5422A53b236";
const dogex = "0x7447c7eb3a602aEacDa7b7370Cd96085D476d662";
const SELECTEDNETWORK = "1";
const SELECTEDNETWORKNAME = "Ethereum Mainnet";
const nftquantity = 10000;

function Mintbtn() {
  const [errormsg, setErrorMsg] = useState(false);
  const [showbtn, setshowbtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userDoges, setUserDoges] = useState({
    doges: "",
    title: "",
  });

  useEffect(async () => {
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      const web3 = window.web3;
      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);

        if (nftquantity - (await ct.methods.totalSupply().call()) == 0) {
          setErrorMsg("All NFTs sold out!");
        }
      } else {
        setErrorMsg(
          'Select "' + SELECTEDNETWORKNAME + '" network in your wallet!'
        );
      }
    } else {
      setErrorMsg("Crypto Wallet not found!");
    }
    if (window.ethereum) {
      handleEthereum();
    } else {
      window.addEventListener("ethereum#initialized", handleEthereum, {
        once: true,
      });
      setTimeout(handleEthereum, 10000);
    }

    function handleEthereum() {
      const { ethereum } = window;
      if (ethereum) {
        console.log("Ethereum successfully detected!");
      } else {
        setErrorMsg("Please install MetaMask!");
      }
    }
  }, []);

  async function loadWeb3() {
    setLoading(true);
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      // Meta Mask Connected Account Address
      let metaMaskAccount = await web3.eth.getAccounts();
      metaMaskAccount = metaMaskAccount[0];

      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        // // creating contract instance
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);

        const dogect = new web3.eth.Contract(dogexabi, dogex);

        setUserDoges({
          doges: "",
          title: "",
        });

        let arr = await dogect.methods.walletOfOwner(metaMaskAccount).call();

        let arrb = [];
        for (let i = 0; i < arr.length; i++) {
          if ((await ct.methods.isUsed(arr[i]).call()) == 0) {
            arrb.push(
              <div className="col-md-2">
                <label>
                  <input type="checkbox" value={arr[i]} className="pupid" />
                  <a>
                    <img
                      src={"/imgs/DogeX-" + arr[i] + ".png"}
                      className="w-100 rounded"
                    />
                    {arr[i]}
                  </a>
                </label>
              </div>
            );
          }
        }
        if (arr.length > 0) {
          setUserDoges({
            doges: arrb,
            title: "Select the Pups to Claim",
          });
          setshowbtn(true);
        } else {
          alert("No Unclaimed Dogex Found");
        }
        setLoading(false);
      } else {
        setErrorMsg(
          'Select "' +
            SELECTEDNETWORKNAME +
            '" network in your wallet to buy the nft'
        );
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      {
        setErrorMsg(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    }
    setLoading(false);
  }

  const claim = async (event) => {
    setLoading(true);
    let ids = document.getElementsByClassName("pupid");

    let arr = [];
    for (let i = 0; i < ids.length; i++)
      if (ids[i].checked) arr.push(ids[i].value);

    if (arr.length == 0) {
      alert("Select atleast One DogeX# to claim!");
      setLoading(false);
      return;
    }

    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    const web3 = window.web3;

    let metaMaskAccount = await web3.eth.getAccounts();
    metaMaskAccount = metaMaskAccount[0];

    const contractaddress = REACT_APP_CONTRACT_ADDRESS;
    const ct = new web3.eth.Contract(abi, contractaddress);
    try {
      await ct.methods.claim(arr).send({ from: metaMaskAccount });
    } catch (err) {
      alert(err.message);
      setLoading(false);
    }
  };
  const checkDogex = async (event) => {
    window.web3 = new Web3(window.ethereum);
    // await window.ethereum.enable();
    const web3 = window.web3;
    const contractaddress = REACT_APP_CONTRACT_ADDRESS;
    const ct = new web3.eth.Contract(abi, contractaddress);
    event.preventDefault();
    let did = document.getElementById("dogexId").value;

    alert(
      (await ct.methods.isUsed(did).call()) == 1
        ? "Dogex#" + did + " is Already Claimed"
        : "Dogex#" + did + " is NOT Claimed"
    );
  };

  return (
    <>
      <div className="BtnDiv">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-3">
            <a
              href="https://snapshot.org/#/dogexnft.eth"
              target="_blank"
              className="my-3 d-block connectbtn text-white"
            >
              Voting DAO
            </a>
            <a
              href="https://rarity.tools/officialdogex"
              className="my-3 d-block connectbtn text-white"
              target="_blank"
            >
              Rarity Ranks
            </a>
          </div>
          {!errormsg ? (
            <div className="col-sm-6">
              <button
                type="button"
                className="connectbtn text-white d-block text-center"
                onClick={() => loadWeb3()}
              >
                Claim your DogeX Jr Now!{" "}
                <i
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Official DogeX minted out completely in October 2021, please connect the wallet your Official DogeX are in and mint your free pup! The DogeX Jr do not have a cost, but they do have a ETH Gas fee that's unavoidable."
                  className="fa fa-info info-icon"
                ></i>
              </button>
              <form onSubmit={checkDogex}>
                <input
                  className="form-control w-50 p-2 d-inline mt-3"
                  placeholder="DOGEX ID"
                  id="dogexId"
                />
                <button className="connectbtn w-50 text-white">Check</button>
              </form>
            </div>
          ) : (
            <div className="col-sm-6">
              <h5 className="mt-2 supplytext text-center">
                <b>{errormsg}</b>
              </h5>
            </div>
          )}
          <div className="col-md-3">
            <a
              href="https://opensea.io/collection/officialdogex"
              className="mt-3 d-block connectbtn text-white"
              target="_blank"
            >
              DogeX Opensea
            </a>
            <a
              href="https://opensea.io/collection/dogexjr"
              className="my-3 d-block connectbtn text-white"
              target="_blank"
            >
              DogeX Jr Opensea
            </a>
          </div>
          <div className="col-md-3">
            <a href="/twitter/" className="d-block text-white" target="_blank">
              <i className="fab fa-twitter mr-1"></i> Twitter
            </a>
          </div>
          <div className="col-md-3">
            <a href="https://discord.gg/QKYpD7G6Fg" className="text-white">
              <i className="fab fa-discord mr-1"></i> Join our Official Discord
            </a>
          </div>
          <div className="col-md-3">
            <a
              href="https://www.youtube.com/channel/UCf1f-gcijuc_KLyLVlXZJyA/featured"
              target="_blank"
              className=" d-block text-white"
            >
              <i className="fab fa-youtube mr-1"></i> Youtube
            </a>
          </div>
        </div>
      </div>
      {showbtn ? (
        <div className="row mt-4 mb-5 userdoges p-4">
          <div className="col-12">
            <h4 className="mb-5">{userDoges.title}</h4>
          </div>
          {userDoges.doges}
          <div className="col-12"></div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <button className="connectbtn d-inline text-white" onClick={claim}>
              Claim Selected Pups
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {loading ? (
        <div className="loading">
          <img src={loadingImg} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Mintbtn;
