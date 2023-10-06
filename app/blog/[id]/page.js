import React, { Suspense } from "react";

import "./style.css";
import Reveal from "@/components/Reveal";
import Loading from "@/components/Loading";
import { MDXRemote } from 'next-mdx-remote/rsc'


async function Article({ params }) {
  const data = await fetch(
    `https://portifolio-backend-phi.vercel.app/post/${params.id}`
  );
  const post = await data.json();

  console.log(post);

  return (
    <Suspense fallback={<Loading/>}>
    <div className="article">
      <div className="article__container">
        <Reveal
          component={
            <div className="blog_post">
              <>
                <h1>{post.title}</h1>
                <div className="created_at">{post.createdAt.substring(0,10)}</div>
    
                <MDXRemote source={post.content} />
              </>
            </div>
          }
        />
      </div>
    </div>
    </Suspense>
  );
}

export default Article;

