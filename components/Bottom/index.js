import React from "react";

import "./style.css";
import Reveal from "../Reveal";

function Bottom() {
  return (
    <div className="bottom">
      <div className="bottom__container">
        <Reveal component={<div></div>} />
        <Reveal
          component={<div> ©2023 Leonardo costa, All Rights Reserved</div>}
        />
      </div>
    </div>
  );
}

export default Bottom;
