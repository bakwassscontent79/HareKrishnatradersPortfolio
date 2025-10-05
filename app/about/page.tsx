import { Building2, Target, Award, Users, TrendingUp, Shield } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We source only the highest quality products from trusted manufacturers and suppliers.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We provide personalized service and support.",
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      description: "Fair and transparent pricing with the best value for your investment.",
    },
    {
      icon: Award,
      title: "Trusted Partner",
      description: "Years of experience serving hospitals, clinics, gyms, and individual customers.",
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
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">About Hare Krishna Traders</h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Your trusted partner for medical equipment, fitness products, and health devices since our establishment
                in Delhi
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-primary">
                  <Building2 className="h-5 w-5" />
                  <span className="text-sm font-medium">Our Company</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
                  Serving Health and Wellness Needs
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Hare Krishna Traders is a leading supplier of medical equipment, fitness products, and health
                    devices based in Delhi. We specialize in providing high-quality products to hospitals, clinics,
                    fitness centers, and individual customers across India.
                  </p>
                  <p>
                    Our extensive product range includes medical diagnostic equipment, fitness training gear,
                    measurement tools, therapy equipment, and mobility aids. We are committed to sourcing products that
                    meet the highest standards of quality and reliability.
                  </p>
                  <p>
                    With a focus on customer satisfaction, we offer personalized service, competitive pricing, and fast
                    delivery across India. Our team is dedicated to helping you find the right products for your
                    specific needs.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-semibold text-lg">Company Details</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Company Name:</span>
                        <span className="font-medium">Hare Krishna Traders</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">GST Number:</span>
                        <span className="font-medium">07AVAPY9256F1Z4</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span className="font-medium">Delhi, India</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Contact:</span>
                        <span className="font-medium">9650850853</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border">
                  <img
                    src="/medical-equipment-store.jpg"
                    alt="Hare Krishna Traders"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide accessible, high-quality medical and fitness equipment that empowers individuals and
                    institutions to achieve better health outcomes. We strive to be the most trusted supplier in our
                    industry through exceptional service and product excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become India's leading distributor of medical and fitness equipment, recognized for our
                    commitment to quality, innovation, and customer satisfaction. We envision a future where quality
                    health equipment is accessible to all.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                The principles that guide everything we do at Hare Krishna Traders
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-border text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mx-auto">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
