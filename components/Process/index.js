import React from "react";

import "./style.css";
import Reveal from "../Reveal";

function Process() {
  return (
    <div className="process">
      <div className="process__container">
        <div className="left_process">
          <div className="headline">
            <Reveal component={"The process."} />
          </div>

          <div className="number_index">
            <Reveal component={"01/"} />
          </div>
        </div>

        <div className="right_process">
          <div className="headline">
            <Reveal component={"Crafting a masterpiece, one step at a time."} />
          </div>

          <div className="process_topics_container">
            <div className="topics">
              <Reveal component={<div>Brainstorming</div>} />
              <Reveal component={<div>Designing</div>} />
              <Reveal component={<div>Crafting</div>} />
            </div>

            <div className="answers">
              <Reveal
                component={
                  <div>
                    Let's roll up our sleeves and dive deep into the exciting
                    world of product creation! I'll take a close look at the
                    brand, competitors, market values, and product goals to
                    gather all the juicy details we need to make something
                    amazing.
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
