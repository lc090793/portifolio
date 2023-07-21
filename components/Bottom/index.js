import React from "react";

import "./style.css";
import Reveal from "../Reveal";

function Bottom() {
  return (
    <div className="bottom">
      <div className="bottom__container">
        <Reveal component={<div>+55 (31) 99126-1722</div>} />
        <Reveal
          component={<div> ©2023 Leonardo costa, All Rights Reserved</div>}
        />
      </div>
    </div>
  );
}

export default Bottom;
