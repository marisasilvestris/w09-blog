import { Geist, Geist_Mono } from "next/font/google";
import { localFont } from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lineSeed = localFont({
  src: [
    {
      path: "../../public/LINESeedJP-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/LINESeedJP-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/LINESeedJP-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/LINESeedJP-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-lineseed",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "legend of bilbo",
  description: "a blog for idiots",
  openGraph: {
    title: "legend of bilbo",
    description: "a blog for idiots",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex flex-col min-h-screen items-center justify-between lowercase`}
      >
        <Header />
        <main className="flex w-full max-w-3xl flex-col p-8 grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
