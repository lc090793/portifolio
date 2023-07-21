import React from "react";

import "./style.css";
import Image from "next/image";
import js from "@/src/img/skills logo/square-js 1.svg";
import ts from "@/src/img/skills logo/typescriptlang-icon 1.svg";
import react from "@/src/img/skills logo/react 1.svg";
import next from "@/src/img/skills logo/Group 18.svg";
import html from "@/src/img/skills logo/html5 1.svg";
import css from "@/src/img/skills logo/css3-alt 1.svg";
import sass from "@/src/img/skills logo/sass 1.svg";
import node from "@/src/img/skills logo/node-js 3.svg";
import git from "@/src/img/skills logo/square-git 1.svg";
import graph from "@/src/img/skills logo/logo 1.svg";
import figma from "@/src/img/skills logo/Adobe Photoshop CC 2.svg";
import ps from "@/src/img/skills logo/Adobe Photoshop CC 1.svg";


import express from "@/src/img/skills logo/expressjs-ar21 1.svg";
import mysql from "@/src/img/skills logo/mysql-horizontal 1.svg";
import docker from "@/src/img/skills logo/docker-ar21 1.svg";
import mongo from "@/src/img/skills logo/mongodb-ar21 1.svg";
import prisma from "@/src/img/skills logo/prisma 1.svg";
import Reveal from "../Reveal";

function Skills() {
  return (
    <div className="skills">
      <div className="skills__container">
      <Reveal delay=".1" component={ <div className="headline">Works with 30+ Frameworks</div>}/>

        <div className="skills_logo_container">
           <Reveal delay=".1" component={<Image src={js} alt="skills" />}/>
           <Reveal delay=".2" component={<Image src={ts} alt="skills" />}/>
           <Reveal delay=".3" component={<Image src={react} alt="skills" />}/>
           <Reveal delay=".4" component={<Image src={next} alt="skills" />}/>
           <Reveal delay=".5" component={<Image src={html} alt="skills" />}/>
           <Reveal delay=".6" component={<Image src={css} alt="skills" />}/>
           <Reveal delay=".7" component={<Image src={sass} alt="skills" />}/>
           <Reveal delay=".8" component={<Image src={node} alt="skills" />}/>
           <Reveal delay=".9" component={<Image src={git} alt="skills" />}/>
           <Reveal delay="1" component={<Image src={graph} alt="skills" />}/>
           <Reveal delay="1.1" component={<Image src={figma} alt="skills" />}/>
           <Reveal delay="1.2" component={<Image src={ps} alt="skills" />}/>
        </div>
        <div className="skills_logo_container">
          <Reveal delay="1.3" component={<Image src={express} alt="skills" />}/>
          <Reveal delay="1.4" component={<Image src={mysql} alt="skills" />}/>
          <Reveal delay="1.5" component={<Image src={docker} alt="skills" />}/>
          <Reveal delay="1.6" component={<Image src={mongo} alt="skills" />}/>
          <Reveal delay="1.7" component={<Image src={prisma} alt="skills" />}/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
