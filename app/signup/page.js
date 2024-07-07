import Signup from "@/components/Signup/Signup";


export const metadata = {
  title: "Amazon Signup",
  description:
    "Create an Amazon account to access millions of products, track orders, and more.",
  keywords: "Amazon, Signup, Create Account, Online Shopping",
  author: "Amazon",
  openGraph: {
    title: "Amazon Signup",
    description:
      "Create an Amazon account to access millions of products, track orders, and more.",
    url: "https://www.amazon.com/signup",
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
    title: "Amazon Signup",
    description:
      "Create an Amazon account to access millions of products, track orders, and more.",
    image: "http://pngimg.com/uploads/amazon/amazon_PNG21.png",
  },
};
export default function SignupPage() {
  return <Signup />;
}
