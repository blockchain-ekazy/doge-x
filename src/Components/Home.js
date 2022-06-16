import React, { useState, useEffect } from "react";
import "./Home.css";

import TopImage from "./Imgs/images/nftdog.png";
import TopImage2 from "./Imgs/images/scene-1.png";

import M from "./Imgs/images/M.png";
import S from "./Imgs/images/S.png";

import TD from "./Imgs/images/TD.png";
import CHRO from "./Imgs/images/CHRO.png";

import RD from "./Imgs/images/RD.png";
import RDImg from "./Imgs/images/RDimg.png";

import NotAble from "./Imgs/images/NotAble.png";
import Characters from "./Imgs/images/Characters.png";

import LogoA from "./Imgs/images/LogoA.png";
import Logo from "./Imgs/images/logo.png";
import discord from "./Imgs/images/discord.png";
import twitter from "./Imgs/images/twitter.png";
import Mintbtn from "./mintbtn";

import t251 from "./Imgs/images/team/251.png";
import t715 from "./Imgs/images/team/715.png";
import t858 from "./Imgs/images/team/858.png";
import t2434 from "./Imgs/images/team/2434.png";
import t3847 from "./Imgs/images/team/3847.png";
import t4034 from "./Imgs/images/team/4034.png";
import t4271 from "./Imgs/images/team/4271.png";
import t5061 from "./Imgs/images/team/5061.png";
import t8963 from "./Imgs/images/team/8963.png";
import t9307 from "./Imgs/images/team/9307.png";

export default function Home() {
  const [Read, setRead] = useState("Read More");
  const [roadmap, setRoadmap] = useState({ title: "hell" });

  useEffect(() => {
    fetch("roadmap.json")
      .then((res) => res.json())
      .then((data) => {
        setRoadmap(data);
      });
  }, []);

  return (
    <div className=" Sara">
      <nav class="navbar bg-blue navbar-expand navbar-light ">
        <img className="w-25" src={LogoA}></img>
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
          <form class="form-inline my-2 my-lg-0 ml-auto pr-5">
            {/* <a className="text-white" href="/twitter">
              Twitter
            </a> */}
            {/* <a href="https://discord.com/invite/QKYpD7G6Fg">
              <img
                className="  mx-3"
                style={{ width: "39px" }}
                src={discord}
              ></img>
            </a> */}
          </form>
        </div>
      </nav>
      <div className="container-fluid DivA">
        <div className="container text-center text-white">
          <img
            className="w-25 d-block mx-auto py-5 TopImg"
            src={TopImage}
          ></img>
          {/* <h4>You can mint up to 20 DogeX’s at once.</h4> */}
          {/* <button className="btn ConnBtn my-3">Connect</button> */}
          <Mintbtn />
        </div>
        <img className="w-100 " src={TopImage2}></img>
      </div>

      <div className="container-fluid DivB pb-1">
        <div className="container">
          <div className="text-center text-white TextB">
            <img className="pt-5 d-block mx-auto" src={M}></img>
            <br />
            <img className="pb-5 d-block mx-auto" src={S}></img>
            <p>
              Dogecoin is on its way to one dollar! Now DogeX has arrived to
              conquer the NFT space for Dogecoin. DogeX brings the Doge legend
              to life in the form of ten thousand collectible characters on a
              mission to mars. For the first time, an NFT series will showcase
              five sets of characters, each progressively rarer than the last:
              Earth Doges, Moon Doges, Journey Doges, Mars Doges, and Asteroid
              Doges. Did we forget to mention an additional rarer than rare ten
              including Elon Doge, Doge Cuban, and Billy Doge? <br />
            </p>
            <p className="py-4">
              Join our plucky canine space rovers as they overcome impossible
              odds to save earth and found a new civilization based on the
              principles of Dogecoin. DogeX pays homage to the most important
              and well known Dogecoin figures and the aspirations they have for
              Dogecoin.
            </p>
            <br />
            <p>
              DogeX is presented by Matt Wallace and his Final Stand community
              to celebrate the global rise of Dogecoin and doing good every day.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid DivC py-5">
        <div className="container">
          <div className="text-center text-white TextB">
            <img className=" pt-5 d-block mx-auto" src={TD}></img>
            <br />
            <img className=" pb-5 d-block mx-auto" src={CHRO}></img>

            <p className="text-white fontpop" style={{ fontSize: "17px" }}>
              Doge earth: For millennia doge earth had existed in idyllic
              tranquillity. One day at the Doge Observatory the long distance
              telescope picked up a distant asteroid beyond Mars on a collision
              course for earth! Things had been awesome for so long the doges
              had had no need to innovate technologically. Uh-oh! No one had
              discovered blockchain technology. Billy Doge had not made
              Dogecoin. If there’s one thing required to get a problem solved
              quickly, it’s a dynamic financial protocol. Fortunately, out of
              the confusion, a singular figure emerged: Elon Doge. <br />
              <p>
                <a
                  class="btn btn-primary mt-3"
                  data-toggle="collapse"
                  href="#collapseExample13"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample13"
                  // onClick={ReadBtn}
                >
                  {Read}
                </a>
              </p>
              <div class="collapse p-0 m-0" id="collapseExample13">
                <div class=" card-body p-0 m-0">
                  In a fateful epiphany, he conceived of a plan to deliver the
                  doges from their predicament. He would bring to pass what
                  Dogenstein has theorized was always possible. Elon Doge would
                  make a rocket so grand it could transport 5000 doges TO THE
                  MOON and beyond to a distant red light in the sky – Mars. He
                  called it DogeX. From the forward position of the Martian
                  colony, the doges would intercept the asteroid. The plan
                  seemed perfect. Yet Elon Doge could not shake the sneaking
                  feeling something was missing. What would fortify the Martian
                  colony against the mistakes of the past? Elon Doge turned to
                  his oldest confidant, Billy Doge. “Decentralization. It’s the
                  key to everything”, he declared.
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid Div4 py-5">
        <div className="">
          <div>
            <img className="pt-5 d-block mx-auto" src={NotAble}></img>
            <br />
            <img className="pb-5 d-block mx-auto" src={Characters}></img>
          </div>

          <div className=" Characters">
            <div className="row py-5">
              <div className="col-1"></div>
              <div className="col-md-2 text-center text-white">
                <a
                  href="https://opensea.io/assets/0x7447c7eb3a602aeacda7b7370cd96085d476d662/251"
                  target="_blank"
                  className="text-white"
                >
                  <img className="w-100 rounded" src={t251}></img>
                  <h5 className="py-3"> Dogetoshi </h5>
                </a>
                <div class="collapse p-0 m-0" id="collapseExample1">
                  <div class=" card-body p-0 m-0">
                    Esoteric technologist whose real name remains unknown.
                    Considered quite mad by Elon Doge. Billy Doge reportedly
                    read his writings, which indirectly inspired him to create
                    dogecoin on the thoroughly scientific plane he and Elon Doge
                    preferred.
                  </div>
                </div>
                <a
                  class="btn RDbtn mt-2"
                  data-toggle="collapse"
                  href="#collapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample1"
                  // onClick={ReadBtn}
                >
                  {Read}
                </a>
              </div>

              <div className="col-md-2 text-center text-white">
                <a
                  href="https://opensea.io/assets/0x7447c7eb3a602aeacda7b7370cd96085d476d662/4271"
                  target="_blank"
                  className="text-white"
                >
                  <img className="w-100 rounded" src={t4271}></img>
                  <h5 className="py-3"> DogeCuban </h5>
                </a>
                <div class="collapse p-0 m-0" id="collapseExample2">
                  <div class=" card-body p-0 m-0">
                    Once on Mars, Billy Doge and Elon needed a forceful
                    personality to implement Dogecoin and make it accessible
                    everywhere. Doge Cuban and his ‘rough riders’ would scour
                    the furthest reaches of Mars in small shuttles to set up
                    relay stations for 7G internet that allowed instant
                    confirmation and access to the Dogecoin blockchain anywhere
                    on the red planet. Occasionally their work was attacked by
                    QTN acolytes who considered non-alchemical technology
                    heretical.
                  </div>
                </div>
                <a
                  class="btn RDbtn mt-2"
                  data-toggle="collapse"
                  href="#collapseExample2"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample2"
                  // onClick={ReadBtn}
                >
                  {Read}
                </a>
              </div>

              <div className="col-md-2 text-center text-white">
                <a
                  href="https://opensea.io/assets/0x7447c7eb3a602aeacda7b7370cd96085d476d662/4034"
                  target="_blank"
                  className="text-white"
                >
                  <img className="w-100 rounded" src={t4034}></img>
                  <h5 className="py-3"> BillyDoge </h5>
                </a>
                <div class="collapse p-0 m-0" id="collapseExample3">
                  <div class=" card-body p-0 m-0">
                    Billy Doge is the closest confidant of Elon Doge. As
                    childhood friends, they taught themselves the sciences from
                    old textbooks left to their families by a distant relative
                    called Dogenstein. When Elon Doge got too carried away with
                    his own ambitions, Billy always brought him back to earth.
                    And as it turned out, Elon Doge brought Billy Doge to Mars.
                  </div>
                </div>
                <a
                  class="btn RDbtn mt-2"
                  data-toggle="collapse"
                  href="#collapseExample3"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample3"
                  // onClick={ReadBtn}
                >
                  {Read}
                </a>
              </div>

              <div className="col-md-2 text-center text-white">
                <a
                  href="https://opensea.io/assets/0x7447c7eb3a602aeacda7b7370cd96085d476d662/2434"
                  target="_blank"
                  className="text-white"
                >
                  <img className="w-100 rounded" src={t2434}></img>
                  <h5 className="py-3"> Dogenstein </h5>
                </a>
                <div class="collapse p-0 m-0" id="collapseExample4">
                  <div class=" card-body p-0 m-0">
                    Responsible for writing the textbooks Billy Doge and Elon
                    Doge chanced upon. Unlike the other doges of his time,
                    scientific progress was of great concern to him. His
                    writings in rocketry provided the theoretical prototype to
                    what Elon Doge created in the form of the DogeX. On Mars,
                    they built monuments in his honor.
                  </div>
                </div>
                <a
                  class="btn RDbtn mt-2"
                  data-toggle="collapse"
                  href="#collapseExample4"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample4"
                  // onClick={ReadBtn}
                >
                  {Read}
                </a>
              </div>

              <div className="col-md-2 text-center text-white">
                <a
                  href="https://opensea.io/assets/0x7447c7eb3a602aeacda7b7370cd96085d476d662/858"
                  target="_blank"
                  className="text-white"
                >
                  <img className="w-100 rounded" src={t858}></img>
                  <h5 className="py-3"> QTN Doge </h5>
                </a>
                <div class="collapse p-0 m-0" id="collapseExample5">
                  <div class=" card-body p-0 m-0">
                    Members of a mysterious underground organization, Quantum
                    Tachyon Necromancers, who arose after the asteroid was
                    sighted. They published the writings of Dogetoshi, a gnostic
                    technologist who believed the art of alchemy could fuse
                    magik and binary code to crack the philosopher’s stone of
                    decentralization. QTN doges would travel from place to place
                    to broadcast the message of Dogetoshi. They would paint a
                    glowing purple Q wherever they went.
                  </div>
                </div>
                <a
                  class="btn RDbtn mt-2"
                  data-toggle="collapse"
                  href="#collapseExample5"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample5"
                  // onClick={ReadBtn}
                >
                  {Read}
                </a>
              </div>
              <div className="col-1"></div>
            </div>

            <div className="row">
              <div className="col-1"></div>
              <div className="col-md-2 text-center text-white">
                <a
                  href="https://opensea.io/assets/0x7447c7eb3a602aeacda7b7370cd96085d476d662/3847"
                  target="_blank"
                  className="text-white"
                >
                  <img className="w-100 rounded" src={t3847}></img>
                  <h5 className="py-3"> Elon Doge </h5>
                </a>
                <div class="collapse p-0 m-0" id="collapseExample6">
                  <div class=" card-body p-0 m-0">
                    Elon Doge grew up a quiet but determined Doge. You never
                    quite knew what bone he was chewing on. Along with Billy
                    Doge, he broke through the barriers the oligarchs had put
                    between the people and scientific knowledge through his
                    singular genius.
                  </div>
                </div>
                <a
                  class="btn RDbtn mt-2"
                  data-toggle="collapse"
                  href="#collapseExample6"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample6"
                  // onClick={ReadBtn}
                >
                  {Read}
                </a>
              </div>

              <div className="col-md-2 text-center text-white">
                <a
                  href="https://opensea.io/assets/0x7447c7eb3a602aeacda7b7370cd96085d476d662/5061"
                  target="_blank"
                  className="text-white"
                >
                  <img className="w-100 rounded" src={t5061}></img>
                  <h5 className="py-3"> Diana Doge </h5>
                </a>
                <div class="collapse p-0 m-0" id="collapseExample7">
                  <div class=" card-body p-0 m-0">
                    Sweetheart of Matt Doge, whom she met on the MOOOOOON. On
                    Mars, she was credited with naming the Marstead (as
                    homesteads were known up there) she and Matt Doge founded
                    “New Georgia.” It eventually grew into the second largest
                    city on Mars after the capital, Doge City.
                  </div>
                </div>
                <a
                  class="btn RDbtn mt-2"
                  data-toggle="collapse"
                  href="#collapseExample7"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample7"
                  // onClick={ReadBtn}
                >
                  {Read}
                </a>
              </div>

              <div className="col-md-2 text-center text-white">
                <a
                  href="https://opensea.io/assets/0x7447c7eb3a602aeacda7b7370cd96085d476d662/715"
                  target="_blank"
                  className="text-white"
                >
                  <img className="w-100 rounded" src={t715}></img>
                  <h5 className="py-3">“Sarge”</h5>
                </a>
                <div class="collapse p-0 m-0" id="collapseExample8">
                  <div class=" card-body p-0 m-0">
                    Special missions officer in charge of the operation to mine
                    and explode the asteroid. So secretive only his rank is
                    known, and that he is a doge. Special missions doges were
                    handpicked by Doge Elon to exfiltrate key doges from
                    dangerous situations on earth for the Mars mission. These
                    doges included Matt Doggus, Diana Doge, and Doge Cuban.
                  </div>
                </div>
                <a
                  class="btn RDbtn mt-2"
                  data-toggle="collapse"
                  href="#collapseExample8"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample8"
                  // onClick={ReadBtn}
                >
                  {Read}
                </a>
              </div>

              <div className="col-md-2 text-center text-white">
                <a
                  href="https://opensea.io/assets/0x7447c7eb3a602aeacda7b7370cd96085d476d662/8963"
                  target="_blank"
                  className="text-white"
                >
                  <img className="w-100 rounded" src={t8963}></img>
                  <h5 className="py-3">Matt Doggace</h5>
                </a>
                <div class="collapse p-0 m-0" id="collapseExample9">
                  <div class=" card-body p-0 m-0">
                    Matt Doge became known for his short-wave radio broadcast
                    ‘Final Stand’ while Elon Doge built the rocket (short wave
                    was the only technology available). Known for his cry of ‘TO
                    THE MOOOOOON’, and his famous saying, ‘my fellow doges, we
                    will make our final stand, and then another and another. We
                    will never give up.” Personally headhunted by Elon Doge as
                    chief officer in charge of morale.
                  </div>
                </div>
                <a
                  class="btn RDbtn mt-2"
                  data-toggle="collapse"
                  href="#collapseExample9"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample9"
                  // onClick={ReadBtn}
                >
                  {Read}
                </a>
              </div>

              <div className="col-md-2 text-center text-white">
                <a
                  href="https://opensea.io/assets/0x7447c7eb3a602aeacda7b7370cd96085d476d662/9307"
                  target="_blank"
                  className="text-white"
                >
                  <img className="w-100 rounded" src={t9307}></img>
                  <h5 className="py-3"> Doge Dodgers </h5>
                </a>
                <div class="collapse p-0 m-0" id="collapseExample10">
                  <div class=" card-body p-0 m-0">
                    A junior deck officer on-board the DogeX in charge of the
                    navigation echelon. Possessed of an intrepid spirit to
                    explore the galaxy. The thousand doges who left before Mars
                    looked to him as their leader to penetrate to the very
                    limits of the Milky Way – and perhaps beyond.
                  </div>
                </div>
                <a
                  class="btn RDbtn mt-2"
                  data-toggle="collapse"
                  href="#collapseExample10"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample10"
                  // onClick={ReadBtn}
                >
                  {Read}
                </a>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 RD">
        <div className="container">
          <img className="w-25 py-5 d-block mx-auto" src={RD}></img>
          <div className="row">
            <div className="col-md-6 ">
              <div className="py-5 text-white text-center">
                <h2>10%</h2>
                {roadmap.title}
                <img className="w-25 py-2 d-block mx-auto" src={RDImg}></img>
                <p>{roadmap.r1}</p>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="py-5 text-white text-center">
                <h2>20%</h2>
                <img className="w-25 py-2 d-block mx-auto" src={RDImg}></img>
                <p>{roadmap.r2}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 ">
              <div className="py-5 text-white text-center">
                <h2>50%</h2>
                <img className="w-25 py-2 d-block mx-auto" src={RDImg}></img>
                <p>{roadmap.r3}</p>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="py-5 text-white text-center">
                <h2>75%</h2>
                <img className="w-25 py-2 d-block mx-auto" src={RDImg}></img>
                <p>{roadmap.r4}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-4"></div>
            <div className="col-md-4 ">
              <div className="py-5 text-white text-center">
                <h2>100%</h2>
                <img
                  className=" py-2 d-block mx-auto"
                  style={{ width: "120px" }}
                  src={RDImg}
                ></img>
                <p>{roadmap.r5}</p>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>

      <div className="Ftr DivC pt-5 ">
        <div className="container">
          <div className="row">
            <div className="col-12 pb-5 mb-5 text-center">
              <img className="ftrimg py-5" src={Logo}></img>
              <br />
              <a href="https://twitter.com/DogeXNFT" target="_blank">
                <img className="mx-2" src={twitter}></img>
              </a>
              <a href="https://discord.com/invite/QKYpD7G6Fg" target="_blank">
                <img className="mx-2" src={discord}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
