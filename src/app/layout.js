import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/toast";
import NextAuthProvider from "@/provider/NextAuthProvider";
import { ThemeProvider } from "@/provider/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Product Manager - Your Digital Store",
  description: "Discover and manage amazing products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <NextAuthProvider>
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </NextAuthProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
