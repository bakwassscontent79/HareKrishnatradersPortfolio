import Link from "next/link"
import { ArrowRight, Shield, Truck, HeadphonesIcon, CheckCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const featuredProducts = [
    {
      name: "Digital Thermometer",
      category: "Medical Equipment",
      image: "/digital-medical-thermometer.jpg",
    },
    {
      name: "Hand Grip Strengthener",
      category: "Fitness Equipment",
      image: "/hand-grip-strengthener-fitness.jpg",
    },
    {
      name: "Stethoscope",
      category: "Medical Equipment",
      image: "/professional-stethoscope.jpg",
    },
    {
      name: "Heating Pad",
      category: "Therapy Equipment",
      image: "/electric-heating-pad-therapy.jpg",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-24 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <Sparkles className="h-4 w-4" />
                Trusted Medical Equipment Supplier
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Professional Medical & Health Equipment
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
                Your trusted source for quality medical devices, fitness equipment, and health monitoring tools. Serving
                healthcare professionals and individuals across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button
                  asChild
                  size="lg"
                  className="text-base h-14 px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  <Link href="/products">
                    Browse Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-base h-14 px-8 border-2 hover:bg-muted bg-transparent"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
                <CardContent className="pt-8 pb-8 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
                    <Shield className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Quality Assured</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    All products are certified and meet international quality standards
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
                <CardContent className="pt-8 pb-8 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg shadow-accent/20">
                    <Truck className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Fast Delivery</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Quick and reliable shipping across India with tracking
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
                <CardContent className="pt-8 pb-8 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
                    <HeadphonesIcon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Expert Support</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Dedicated customer service team ready to assist you
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">Featured Products</h2>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
                Explore our selection of high-quality medical and health equipment
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-shadow border-border/50 overflow-hidden hover:-translate-y-2"
                >
                  <div className="aspect-square bg-muted overflow-hidden relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-4 space-y-2">
                    <p className="text-xs text-primary font-medium">{product.category}</p>
                    <h3 className="font-semibold text-foreground">{product.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 hover:bg-muted h-14 px-8 text-base bg-transparent"
              >
                <Link href="/products">
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
                  Why Choose Hare Krishna Traders?
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Wide Product Range</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Over 40+ products including medical equipment, fitness tools, and diagnostic devices
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Trusted by Professionals</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Serving doctors, nurses, fitness trainers, and health-conscious individuals
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Competitive Pricing</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Best prices without compromising on quality and authenticity
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Easy Ordering</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Simple WhatsApp ordering process for quick and convenient purchases
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-lg overflow-hidden bg-muted">
                <img
                  src="/medical-equipment-professional-healthcare.jpg"
                  alt="Medical Equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">Ready to Order?</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              Contact us today via WhatsApp for quick quotes and personalized assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-base h-14 px-8 bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl hover:shadow-2xl transition-all"
              >
                <a href="https://wa.me/919650850853" target="_blank" rel="noopener noreferrer">
                  Order via WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base h-14 px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all"
              >
                <Link href="/products">Browse Catalog</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
