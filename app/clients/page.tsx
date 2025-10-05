import { Building, Hospital, Dumbbell, Users, CheckCircle2, Quote } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ClientsPage() {
  const clientTypes = [
    {
      icon: Hospital,
      title: "Hospitals & Clinics",
      description: "Medical equipment and diagnostic tools for healthcare facilities",
      count: "50+",
    },
    {
      icon: Dumbbell,
      title: "Fitness Centers",
      description: "Professional fitness equipment and training accessories",
      count: "30+",
    },
    {
      icon: Building,
      title: "Corporate Offices",
      description: "Health and wellness equipment for workplace wellness programs",
      count: "20+",
    },
    {
      icon: Users,
      title: "Individual Customers",
      description: "Personal health and fitness equipment for home use",
      count: "500+",
    },
  ]

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Medical Director",
      company: "City Hospital, Delhi",
      content:
        "Hare Krishna Traders has been our trusted supplier for medical equipment for over 3 years. Their products are reliable, and their service is exceptional.",
    },
    {
      name: "Priya Sharma",
      role: "Gym Owner",
      company: "FitZone Fitness Center",
      content:
        "The quality of fitness equipment we received exceeded our expectations. Great pricing and fast delivery. Highly recommended!",
    },
    {
      name: "Amit Patel",
      role: "Procurement Manager",
      company: "Healthcare Solutions Ltd.",
      content:
        "Professional service and genuine products. They helped us find exactly what we needed within our budget. Will definitely order again.",
    },
  ]

  const benefits = [
    "Competitive wholesale pricing for bulk orders",
    "Quality assured products from trusted manufacturers",
    "Fast delivery across India",
    "Dedicated account manager for corporate clients",
    "Flexible payment terms for registered businesses",
    "After-sales support and product guidance",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Our Valued Clients</h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Trusted by hospitals, fitness centers, corporate offices, and individuals across India
              </p>
            </div>
          </div>
        </section>

        {/* Client Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Who We Serve</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                We cater to diverse clients with specialized equipment needs
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {clientTypes.map((type, index) => (
                <Card key={index} className="border-border text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mx-auto">
                      <type.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">{type.count}</div>
                      <h3 className="font-semibold text-lg">{type.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{type.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">Why Businesses Choose Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We understand the unique needs of businesses and institutions. Our B2B services are designed to make
                  procurement easy, efficient, and cost-effective.
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg">
                  <a
                    href="https://wa.me/919650850853?text=Hi, I'm interested in bulk orders"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request Bulk Quote
                  </a>
                </Button>
              </div>

              <div className="aspect-square bg-muted rounded-lg overflow-hidden border border-border">
                <img
                  src="/business-handshake-partnership.png"
                  alt="Business Partnership"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                Real feedback from satisfied customers across India
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 space-y-4">
                    <Quote className="h-8 w-8 text-primary/20" />
                    <p className="text-sm text-muted-foreground leading-relaxed italic">{testimonial.content}</p>
                    <div className="pt-4 border-t border-border">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">Ready to Partner With Us?</h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              Join hundreds of satisfied clients who trust Hare Krishna Traders for their equipment needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="/contact">Contact Us</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <a href="/products">Browse Products</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
