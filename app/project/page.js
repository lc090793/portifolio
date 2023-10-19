"use client"
import { useEffect } from "react";
import Skills from "@/components/Skills";
import "./style.css";

export default function Project() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="project_wrapper">
      <h1 div className="title_project">
        Foccus - App Blocker
      </h1>

      <Skills title="technologies utilized in this project" />
    </div>
  );
}
