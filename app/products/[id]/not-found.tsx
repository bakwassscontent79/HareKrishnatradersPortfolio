import Link from "next/link"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center space-y-6">
          <AlertCircle className="h-16 w-16 text-muted-foreground mx-auto" />
          <h1 className="text-3xl font-bold tracking-tight">Product Not Found</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            The product you're looking for doesn't exist or has been removed from our catalog.
          </p>
          <Button asChild>
            <Link href="/products">Browse All Products</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
