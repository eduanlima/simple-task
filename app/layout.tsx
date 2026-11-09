import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Simple task",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="">
        <header className="fixed top-0 right-0 left-0 py-2 border-b text-center shadow-xl">
          <Link className="font-bold" href="/">Task app</Link>
        </header>

        <main className="mt-24 mb-14 flex justify-center">{children}</main>

        <footer className="text-center">
          <p className="text-sm">Project created during a Front-end fudamentals course using React and Next</p>
          <p className="text-xs">(2026)</p>
        </footer>
      </body>
    </html>
  );
}
