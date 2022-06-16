import React from "react";
import "./Home.css";
import LogoA from "./Imgs/images/logo.png";


import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

export default function Twitter() {
  return (
    <div>
      <div className="container-fluid SaraTwi">
        <div className="container">
          <nav class="navbar navbar-expand py-5 navbar-light ">
            <a href="/">

            <img className="w-25" src={LogoA}></img>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form class="form-inline my-2 my-lg-0 ml-auto">
                {/* <button className="btn ConnBtn my-3">Connect</button> */}

                {/* <a href="https://twitter.com/DogeXNFT"> */}
                <div className="">
                  {/* <TwitterShareButton
                    url={"https://twitter.com/DogeXNFT"}
                    options={{
                      text: "#reactjs is awesome",
                      via: "DogeXNFT",
                    }}
                  />{" "} */}
                </div>
                {/* </a> */}
                <div className="">
                  <TwitterFollowButton screenName={"DogeXNFT"} />
                </div>
              </form>
            </div>
          </nav>
          <div className="p-5">

          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="DogeXNFT"
            options={{ height: 800 }}
            />
            </div>
        </div>
      </div>
    </div>
  );
}
