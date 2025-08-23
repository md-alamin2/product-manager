import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/layout/Navbar.jsx";
import { Footer } from "../components/layout/Footer";
import { ToastProvider } from "@/components/ui/toast";
import NextAuthProvider from "@/provider/NextAuthProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Product Manager - Your Digital Store",
  description: "Discover and manage amazing products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <ToastProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ToastProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
