import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Registration Form |  Society",
  description: "please fill this form",
  images: "og-image.png",

  openGraph: {
    title: "Registration Form |  Society",
    description: "please fill this form",
    images: "og-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
