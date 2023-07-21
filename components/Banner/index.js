import React from "react";
import Button from "@/components/Button";
import "./style.css";
import Reveal from "../Reveal";
// import Image from "next/image";
// import user from ''

function Banner() {
  return (
    <div className="banner">
      <div className="banner__container">
        <Reveal
          delay="0.1"
          component={<div className="subheadline">fullstack developer</div>}
        ></Reveal>

        <div className="headline">
          <Reveal delay="0.2" component={"creative"} />
          <Reveal delay="0.3" component={<strong>developer</strong>} />

          <div className="image_headline">{/* <Image src={user}/> */}</div>
        </div>
        <Reveal
          delay="0.4"
          component={<div className="subheadline">ux/ui designer</div>}
        ></Reveal>
        <Reveal
          delay=".5"
          classe={'arrow_reveal'}
          component={
            <div className="banner_arrow">
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 37L37.25 2"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.00439 2H37.25V30.2456"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          }
        />
        <Button text="Let’s connect w/ Me"></Button>
        <Reveal
          delay=".6"
          component={
            <div className="banner_resume">
              Crafting digital product such as Website & Mobile App Design,
              Brand Identity, UIUX, Interaction Design, Webflow & FRAMER
              Development.
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Banner;
