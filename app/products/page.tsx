"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Filter } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { products, categories } from "@/lib/products"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Products")

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">Our Products</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Browse our complete catalog of medical equipment, fitness products, and health devices
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 border-b border-border bg-background sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                <Filter className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="whitespace-nowrap"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("All Products")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="group hover:shadow-lg transition-all duration-300 border-border overflow-hidden"
                  >
                    <Link href={`/products/${product.id}`}>
                      <div className="aspect-square bg-muted overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg?height=400&width=400"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-4 space-y-2">
                        <p className="text-xs text-primary font-medium">{product.category}</p>
                        <h3 className="font-semibold text-foreground line-clamp-2 leading-snug">{product.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                        <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent">
                          View Details
                        </Button>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-balance">Need Help Choosing?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Contact us on WhatsApp for personalized product recommendations and bulk order inquiries
            </p>
            <Button asChild size="lg">
              <a href="https://wa.me/919650850853" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
