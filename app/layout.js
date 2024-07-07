// "use client"

import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
const inter = Inter({ subsets: ["latin"] });
// import { SessionProvider } from 'next-auth/react';
import Head from "next/head";

const ClientProviders = dynamic(() => import("@/components/ClientProviders"), {
  ssr: false,
});

export const metadata = {
  title: "Amazon Home",
  description:
    "Welcome to Amazon - Your one-stop shop for everything from A to Z.",
  keywords: "Amazon, Online Shopping, E-commerce",
  author: "Amazon",
  openGraph: {
    title: "Amazon Home",
    description:
      "Welcome to Amazon - Your one-stop shop for everything from A to Z.",
    url: "https://www.amazon.com",
    images: [
      {
        url: "http://pngimg.com/uploads/amazon/amazon_PNG21.png",
        width: 800,
        height: 600,
        alt: "Amazon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Home",
    description:
      "Welcome to Amazon - Your one-stop shop for everything from A to Z.",
    image: "http://pngimg.com/uploads/amazon/amazon_PNG21.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>
          {/* <SessionProvider> */}
          {children}
          {/* </SessionProvider> */}
        </ClientProviders>
      </body>
    </html>
  );
}
