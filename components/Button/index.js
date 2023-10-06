import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import "./style.css";
import Reveal from "../Reveal";
function Button(props) {
  return (
    <Reveal
      component={
        <button className={`btn_default ${props.secundary} ${inter.className}`}>
          {props.text}
         
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.1503 13.552V0.998382V0.550049H13.7023H1.15833L1.15834 1.44672H12.6213L0.841797 13.2349L1.47536 13.869L13.2543 2.08122V13.552H14.1503Z"
            />
          </svg>
        </button>
      }
    />
  );
}

export default Button;
