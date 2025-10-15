import type { Metadata } from "next";
import {
  Building2,
  Target,
  Eye,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about D-vine Majestic Venture Nigeria Limited - our mission, vision, values, and commitment to providing premium building materials across Nigeria.",
};

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Quality Assurance",
      description:
        "We ensure all our products meet the highest quality standards for construction excellence.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Customer Focus",
      description:
        "Our customers are at the heart of everything we do, providing personalized service and support.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Reliability",
      description:
        "Consistent supply chain and dependable service you can count on for your projects.",
    },
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: "Innovation",
      description:
        "Continuously improving our product range and services to meet evolving construction needs.",
    },
  ];

  const services = [
    "Sales of both foreign and locally made tiles",
    "Varieties of tiles in different designs and patterns",
    "Stamping pigments and polishing materials",
    "Building materials and construction chemicals",
    "Expert consultation and product recommendations",
    "Competitive pricing and bulk order discounts",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About D-vine Majestic Venture
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              "With God all things are possible" - Building Nigeria's future
              with quality materials and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                D-vine Majestic Venture Nigeria Limited is a leading
                organization that specializes in the sales of premium building
                materials, building tiles, stamps polished (both foreign and
                local), and a comprehensive variety of building cements and
                chemicals.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded on the principle that "With God all things are
                possible," we have established ourselves as a trusted partner in
                Nigeria's construction industry, providing quality materials
                that meet international standards while remaining accessible to
                all.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to excellence, combined with our extensive
                product range and competitive pricing, makes us the preferred
                choice for contractors, builders, and individuals across Nigeria
                and beyond.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <img
                src="/images/Dvine-building.jpg?height=400&width=500"
                alt="D-vine Majestic Venture building materials warehouse"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Our Commitment
                </h3>
                <p className="text-gray-600">
                  Delivering quality building materials with integrity,
                  reliability, and exceptional customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Target className="h-12 w-12 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the major distributor of foreign and local tiles, with
                  good quality and reliable building materials in Nigeria and
                  beyond, while affording everyone accessibility of the
                  materials with affordable prices.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Eye className="h-12 w-12 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To become Nigeria's leading supplier of premium building
                  materials, recognized for our commitment to quality,
                  innovation, and customer satisfaction, while expanding our
                  reach across Africa and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our business and define our commitment
              to excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Services & Products Offered
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide a comprehensive range of building materials and
                services to meet all your construction needs.
              </p>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/foreign-tiles.jpg?height=200&width=250"
                alt="Building tiles display"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src="/images/WTFcement.jpg?height=200&width=250"
                alt="Cement and materials"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src="/images/pigments.jpg?height=200&width=250"
                alt="Stamping pigments"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src="/images/vitalia.jpg?height=200&width=250"
                alt="Construction chemicals"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
