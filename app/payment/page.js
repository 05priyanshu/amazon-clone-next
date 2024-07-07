import Payment from "@/components/Payment/Payment";

export const metadata = {
  title: "Payment - Amazon",
  description: "Securely complete your purchase on Amazon.",
  keywords: "Amazon, Payment, Checkout, Secure Payment",
  author: "Amazon",
  openGraph: {
    title: "Payment - Amazon",
    description: "Securely complete your purchase on Amazon.",
    url: "https://www.amazon.com/payment",
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
    title: "Payment - Amazon",
    description: "Securely complete your purchase on Amazon.",
    image: "http://pngimg.com/uploads/amazon/amazon_PNG21.png",
  },
};

export default function payment() {
  return <Payment />;
}
