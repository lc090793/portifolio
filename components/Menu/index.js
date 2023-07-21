import React from "react";

import "./style.css";
import Reveal from "../Reveal";
import Image from "next/image";
// import usa from "../../src/img/usa.svg";
import br from "../../src/img/br.png";
import Link from "next/link";

function Menu() {
  return (
    <div className="menu">
      <div className="menu__container">
        <div className="logo">
          <Link href="/">
            <Reveal
              delay=".05"
              component={<div className="initials">lc</div>}
            />
            <Reveal delay=".1" component={"leonardo.dev"} />
          </Link>
        </div>
        <div className="navigation">
          <Reveal delay=".2" component={<div>About</div>} />
          <Reveal delay=".3" component={<div>Works</div>} />
          <Reveal delay=".4" component={<div>Process</div>} />
          <Reveal
            delay=".5"
            component={
              <div>
                <Link href="/cv"> CV</Link>
              </div>
            }
          />
          <Reveal
            delay=".6"
            component={
              <div>
                LET&apos;S CONNECT W/ ME
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.1503 13.552V0.998382V0.550049H13.7023H1.15833L1.15834 1.44672H12.6213L0.841797 13.2349L1.47536 13.869L13.2543 2.08122V13.552H14.1503Z"
                  />
                </svg>
              </div>
            }
          />

          <Reveal
            component={
              <div className="country">
                <Image src={br} alt="country" />
                <svg
                  width="7"
                  height="6"
                  viewBox="0 0 7 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 6L0.468912 0.749999L6.53109 0.75L3.5 6Z"
                    fill="white"
                  />
                </svg>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
