"use client";
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";
import Banner from "@/components/Banner";
import Bottom from "@/components/Bottom";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Social from "@/components/Social";
import Process from "@/components/Process";
export default function Home() {
  return (
    <ReactLenis root>
      <Bottom/>
      <Banner />
      <Skills />
      <Works />
      <Social/>
      <Process/>
    </ReactLenis>
  );
}
