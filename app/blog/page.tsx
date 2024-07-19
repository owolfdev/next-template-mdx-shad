import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Next.js Template | Blog",
  };
}

type Post = {
  slug: string;
  metadata: PostMetadata;
};

interface PostMetadata {
  title: string;
  publishDate: string;
  [key: string]: any;
}

async function getAllPosts(): Promise<Post[]> {
  const dir = path.join(process.cwd(), "content", "blogs");
  const files = fs.readdirSync(dir);

  const posts = files
    .filter(
      (filename) => filename.endsWith(".mdx") && !filename.startsWith(".")
    )
    .map((filename) => {
      try {
        const { metadata } = require(`@/content/blogs/${filename}`);
        return {
          slug: filename.replace(".mdx", ""),
          metadata: metadata || { title: "Untitled", index: 0 },
        };
      } catch (error) {
        console.error(`Error loading metadata for file ${filename}:`, error);
        return {
          slug: filename.replace(".mdx", ""),
          metadata: { title: "Untitled", index: 0 },
        };
      }
    });

  // Sort posts by index in ascending order
  posts.sort((a, b) => (a.metadata.index || 0) - (b.metadata.index || 0));

  return posts;
}

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col gap-8 max-w-3xl z-10 w-full items-center justify-between">
      <div>
        <h2 className="text-5xl sm:text-6xl font-black">Blog</h2>
      </div>
      <div className="text-lg">
        <p>
          Welcome to the blog! Here you will find a collection of articles and
          posts.
        </p>
      </div>

      <div className="w-full">
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.slug} className="p-4 border rounded-md shadow">
              <Link className="flex flex-col" href={`/blog/${post.slug}`}>
                <div className="text-2xl font-bold hover:underline">
                  {post.metadata.title}
                </div>
                <div>{post.metadata.publishDate}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
