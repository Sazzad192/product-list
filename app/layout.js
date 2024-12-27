import "./globals.css";
import { Murecho } from "next/font/google";
// import { Murecho } from "@next/font/google";
import CommonNav from "@/components/navigation/CommonNav";
import TanstackProvider from "@/components/providers/TanstackProvider";
import { CartProvider } from "./context/CartContext";

const murecho = Murecho({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Include all weights
});

export const metadata = {
  title: "Product List",
  description: "Product list with cart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${murecho.className} h-full`}>
        <TanstackProvider>
          <CartProvider>
            <CommonNav />
            <main className="min-h-[calc(100vh-180px)] px-5 lg:px-32 py-4">
              {children}
            </main>
          </CartProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
