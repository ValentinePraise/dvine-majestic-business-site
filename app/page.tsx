"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/WTFcement.jpg", // Replace with your actual image
      title: "Premium White & Waterproofing Cements",
      description: "High-quality cement solutions for all construction needs",
    },
    {
      image: "/images/stamp-pigments.jpg", // Replace with your actual image
      title: "Stamping Pigments & Polish",
      description: "Extensive variety of premium tiles from around the world",
    },
    {
      image: "/images/local-tiles.jpg", // Replace with your actual image
      title: "Local & Foreign Tiles Collection",
      description: "Professional-grade pigments for concrete finishing",
    },
    {
      image: "/images/constructionchemical.jpg", // Replace with your actual image
      title: "Building Materials & Chemicals",
      description: "Complete range of construction chemicals and materials",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const features = [
    "Premium Quality Building Materials",
    "Foreign & Local Tiles Collection",
    "Waterproofing Solutions",
    "Competitive Pricing",
    "Reliable Supply Chain",
    "Expert Consultation",
  ];

  const productCategories = [
    {
      title: "White & Waterproofing Cements",
      description: "High-quality cement solutions for all construction needs",
      image: "/images/WTFcement.jpg?height=200&width=300",
    },
    {
      title: "Stamping Pigments & Polish",
      description: "Premium pigments and polishing materials",
      image: "/images/stamp-pigments.jpg?height=200&width=300",
    },
    {
      title: "Local & Foreign Tiles",
      description: "Extensive collection of tiles from around the world",
      image: "/images/local-tiles.jpg?height=200&width=300",
    },
    {
      title: "Building Materials & Chemicals",
      description: "Complete range of construction chemicals and materials",
      image: "/images/constructionchemical.jpg?height=200&width=300",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Slideshow Background with Images */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-700/80 z-10"></div>
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to gradient if image doesn't load
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.style.background =
                    "linear-gradient(135deg, #1e3a8a, #1e40af, #2563eb)";
                }}
              />
            </div>
          ))}
        </div>

        {/* Slideshow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-15 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                D-vine Majestic Venture Nigeria Limited
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100">
                "With God all things are possible"
              </p>
              <p className="text-lg md:text-xl mb-8 text-blue-200 max-w-3xl mx-auto">
                Your trusted partner for premium building materials, tiles, and
                construction solutions across Nigeria and beyond.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-blue-200">
                  {slides[currentSlide].description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/products">
                    View Our Products <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose D-vine Majestic Venture?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to providing the highest quality building
              materials with exceptional service and competitive prices.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
              >
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of building materials and
              construction solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* HIGHLIGHT: Using image for product categories */}
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"} // Using category.image here
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About D-vine Majestic Venture
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                D-vine Majestic Venture is an organization that focuses on the
                sales of building materials, building tiles, stamps polished
                (foreign and local), and varieties of building cements and
                chemicals.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is to be the major distributor of foreign and local
                tiles, with good quality and reliable building materials in
                Nigeria and beyond, while affording everyone accessibility of
                the materials with affordable prices.
              </p>
              <Button
                asChild
                className="bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <Building2 className="h-16 w-16 text-blue-900 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the major distributor of foreign and local tiles, with
                good quality and reliable building materials in Nigeria and
                beyond, making quality materials accessible to everyone at
                affordable prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
            Contact us today for expert consultation and competitive pricing on
            all your building material needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Call us for immediate assistance</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>Email us your requirements</span>
            </div>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all duration-300"
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>

      {/* Comprehensive Company Overview Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your complete guide to D-vine Majestic Venture - from our products
              and services to our values and customer experiences.
            </p>
          </div>

          {/* Quick Company Facts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border-l-4 border-blue-500">
              <div className="text-3xl font-bold text-blue-900 mb-2">5+</div>
              <div className="text-gray-600 font-medium">Years in Business</div>
              <div className="text-sm text-gray-500 mt-1">
                Established Excellence
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border-l-4 border-green-500">
              <div className="text-3xl font-bold text-green-900 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
              <div className="text-sm text-gray-500 mt-1">Across Nigeria</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border-l-4 border-orange-500">
              <div className="text-3xl font-bold text-orange-900 mb-2">
                1000+
              </div>
              <div className="text-gray-600 font-medium">
                Projects Completed
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Successfully Delivered
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border-l-4 border-purple-500">
              <div className="text-3xl font-bold text-purple-900 mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Customer Support</div>
              <div className="text-sm text-gray-500 mt-1">Always Available</div>
            </div>
          </div>

          {/* Detailed Product Categories with Links */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Complete Product Range
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      White & Waterproofing Cements
                    </h4>
                    <ul className="text-gray-600 space-y-2 mb-4">
                      <li>• Premium White Cement for finishing</li>
                      <li>• Waterproof Cement for wet areas</li>
                      <li>• Marine Grade for coastal projects</li>
                      <li>• Quick Setting for urgent repairs</li>
                    </ul>
                    <Link
                      href="/products"
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      View All Cement Products{" "}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Stamping Pigments & Polish
                    </h4>
                    <ul className="text-gray-600 space-y-2 mb-4">
                      <li>• Concrete Stamping Pigments (All Colors)</li>
                      <li>• Premium Floor Polish</li>
                      <li>• Release Agents & Sealers</li>
                      <li>• Anti-Slip Solutions</li>
                    </ul>
                    <Link
                      href="/products"
                      className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center"
                    >
                      Explore Pigments & Polish{" "}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Local & Foreign Tiles
                    </h4>
                    <ul className="text-gray-600 space-y-2 mb-4">
                      <li>• Italian Marble & Spanish Ceramic</li>
                      <li>• Local Terrazzo & Granite Tiles</li>
                      <li>• Porcelain & Vitrified Options</li>
                      <li>• Designer Patterns & Mosaics</li>
                    </ul>
                    <Link
                      href="/products"
                      className="text-red-600 hover:text-red-800 font-medium inline-flex items-center"
                    >
                      Browse Tile Collection{" "}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Building Materials & Chemicals
                    </h4>
                    <ul className="text-gray-600 space-y-2 mb-4">
                      <li>• Tile Adhesives & Grout Sealers</li>
                      <li>• Waterproofing Membranes</li>
                      <li>• Concrete Bonding Agents</li>
                      <li>• Epoxy Flooring Solutions</li>
                    </ul>
                    <Link
                      href="/products"
                      className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
                    >
                      See All Materials <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us - Enhanced */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Professionals Choose Us
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Guaranteed Quality
                </h4>
                <p className="text-gray-600 mb-4">
                  All products meet international standards with quality
                  certifications.
                </p>
                <Link
                  href="/about"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn About Our Standards →
                </Link>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Expert Support
                </h4>
                <p className="text-gray-600 mb-4">
                  Professional consultation from experienced construction
                  specialists.
                </p>
                <Link
                  href="/contact"
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  Get Expert Advice →
                </Link>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Reliable Supply
                </h4>
                <p className="text-gray-600 mb-4">
                  Consistent availability and timely delivery across Nigeria.
                </p>
                <Link
                  href="/contact"
                  className="text-orange-600 hover:text-orange-800 font-medium"
                >
                  Check Availability →
                </Link>
              </div>
            </div>
          </div>

          {/* Customer Success Stories Preview */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              What Our Customers Say
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Outstanding quality and service. Their waterproofing cement
                  saved our coastal project from major issues."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    Engr. Adebayo Johnson
                  </div>
                  <div className="text-gray-500 text-sm">
                    Construction Manager, Lagos
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Amazing tile collection! Found exactly what I needed for my
                  luxury hotel project. Highly recommended."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    Mrs. Folake Adeyemi
                  </div>
                  <div className="text-gray-500 text-sm">
                    Interior Designer, Abuja
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Competitive prices and reliable delivery. Perfect partner for
                  our large-scale residential projects."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    Mr. Chukwuma Okafor
                  </div>
                  <div className="text-gray-500 text-sm">
                    Property Developer, Port Harcourt
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/testimonials"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-lg"
              >
                Read All Customer Stories{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Contact Information Summary */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-200 text-lg">
                Contact us through any of these convenient methods
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="font-semibold mb-1">Call Us</div>
                <div className="text-blue-200 text-sm">+234 XXX XXX XXXX</div>
                <div className="text-blue-200 text-sm">Mon-Fri: 8AM-6PM</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="font-semibold mb-1">Email Us</div>
                <div className="text-blue-200 text-sm">
                  info@dvinemajestic.com
                </div>
                <div className="text-blue-200 text-sm">
                  Quick Response Guaranteed
                </div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div className="font-semibold mb-1">Visit Us</div>
                <div className="text-blue-200 text-sm">Lagos, Nigeria</div>
                <div className="text-blue-200 text-sm">
                  Showroom & Warehouse
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Get Complete Contact Details{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Project Today
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Join hundreds of satisfied customers who trust D-vine Majestic
              Venture for their construction needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 flex-1 font-semibold"
              >
                <Link href="/products">Browse All Products</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent flex-1 font-semibold"
              >
                {/* <Link href="/contact">Get Quote Now</Link> */}
              </Button>
            </div>
            <div className="mt-6 text-orange-100">
              <p className="text-sm">
                ✓ Free Consultation ✓ Competitive Pricing ✓ Quality Guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
