"use client";

import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";

export default function ContactPageClient() {
  const [mapType, setMapType] = useState<"google" | "openstreet">("google");

  const contactInfo = [
    {
      icon: <Phone className="h-8 w-8 text-white" />,
      title: "Phone Numbers",
      details: ["+234-9133172185","+234-8155556910."],
      description: "Call us for immediate assistance and product inquiries",
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      icon: <Mail className="h-8 w-8 text-white" />,
      title: "Email Address",
      details: ["dvinemajesticventure@gmail.com"],
      description: "Send us your inquiries and product requests",
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      icon: <MapPin className="h-8 w-8 text-white" />,
      title: "Our Location",
      details: ["Lagos, Nigeria"],
      description: "Visit our showroom and warehouse",
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-600",
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: "Business Hours",
      details: [
        "Mon - Fri: 8:00 AM - 6:00 PM",
        "Sat: 9:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
      description: "We're here when you need us",
      bgColor: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
  ];

  // Replace these coordinates with your actual company location
  const companyLocation = {
    lat: 6.5244, // Lagos latitude (replace with your exact coordinates)
    lng: 3.3792, // Lagos longitude (replace with your exact coordinates)
    address: "Your Exact Address, Lagos, Nigeria", // Replace with your actual address
    placeName: "D-vine Majestic Venture Nigeria Limited",
  };

  // Google Maps embed URL - replace with your actual address
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7891234567890!2d${companyLocation.lng}!3d${companyLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzEnMjcuOCJOIDPCsDIyJzQ1LjEiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng`;

  // OpenStreetMap embed URL
  const openStreetMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${
    companyLocation.lng - 0.01
  },${companyLocation.lat - 0.01},${companyLocation.lng + 0.01},${
    companyLocation.lat + 0.01
  }&layer=mapnik&marker=${companyLocation.lat},${companyLocation.lng}`;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in-left">
              Contact Information
            </h1>
            <p className="text-xl text-blue-200 animate-slide-in-right animation-delay-300">
              Get in touch with our team for expert consultation and competitive
              pricing on all your building material needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up border-0 bg-white overflow-hidden group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div
                    className={`w-16 h-16 ${info.bgColor} ${info.hoverColor} rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300 group-hover:scale-110 transform`}
                  >
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-gray-700 font-medium text-lg"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Company Information */}
            <div className="space-y-8 animate-slide-in-left">
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    Company Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                      D-vine Majestic Venture Nigeria Limited
                    </h4>
                    <p className="text-blue-700 mb-4 font-medium">
                      "With God all things are possible"
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Your trusted partner for premium building materials,
                      tiles, and construction solutions across Nigeria and
                      beyond. We specialize in quality building materials that
                      meet international standards while remaining accessible to
                      all.
                    </p>
                  </div>

                  <div className="border-t border-blue-200 pt-6">
                    <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      Our Specialties
                    </h4>
                    <div className="grid gap-2">
                      <div className="flex items-center space-x-3 p-2 rounded-lg bg-white/60 hover:bg-white/90 transition-colors duration-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">
                          White & Waterproofing Cements
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 rounded-lg bg-white/60 hover:bg-white/90 transition-colors duration-300">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">
                          Stamping Pigments & Polish
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 rounded-lg bg-white/60 hover:bg-white/90 transition-colors duration-300">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">
                          Local & Foreign Tiles
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 rounded-lg bg-white/60 hover:bg-white/90 transition-colors duration-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">
                          Building Materials & Chemicals
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 rounded-lg bg-white/60 hover:bg-white/90 transition-colors duration-300">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">
                          Expert Consultation Services
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 rounded-lg bg-white/60 hover:bg-white/90 transition-colors duration-300">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-gray-700">
                          Competitive Bulk Pricing
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                    Why Choose D-vine Majestic Venture?
                  </h3>
                  <div className="grid gap-4">
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors duration-300">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Premium Quality Materials
                        </p>
                        <p className="text-gray-600 text-sm">
                          All products meet international quality standards
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors duration-300">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Competitive Pricing
                        </p>
                        <p className="text-gray-600 text-sm">
                          Best prices with bulk order discounts
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors duration-300">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Expert Consultation
                        </p>
                        <p className="text-gray-600 text-sm">
                          Professional advice and recommendations
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors duration-300">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Reliable Supply Chain
                        </p>
                        <p className="text-gray-600 text-sm">
                          Consistent availability and timely delivery
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map and Location Info */}
            <div className="space-y-8 animate-slide-in-right">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-gray-900">
                      Visit Our Location
                    </CardTitle>
                    <div className="flex space-x-2">
                      <Button
                        variant={mapType === "google" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setMapType("google")}
                        className="text-xs"
                      >
                        Google
                      </Button>
                      <Button
                        variant={
                          mapType === "openstreet" ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setMapType("openstreet")}
                        className="text-xs"
                      >
                        OpenStreet
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Interactive Map */}
                  <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden relative group">
                    {mapType === "google" ? (
                      <iframe
                        src={googleMapsEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                        title="D-vine Majestic Venture Location - Google Maps"
                      />
                    ) : (
                      <iframe
                        src={openStreetMapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                        title="D-vine Majestic Venture Location - OpenStreetMap"
                      />
                    )}

                    {/* Map overlay with company info */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                      <h4 className="font-semibold text-sm text-gray-900">
                        {companyLocation.placeName}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {companyLocation.address}
                      </p>
                    </div>
                  </div>

                  {/* Map Actions */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:scale-105 transition-transform duration-300 bg-transparent"
                      asChild
                    >
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${companyLocation.lat},${companyLocation.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Open in Google Maps
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:scale-105 transition-transform duration-300 bg-transparent"
                      asChild
                    >
                      <a
                        href={`https://maps.apple.com/?q=${companyLocation.lat},${companyLocation.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Open in Apple Maps
                      </a>
                    </Button>
                  </div>

                  {/* Location Details */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Our Address</p>
                        <p className="text-gray-600">
                          {companyLocation.address}
                        </p>
                        <p className="text-gray-600">Lagos, Nigeria</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Business Hours
                        </p>
                        <p className="text-gray-600">
                          Monday - Friday: 8:00 AM - 6:00 PM
                        </p>
                        <p className="text-gray-600">
                          Saturday: 9:00 AM - 4:00 PM
                        </p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Getting Here Card */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <MapPin className="h-3 w-3 text-white" />
                    </div>
                    Getting Here
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/60 hover:bg-white/90 transition-colors duration-300">
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <p className="font-medium text-gray-900">By Car:</p>
                        <p className="text-sm">
                          Free parking available on-site for customers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/60 hover:bg-white/90 transition-colors duration-300">
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <p className="font-medium text-gray-900">
                          By Public Transport:
                        </p>
                        <p className="text-sm">
                          Accessible via major bus routes in Lagos
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/60 hover:bg-white/90 transition-colors duration-300">
                      <div className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <p className="font-medium text-gray-900">Landmarks:</p>
                        <p className="text-sm">
                          Near [Add nearby landmarks for easier navigation]
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
              Contact us today for expert consultation and competitive pricing
              on all your building material needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="/products">View Our Products</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300 bg-transparent"
                asChild
              >
                <a href="tel:+234XXXXXXXXX">Call Us Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
