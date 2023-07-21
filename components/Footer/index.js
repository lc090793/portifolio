import React from "react";

import "./style.css";
import Button from "../Button";
import Reveal from "../Reveal";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <Reveal
          component={
            <div className="headline">
              Communication matters to start good things/
            </div>
          }
        />
        <Reveal
          component={
            <div className="subheadline">
              I'm currently available for freelance worldwide. Feel free to
              contact me if you want to collaborate on future projects or have a
              little chat.
            </div>
          }
        />
        <Button secundary="light" text="Let’s connect w/ Me" />

        <Reveal
          component={
            <div className="rights">
              ©2023 Leonardo costa, All Rights Reserved
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Footer;
