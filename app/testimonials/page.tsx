import type {Metadata} from "next"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Customer Testimonials",
  description:
    "Read what our satisfied customers say about D-vine Majestic Venture Nigeria Limited. Discover why we're the trusted choice for building materials in Nigeria.",
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Engr. Adebayo Johnson",
      role: "Construction Manager",
      company: "Johnson Construction Ltd",
      rating: 5,
      text: "D-vine Majestic Venture has been our go-to supplier for building materials for over 3 years. Their quality is consistently excellent, and their prices are very competitive. The team is professional and always delivers on time.",
      initials: "AJ",
    },
    {
      name: "Mrs. Folake Adeyemi",
      role: "Interior Designer",
      company: "Elegant Spaces Design",
      rating: 5,
      text: "I've worked with many suppliers, but D-vine Majestic stands out for their extensive tile collection. The foreign tiles they import are of exceptional quality, and they always help me find exactly what my clients need.",
      initials: "FA",
    },
    {
      name: "Mr. Chukwuma Okafor",
      role: "Property Developer",
      company: "Okafor Properties",
      rating: 5,
      text: "Excellent service and quality products! I've used their waterproofing cement on multiple projects, and the results have been outstanding. Their technical support team is also very knowledgeable.",
      initials: "CO",
    },
    {
      name: "Arch. Sarah Ogundimu",
      role: "Principal Architect",
      company: "Ogundimu & Associates",
      rating: 5,
      text: "D-vine Majestic Venture understands the needs of professionals in the construction industry. Their product range is comprehensive, and they're always willing to source special materials when needed.",
      initials: "SO",
    },
    {
      name: "Mr. Ibrahim Musa",
      role: "Contractor",
      company: "Musa Building Contractors",
      rating: 5,
      text: "I appreciate their commitment to quality and their competitive pricing. The stamping pigments I purchased from them gave my concrete work a professional finish that impressed my clients.",
      initials: "IM",
    },
    {
      name: "Mrs. Grace Okoro",
      role: "Homeowner",
      company: "Private Client",
      rating: 5,
      text: "Building my dream home was made easier with D-vine Majestic's help. They provided expert advice on material selection and offered great prices. The tiles I bought are beautiful and durable.",
      initials: "GO",
    },
    {
      name: "Engr. Tunde Bakare",
      role: "Civil Engineer",
      company: "Bakare Engineering Services",
      rating: 5,
      text: "Their building chemicals and waterproofing solutions are top-notch. I've specified their products on several commercial projects, and the performance has been excellent. Highly recommended!",
      initials: "TB",
    },
    {
      name: "Mr. Daniel Eze",
      role: "Tile Installer",
      company: "Eze Tiling Services",
      rating: 5,
      text: "As a professional tile installer, I need reliable suppliers. D-vine Majestic consistently provides quality tiles and adhesives. Their local and foreign tile selection is impressive.",
      initials: "DE",
    },
    {
      name: "Mrs. Kemi Adesanya",
      role: "Project Manager",
      company: "Adesanya Construction",
      rating: 5,
      text: "Working with D-vine Majestic has been a pleasure. They understand project timelines and always ensure materials are delivered when needed. Their customer service is exceptional.",
      initials: "KA",
    },
  ]

  const stats = [
    { number: "500+", label: "Satisfied Customers" },
    { number: "1000+", label: "Projects Completed" },
    { number: "5", label: "Years of Excellence" },
    { number: "99%", label: "Customer Satisfaction" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">What Our Customers Say</h1>
            <p className="text-xl text-blue-200">
              Don't just take our word for it - hear from the professionals and homeowners who trust D-vine Majestic
              Venture.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Customer Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read what our valued customers have to say about their experience with D-vine Majestic Venture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 mb-6">
                    <Quote className="h-8 w-8 text-blue-200 mb-3" />
                    <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-blue-100 text-blue-900 font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-blue-600">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Satisfied Customers</h2>
          <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
            Experience the quality and service that has made D-vine Majestic Venture the preferred choice for building
            materials in Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors"
            >
              View Our Products
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white hover:text-blue-900 font-medium rounded-lg transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
