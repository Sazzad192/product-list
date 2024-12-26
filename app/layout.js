import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Toast from "@/components/providers/Toast";
import CommonNav from "@/components/navigation/CommonNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Product List",
  description: "Product list with cart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <Toast />
        <CommonNav />
        <main className="min-h-[calc(100vh-180px)] px-5 lg:px-32 pt-2">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
