import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: "9650850853",
      description: "Call us during business hours",
      action: "tel:+919650850853",
      actionText: "Call Now",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "9650850853",
      description: "Chat with us anytime",
      action: "https://wa.me/919650850853",
      actionText: "Chat on WhatsApp",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@harekrishnatraders.com",
      description: "Send us your inquiries",
      action: "mailto:info@harekrishnatraders.com",
      actionText: "Send Email",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Delhi, India",
      description: "Visit our office",
      action: "#",
      actionText: "Get Directions",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Get in Touch</h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Have questions about our products? Need a bulk order quote? We're here to help you find the perfect
                solution.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="border-border text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mx-auto">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{method.title}</h3>
                      <p className="text-sm font-medium text-foreground">{method.details}</p>
                      <p className="text-xs text-muted-foreground">{method.description}</p>
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                      <a
                        href={method.action}
                        target={method.action.startsWith("http") ? "_blank" : undefined}
                        rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {method.actionText}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Contact Section */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Reach out to us through any of the following channels. We typically respond within 24 hours.
                  </p>
                </div>

                <Card className="border-border">
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3">
                          <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Monday - Saturday</p>
                            <p className="text-muted-foreground">9:00 AM - 7:00 PM</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Sunday</p>
                            <p className="text-muted-foreground">Closed</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border space-y-3">
                      <h3 className="font-semibold text-lg">Company Details</h3>
                      <div className="space-y-2 text-sm">
                        <p>
                          <span className="text-muted-foreground">GST:</span>{" "}
                          <span className="font-medium">07AVAPY9256F1Z4</span>
                        </p>
                        <p>
                          <span className="text-muted-foreground">Location:</span>{" "}
                          <span className="font-medium">Delhi, India</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
                  <h3 className="font-semibold text-lg">Prefer WhatsApp?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    For the fastest response, contact us on WhatsApp. We can quickly answer your questions, provide
                    quotes, and process orders.
                  </p>
                  <Button asChild className="w-full">
                    <a href="https://wa.me/919650850853" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Map or Image */}
              <div className="space-y-6">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden border border-border">
                  <img
                    src="/medical-equipment-store-front.jpg"
                    alt="Hare Krishna Traders Location"
                    className="w-full h-full object-cover"
                  />
                </div>

                <Card className="border-border">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-semibold text-lg">What to Expect</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Quick response to all inquiries within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Detailed product information and specifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Competitive pricing and bulk order discounts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Professional guidance on product selection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Fast delivery across India</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
