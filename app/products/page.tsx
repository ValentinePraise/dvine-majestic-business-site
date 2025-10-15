"use client";

import { useState } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const productCategories = [
    {
      id: 1,
      name: "White & Waterproofing Cements",
      description: "Premium quality cement for all construction needs",
      products: [
        {
          name: "JK WaterProof Cements",
          image: "/images/WTFcement.jpg?height=200&width=200",
        },
        {
          name: "Crystal White Cements",
          image: "/images/crystal-cement.jpg?height=200&width=200",
        },
        {
          name: "Rock White Cements",
          image: "/images/rock-white-cement.jpg?height=200&width=200",
        },
        {
          name: "Silver Home White Cements",
          image: "/images/silver-home-white-cement.jpg?height=200&width=200",
        },
        {
          name: "TopFix Super White Cement",
          image: "/images/top-fixcement.jpg?height=200&width=200",
        },
        {
          name: "Super Fix Cement",
          image: "/images/super-fix-cement.jpg?height=200&width=200",
        },
        {
          name: "GT. Permanent Tiles Fix",
          image: "/images/Gt-tiles-fix.jpg?height=200&width=200",
        },
        {
          name: "WeberLertex Cement",
          image: "/images/weber-cement.jpg?height=200&width=200",
        },
        {
          name: "WeberJoint Grout Cement",
          image: "/images/weber-joint-cement.jpg?height=200&width=200",
        },
        {
          name: "Water Guard WaterProof Cements",
          image: "/images/water-guide-cement.jpg?height=200&width=200",
        },
        {
          name: "Joy Super White Cement",
          image: "/images/joy-super-cement.jpg?height=200&width=200",
        },
        {
          name: "Linma White Cement",
          image: "/images/linma-white-cement.jpg?height=200&width=200",
        },
        {
          name: "Joy White Cement",
          image: "/images/joy-white-cement.jpg?height=200&width=200",
        },
        {
          name: "JK White Cement",
          image: "/images/jk-white-cement.jpg?height=200&width=200",
        },
        {
          name: "Gold White Cement",
          image: "/images/Gold white cement.jpg?height=200&width=200",
        },
        {
          name: "Top Shield Powder WaterProofing Compound",
          image: "/images/top-shield-powder.jpg?height=200&width=200",
        },
        {
          name: "Kalekim Cement",
          image: "/images/kalekim-cement.jpg?height=200&width=200",
        },
        {
          name: "AK Liquid Cleanser",
          image: "/images/AK-liquid-cleanser.jpg?height=200&width=200",
        },
        {
          name: "CS Tiles Filler Cements",
          image: "/images/cs-tile-filer.jpg?height=200&width=200",
        },
        {
          name: "Linma White Cement 5kg Net Quantity",
          image: "/images/linma-white-cement-2.jpg?height=200&width=200",
        },
      ],
    },
    {
      id: 2,
      name: "Stamping Pigments & Polish",
      description: "High-quality pigments and polishing materials",
      products: [
        {
          name: "Stamp Pigments",
          image: "/images/stamp-pigments.jpg?height=200&width=200",
        },
        {
          name: "Geda Super Polish",
          image: "/images/polish.jpg?height=200&width=200",
        },
        {
          name: "Stamp Pigments",
          image: "/images/pigments.jpg?height=200&width=200",
        },
        {
          name: "Concrete Stamping Pigment",
          image: "/images/pigment1.jpg?height=200&width=200",
        },
        {
          name: "Premium Floor Polish",
          image: "/images/pigment2.jpg?height=200&width=200",
        },
        {
          name: "Stamping Release Agent",
          image: "/images/pigment3.jpg?height=200&width=200",
        },
        {
          name: "Concrete Sealer",
          image: "/images/pigment4.jpg?height=200&width=200",
        },
        {
          name: "Anti-Slip Polish",
          image: "/images/pigment6.jpg?height=200&width=200",
        },
      ],
    },
    {
      id: 3,
      name: "Local & Foreign Tiles",
      description: "Extensive collection of tiles from around the world",
      products: [
        {
          name: "High Quality tile",
          image: "/images/high-quality-tile.jpg?height=200&width=200",
        },
        {
          name: "High Quality Beautiful Tile",
          image: "/images/high-quality-beauty-tile.jpg?height=200&width=200",
        },
        {
          name: "",
          image: "/images/new-tiles1.jpg?height=200&width=200",
        },
        {
          name: "Porcelain Floor Tiles 80x80",
          image: "/images/new-tiles2.jpg?height=200&width=200",
        },
        {
          name: "Mosaic Wall Tiles",
          image: "/images/new-tiles3.jpg?height=200&width=200",
        },
        {
          name: "Granite Tiles 60x60",
          image: "/images/new-tiles4.jpg?height=200&width=200",
        },
        {
          name: "Ceramic Wall Tiles 20x30",
          image: "/images/new-tiles5.jpg?height=200&width=200",
        },
        // {
        //   name: "Vitrified Floor Tiles",
        //   image: "/placeholder.svg?height=200&width=200",
        // },
        // {
        //   name: "Designer Pattern Tiles",
        //   image: "/placeholder.svg?height=200&width=200",
        // },
        // {
        //   name: "Bathroom Wall Tiles",
        //   image: "/placeholder.svg?height=200&width=200",
        // },
        // {
        //   name: "Kitchen Backsplash Tiles",
        //   image: "/placeholder.svg?height=200&width=200",
        // },
        // {
        //   name: "Outdoor Patio Tiles",
        //   image: "/placeholder.svg?height=200&width=200",
        // },
      ],
    },
    {
      id: 4,
      name: "Building Materials & Chemicals",
      description: "Complete range of construction chemicals and materials",
      products: [
        {
          name: "Concrete Bonding Agent",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          name: "Waterproofing Membrane",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          name: "Tile Adhesive Premium",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          name: "Grout Sealer",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          name: "Concrete Admixture",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          name: "Wall Putty",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          name: "Epoxy Flooring",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          name: "Crack Filler",
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
  ];

  // Filter products based on search term
  const filteredCategories = productCategories
    .map((category) => ({
      ...category,
      products: category.products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.products.length > 0);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Animated Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in-left">
              Our Products
            </h1>
            <p className="text-xl text-blue-200 animate-slide-in-right animation-delay-300">
              Discover our comprehensive range of premium building materials and
              construction solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Animated Search and Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between animate-fade-in-up">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 transition-all duration-300 focus:scale-105"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="hover:scale-105 transition-transform duration-300"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <div className="flex border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-r-none hover:scale-105 transition-transform duration-300"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-l-none hover:scale-105 transition-transform duration-300"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredCategories.map((category, categoryIndex) => (
            <div key={category.id} className="mb-16">
              <div
                className="mb-8 animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h2>
                <p className="text-gray-600">{category.description}</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.products.map((product, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-xl transition-all duration-500 transform jukhhover:scale-105 hover:-translate-y-2 animate-fade-in-up group cursor-pointer"
                    style={{
                      animationDelay: `${categoryIndex * 200 + index * 100}ms`,
                    }}
                  >
                    <div className="aspect-square bg-gray-100 relative overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 group-hover:rotate-1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6 bg-white group-hover:bg-gray-50 transition-colors duration-300">
                      <h3 className="font-semibold text-lg text-gray-900 text-center group-hover:text-blue-900 transition-colors duration-300">
                        {product.name}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && searchTerm && (
            <div className="text-center py-16 animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-gray-600 mb-4">
                No products found
              </h3>
              <p className="text-gray-500">
                Try searching with different keywords
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Animated CTA Section */}
      <section className="py-16 bg-blue-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need More Information?
            </h2>
            <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
              Contact our experts for detailed product specifications and
              availability.
            </p>
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 transform hover:scale-110 transition-all duration-300 animate-bounce-slow"
              asChild
            >
              <a href="/contact">Contact Our Team</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
