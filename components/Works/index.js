import React from "react";

import "./style.css";
import Reveal from "../Reveal";

function Works() {
  return (
    <div className="works">
      <div className="works__container">
        <Reveal component={<div className="headline">My latest works.</div>} />

        <Reveal
          component={
            <div className="works_row">
              <div className="works_title">Foccus - App Blocker</div>
              <div className="works_tech">
                MOBILE & WEB Design, Branding, Interaction Design
              </div>
            </div>
          }
        />

        <Reveal
          component={
            <div className="works_row">
              <div className="works_title">Indigency - Agency Website</div>
              <div className="works_tech">
                MOBILE & WEB Design, Branding, Interaction Design
              </div>
            </div>
          }
        />

        <Reveal
          component={
            <div className="works_row">
              <div className="works_title">Eneftee - NFT Launchpad Website</div>
              <div className="works_tech">
                MOBILE & WEB Design, Branding, Interaction Design
              </div>
            </div>
          }
        />

        <Reveal
          component={
            <div className="works_row">
              <div className="works_title">Foccus - App Blocker</div>
              <div className="works_tech">
                MOBILE & WEB Design, Branding, Interaction Design
              </div>
            </div>
          }
        />

        <Reveal
          component={
            <div className="works_row">
              <div className="works_title">Indigency - Agency Website</div>
              <div className="works_tech">
                MOBILE & WEB Design, Branding, Interaction Design
              </div>
            </div>
          }
        />

        <Reveal
          component={
            <div className="works_row">
              <div className="works_title">Eneftee - NFT Launchpad Website</div>
              <div className="works_tech">
                MOBILE & WEB Design, Branding, Interaction Design
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Works;
