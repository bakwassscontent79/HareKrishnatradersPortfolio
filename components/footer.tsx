import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  const productCategories = [
    "Medical Equipment",
    "Fitness Equipment",
    "Measurement Tools",
    "Therapy Equipment",
    "Mobility Aids",
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Our Clients", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">HK</span>
              </div>
              <span className="font-bold text-lg">Hare Krishna Traders</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted supplier of medical equipment, fitness products, and health devices across India.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                <span className="font-medium">GST:</span> 07AVAPY9256F1Z4
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product Categories</h3>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category}>
                  <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+919650850853" className="text-muted-foreground hover:text-primary transition-colors">
                  9650850853
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MessageCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/919650850853"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@harekrishnatraders.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@harekrishnatraders.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Hare Krishna Traders. All rights reserved.</p>
            <p>Made with care for your health and wellness needs</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
