"use client";
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";
import Banner from "@/components/Banner";
import Bottom from "@/components/Bottom";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Social from "@/components/Social";
import Process from "@/components/Process";
import { Suspense, useEffect } from "react";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ReactLenis root>
      <Suspense fallback={"carregando..."}>
        <Bottom />
        <Banner />
        <Skills />
        <Works />
        <Social />
        <Process />
      </Suspense>
    </ReactLenis>
  );
}
