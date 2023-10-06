"use client";
import React, { Suspense } from "react";
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";
import "./style.css";
import Reveal from "../../components/Reveal";
import Link from "next/link";
import Loading from "@/components/Loading";
async function blog() {
  const data = await fetch("https://portifolio-backend-phi.vercel.app/post");
  const posts = await data.json();
  return (
    <Suspense fallback={<Loading />}>
      <ReactLenis root>
        <div className="blog">
          <div className="blog__container">
            {posts.map((p, index) => {
              return (
                <Link href={`/blog/${p.post_id}`}>
                  <Reveal
                    component={
                      <div className="blog_post" key={index}>
                        <>
                          <h1>
                            <span>article</span>
                            {p.title}
                          </h1>
                          <p>
                            <span>description</span>
                            {p.content.substring(0, 100)}
                          </p>
                        </>
                      </div>
                    }
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </ReactLenis>
    </Suspense>
  );
}

export default blog;
