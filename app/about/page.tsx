import ReactMarkdown from "react-markdown";
import Image from "next/image";
import type { Metadata } from "next";

// Define the metadata generation function
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Next Template | About",
  };
}

export default function About() {
  return (
    <div className="max-w-3xl z-10 w-full items-center justify-between">
      <div className="w-full flex justify-center items-center flex-col gap-6">
        <h1 className="text-5xl sm:text-6xl font-black pb-6">About</h1>

        <div className="w-full text-lg">
          This Next.js template includes MDX support, allowing you to write
          content using Markdown and embed React components within it. It
          features a blog page for posting articles, a contact page for
          communication, and dark mode for a comfortable viewing experience. The
          template uses ShadCN components to ensure consistent design and
          functionality throughout the site.
        </div>
      </div>
    </div>
  );
}
