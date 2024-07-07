import Login from "@/components/Login/login";
import Head from "next/head";


export const metadata = {
  title: "Amazon Login",
  description:
    "Sign in to your Amazon account to access millions of products, track orders, and more.",
  keywords: "Amazon, Login, Sign In, Online Shopping",
  author: "Amazon",
  openGraph: {
    title: "Amazon Login",
    description:
      "Sign in to your Amazon account to access millions of products, track orders, and more.",
    url: "https://www.amazon.com/login",
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
    title: "Amazon Login",
    description:
      "Sign in to your Amazon account to access millions of products, track orders, and more.",
    image: "http://pngimg.com/uploads/amazon/amazon_PNG21.png",
  },
};

export default function LoginPage() {
  return (
    <>
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Login />
    </>
  );
}
