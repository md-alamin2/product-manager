import Link from "next/link";
import { Package, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const navigation = {
    product: [
      { name: "All Products", href: "/products" },
      { name: "Featured", href: "/products?featured=true" },
      { name: "Categories", href: "/products?categories=all" },
      { name: "Add Product", href: "/dashboard/add-product" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Community", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Email", icon: Mail, href: "mailto:hello@productmanager.com" },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Package className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">ProductManager</span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md">
                Your go-to platform for discovering and managing amazing products. 
                Built with modern technology for the best user experience.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <Button key={item.name} variant="ghost" size="sm" asChild>
                    <Link href={item.href} className="text-muted-foreground hover:text-primary">
                      <item.icon className="h-5 w-5" />
                      <span className="sr-only">{item.name}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            {/* Navigation Columns */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 ProductManager. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-4 md:mt-0">
              Built with ❤️ using Next.js 15 & shadcn/ui
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}