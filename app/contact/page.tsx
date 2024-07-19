import ReactMarkdown from "react-markdown";
import Image from "next/image";
import type { Metadata } from "next";
import { ContactForm } from "./form";

// Define the metadata generation function
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Next Template | Contact",
  };
}

export default function Blog() {
  return (
    <div className="max-w-3xl z-10 w-full items-center justify-between">
      <div className="w-full flex justify-center items-center flex-col gap-6">
        <h1 className="text-5xl sm:text-6xl font-black">Contact</h1>
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
