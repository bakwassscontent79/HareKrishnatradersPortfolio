"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Clients", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <nav className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all">
            <span className="text-primary-foreground font-bold text-xl">HK</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hare Krishna Traders
            </span>
            <p className="text-xs text-muted-foreground">Medical & Health Equipment</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="default"
            size="sm"
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-all"
            onClick={() => window.open("https://wa.me/919650850853", "_blank")}
          >
            <Phone className="h-4 w-4 mr-2" />
            9650850853
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-muted"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="default"
              size="sm"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md"
              onClick={() => window.open("https://wa.me/919650850853", "_blank")}
            >
              <Phone className="h-4 w-4 mr-2" />
              9650850853
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
