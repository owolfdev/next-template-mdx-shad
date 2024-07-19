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
        <div className="flex flex-col gap-4 text-lg">
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
          <Link href="https://github.com/owolfdev/nextjs-template">
            Code on Github
          </Link>
        </div>
        <div className="w-full text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </div>
      </div>
    </div>
  );
}
