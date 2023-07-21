"use client"
import React, { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";
function Reveal(props) {
  const ref = useRef(null);
  const InView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (InView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [InView]);

  return (
    <div
      ref={ref}
      style={{ position: "relative",margin:0,padding:0}}
      className={props.classe || "reveal"}
    >
      <motion.div
        // className={props.classe}
        style={{margin:0,padding:0}}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: props.delay || 0.7 }}
      >
        {props.component}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100% " },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          background: "#080a0e00",
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
}

export default Reveal;
