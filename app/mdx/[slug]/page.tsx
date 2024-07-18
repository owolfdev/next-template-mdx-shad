import fs from "node:fs";
import path from "node:path";
import React from "react";
import dynamic from "next/dynamic";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(params);
  return {
    title: post.metadata.title,
    description: post.metadata.title,
  };
}

async function getPost({ slug }: { slug: string }) {
  try {
    const mdxPath = path.join("mdx", `${slug}.mdx`);
    if (!fs.existsSync(mdxPath)) {
      throw new Error(`MDX file for slug ${slug} does not exist`);
    }

    const { metadata } = await import(`@/mdx/${slug}.mdx`);

    return {
      slug,
      metadata,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error(`Unable to fetch the post for slug: ${slug}`);
  }
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("mdx"));
  const params = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return params;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await getPost(params);
  // Dynamically import the MDX file based on the slug
  const MDXContent = dynamic(() => import(`@/mdx/${slug}.mdx`));

  return (
    <div className="p-24">
      <div className="pb-10">
        <Link href="/">{"<- Home"}</Link>
      </div>
      <article className="prose prose-lg md:prose-lg lg:prose-lg mx-auto">
        <div className="pb-4">
          <h1 className="text-6xl font-black">{post.metadata.title}</h1>
          <p>
            Published on:{" "}
            {new Date(post.metadata.publishDate).toLocaleDateString()}
          </p>
        </div>
        <MDXContent />
      </article>
    </div>
  );
}
