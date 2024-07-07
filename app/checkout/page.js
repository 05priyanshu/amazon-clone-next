import Checkout from "@/components/Checkout/Checkout";
export const metadata = {
  title: "Checkout - Amazon",
  description: "Complete your purchase securely on Amazon.",
  keywords: "Amazon, Checkout, Complete Purchase, Secure Checkout",
  author: "Amazon",
  openGraph: {
    title: "Checkout - Amazon",
    description: "Complete your purchase securely on Amazon.",
    url: "https://www.amazon.com/checkout",
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
    title: "Checkout - Amazon",
    description: "Complete your purchase securely on Amazon.",
    image: "http://pngimg.com/uploads/amazon/amazon_PNG21.png",
  },
};

export default function checkout() {
  return <Checkout />;
}
