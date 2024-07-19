import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

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
        <div className="flex flex-col gap-4 text-lg w-full">
          <div className="text-lg">
            This Next.js template includes MDX support, allowing you to write
            content using Markdown and embed React components within it. It
            features a blog page for posting articles, a contact page for
            communication, and dark mode for a comfortable viewing experience.
            The template uses shadcn/ui components to ensure consistent design
            and functionality throughout the site.
          </div>

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
