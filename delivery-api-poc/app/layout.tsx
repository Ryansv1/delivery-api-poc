import { Outfit } from "next/font/google";
import "@/public/globals.css";

const outfit = Outfit({
  subsets: ["latin"],
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Delivery POC",
  description: "Delivery APP POC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.className}>
      <body className="min-h-screen flex flex-col items-center">
        {children}
      </body>
    </html>
  );
}
