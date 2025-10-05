import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Package, Info, BookOpen, MessageCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { products } from "@/lib/products"

interface ImageGalleryProps {
  images: string[]
  productName: string
}

function ImageGallery({ images, productName }: ImageGalleryProps) {
  // Filter out any empty or undefined images and ensure we have at least one
  const validImages = images.filter(img => img)
  const displayImages = validImages.length > 0 ? validImages : ["/placeholder.svg?height=600&width=600"]
  
  return (
    <div className="grid grid-cols-2 gap-4">
      {displayImages.map((image, index) => (
        <div key={index} className="aspect-square bg-muted rounded-lg overflow-hidden border border-border">
          <img
            src={image}
            alt={`${productName} - View ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in ordering: ${product.name}\n\nProduct ID: ${product.id}\n\nPlease provide pricing and availability details.`,
  )
  const whatsappUrl = `https://wa.me/919650850853?text=${whatsappMessage}`

  // Get related products from same category
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  // Prepare images array
  const productImages = [product.image, product.image2].filter(Boolean) as string[]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-muted/30 py-4 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <ImageGallery images={productImages} productName={product.name} />
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">{product.name}</h1>
                  <p className="text-sm text-muted-foreground">Product ID: {product.id}</p>
                </div>

                <div className="space-y-4 pt-4">
                  <Card className="border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Info className="h-4 w-4 text-primary" />
                        Product Description
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        How to Use
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{product.usage}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Order Section */}
                <div className="pt-6 space-y-4">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <MessageCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">Order via WhatsApp</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Contact us directly on WhatsApp for pricing, availability, and to place your order. Our team
                          will respond promptly with all the details you need.
                        </p>
                      </div>
                    </div>
                    <Button asChild size="lg" className="w-full">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Order on WhatsApp
                      </a>
                    </Button>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Package className="h-4 w-4" />
                    <span>Fast delivery across India | Quality assured products</span>
                  </div>
                </div>

                {/* Company Info */}
                <div className="pt-6 border-t border-border">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Hare Krishna Traders</p>
                    <p className="text-sm text-muted-foreground">GST: 07AVAPY9256F1Z4</p>
                    <p className="text-sm text-muted-foreground">Contact: 9650850853</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Card
                    key={relatedProduct.id}
                    className="group hover:shadow-lg transition-shadow border-border overflow-hidden"
                  >
                    <Link href={`/products/${relatedProduct.id}`}>
                      <div className="aspect-square bg-muted overflow-hidden">
                        <img
                          src={relatedProduct.image || "/placeholder.svg?height=400&width=400"}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-4 space-y-2">
                        <p className="text-xs text-primary font-medium">{relatedProduct.category}</p>
                        <h3 className="font-semibold text-foreground line-clamp-2 leading-snug">
                          {relatedProduct.name}
                        </h3>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
