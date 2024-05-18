import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BA AVIARY",
  description: "DEVELOPED BY BURHAN AAMIR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-around bg-blue-600 p-1">

          <Link href={'/'} className="bg-gray-900 justify-between text-white px-3 py-1 rounded mt-5 inline-block hover:bg-opacity-0 border hover:border-black hover:text-gray-900  w-fit">
            BA AVIARY
          </Link>
        </div>
        {children}

      </body>
    </html>
  );
}
