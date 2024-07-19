// import ReactMarkdown from "react-markdown";
// import Image from "next/image";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";

// Define the metadata generation function
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Next Template",
  };
}

export default function Home() {
  const markdown = `
  
  `;

  // const MDXContent = dynamic(() => import("@/content/page-content/home.mdx"));

  return (
    <div className="max-w-3xl z-10 w-full items-center justify-between">
      <div className="w-full flex justify-center items-center flex-col gap-6">
        {/* <h1 className="text-5xl sm:text-6xl font-black pb-6"> */}
        <h1 className="text-5xl sm:text-6xl font-black pb-6">
          Next.js Template
        </h1>
        {/* <div className="flex flex-col gap-4 text-[16px]">{markdown}</div> */}
        {/* <MDXContent /> */}
        <div className="flex flex-col gap-4 text-lg w-full">
          <p>
            🚀 Next.js 14 Framework: This is a basic template starter using
            Next.js 14. It offers efficient performance and fast page loading.
          </p>
          <p>
            🌟 Shadcn UI Elements: The interface uses Shadcn UI components.
            It&apos;s designed to be responsive and user-friendly.
          </p>{" "}
          <p>
            📝 MDX Support**: Write content using Markdown and embed React
            components within it.
          </p>{" "}
          <p>
            🎉 **Getting Started**: Begin your development with this Next.js 14
            starter template. It&apos;s a foundation for creating modern web
            applications.
          </p>
          <Link
            className="hover:underline text-lg"
            target="_blank"
            href="https://github.com/owolfdev/next-template-mdx-shad"
          >
            Code on Github
          </Link>
        </div>
      </div>
    </div>
  );
}
