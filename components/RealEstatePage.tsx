import React from "react";
import Image from "next/image"; // Import Image from next/image
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Bath, Bed, Building, Phone } from "lucide-react";

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-gray-900">
    
      <div className="bg-gray-900 px-6 py-16">
        <div className="max-w-6xl mx-auto">
        
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div>
              <h2 className="text-white text-4xl font-bold mb-4">
                Featured Properties
              </h2>
              <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
                Explore our handpicked selection of featured properties. Each
                listing offers a glimpse into exceptional homes and investments
                available through Estatein.
              </p>
            </div>
            <Button className="bg-transparent border border-gray-600 text-white hover:bg-gray-800 px-6 py-2 mt-4 md:mt-0">
              View All Properties
            </Button>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           
            <Card className="bg-gray-800 border-gray-700 overflow-hidden">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
                  alt="Seaside Serenity Villa"
                  width={2075}
                  height={600}
                  className="w-full h-48 object-cover"
                  unoptimized // Use unoptimized for external images
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-white font-semibold text-xl mb-3">
                  Seaside Serenity Villa
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban
                  location...
                  <span className="text-blue-400 cursor-pointer hover:underline ml-1">
                    Read More
                  </span>
                </p>
                <div className="flex items-center gap-6 mb-6 text-gray-300 text-sm">
                  <div className="flex items-center gap-2">
                    <Bed size={16} />
                    <span>4-Bedroom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath size={16} />
                    <span>3-Bathroom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building size={16} />
                    <span>Villa</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 text-sm">Price</span>
                    <div className="text-white font-bold text-2xl">$550,000</div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">
                    View Property Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            
            <Card className="bg-gray-800 border-gray-700 overflow-hidden">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Metropolitan Haven"
                  width={2070}
                  height={600}
                  className="w-full h-48 object-cover"
                  unoptimized
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-white font-semibold text-xl mb-3">
                  Metropolitan Haven
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  A chic and fully-furnished 2-bedroom apartment with panoramic
                  city views...
                  <span className="text-blue-400 cursor-pointer hover:underline ml-1">
                    Read More
                  </span>
                </p>
                <div className="flex items-center gap-6 mb-6 text-gray-300 text-sm">
                  <div className="flex items-center gap-2">
                    <Bed size={16} />
                    <span>2-Bedroom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath size={16} />
                    <span>2-Bathroom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building size={16} />
                    <span>Apartment</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 text-sm">Price</span>
                    <div className="text-white font-bold text-2xl">$325,000</div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">
                    View Property Details
                  </Button>
                </div>
              </CardContent>
            </Card>

           
            <Card className="bg-gray-800 border-gray-700 overflow-hidden">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Rustic Retreat Cottage"
                  width={2070}
                  height={600}
                  className="w-full h-48 object-cover"
                  unoptimized
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-white font-semibold text-xl mb-3">
                  Rustic Retreat Cottage
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  An elegant 3-bedroom, 2.5-bathroom townhouse in a gated
                  community...
                  <span className="text-blue-400 cursor-pointer hover:underline ml-1">
                    Read More
                  </span>
                </p>
                <div className="flex items-center gap-6 mb-6 text-gray-300 text-sm">
                  <div className="flex items-center gap-2">
                    <Bed size={16} />
                    <span>3-Bedroom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath size={16} />
                    <span>2.5-Bathroom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building size={16} />
                    <span>Townhouse</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 text-sm">Price</span>
                    <div className="text-white font-bold text-2xl">$425,000</div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">
                    View Property Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

     
      <div className="bg-gray-900 px-6 py-16 border-t border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-white text-4xl font-bold mb-4">
              Let&apos;s Make it Happen
            </h2>
            <p className="text-gray-400 text-base max-w-3xl leading-relaxed">
              Ready to take the first step toward your dream property? Fill out
              the form below, and our real estate wizards will work their magic to
              find your perfect match. Don&apos;t wait; let&apos;s embark on this
              exciting journey together.
            </p>
          </div>

        
          <Card className="bg-gray-800 border-gray-700 p-8">
            <CardContent className="p-0">
              <div className="space-y-8">
                {/* First Row - Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      Phone
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Phone Number"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

               
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      Preferred Location
                    </label>
                    <Select>
                      <SelectTrigger className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <SelectValue
                          placeholder="Select Location"
                          className="text-gray-500"
                        />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem
                          value="new-york"
                          className="text-white hover:bg-gray-600"
                        >
                          New York
                        </SelectItem>
                        <SelectItem
                          value="los-angeles"
                          className="text-white hover:bg-gray-600"
                        >
                          Los Angeles
                        </SelectItem>
                        <SelectItem
                          value="miami"
                          className="text-white hover:bg-gray-600"
                        >
                          Miami
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      Property Type
                    </label>
                    <Select>
                      <SelectTrigger className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <SelectValue
                          placeholder="Select Property Type"
                          className="text-gray-500"
                        />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem
                          value="villa"
                          className="text-white hover:bg-gray-600"
                        >
                          Villa
                        </SelectItem>
                        <SelectItem
                          value="apartment"
                          className="text-white hover:bg-gray-600"
                        >
                          Apartment
                        </SelectItem>
                        <SelectItem
                          value="townhouse"
                          className="text-white hover:bg-gray-600"
                        >
                          Townhouse
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      No. of Bathrooms
                    </label>
                    <Select>
                      <SelectTrigger className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <SelectValue
                          placeholder="Select No of Bathroom"
                          className="text-gray-500"
                        />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem
                          value="1"
                          className="text-white hover:bg-gray-600"
                        >
                          1 Bathroom
                        </SelectItem>
                        <SelectItem
                          value="2"
                          className="text-white hover:bg-gray-600"
                        >
                          2 Bathrooms
                        </SelectItem>
                        <SelectItem
                          value="3"
                          className="text-white hover:bg-gray-600"
                        >
                          3 Bathrooms
                        </SelectItem>
                        <SelectItem
                          value="4"
                          className="text-white hover:bg-gray-600"
                        >
                          4+ Bathrooms
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      No. of Bedrooms
                    </label>
                    <Select>
                      <SelectTrigger className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <SelectValue
                          placeholder="Select No of Bedrooms"
                          className="text-gray-500"
                        />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem
                          value="1"
                          className="text-white hover:bg-gray-600"
                        >
                          1 Bedroom
                        </SelectItem>
                        <SelectItem
                          value="2"
                          className="text-white hover:bg-gray-600"
                        >
                          2 Bedrooms
                        </SelectItem>
                        <SelectItem
                          value="3"
                          className="text-white hover:bg-gray-600"
                        >
                          3 Bedrooms
                        </SelectItem>
                        <SelectItem
                          value="4"
                          className="text-white hover:bg-gray-600"
                        >
                          4+ Bedrooms
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      Budget
                    </label>
                    <Select>
                      <SelectTrigger className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <SelectValue
                          placeholder="Select Budget"
                          className="text-gray-500"
                        />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem
                          value="under-500k"
                          className="text-white hover:bg-gray-600"
                        >
                          Under $500K
                        </SelectItem>
                        <SelectItem
                          value="500k-1m"
                          className="text-white hover:bg-gray-600"
                        >
                          $500K - $1M
                        </SelectItem>
                        <SelectItem
                          value="1m-2m"
                          className="text-white hover:bg-gray-600"
                        >
                          $1M - $2M
                        </SelectItem>
                        <SelectItem
                          value="over-2m"
                          className="text-white hover:bg-gray-600"
                        >
                          Over $2M
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      Preferred Contact Method
                    </label>
                    <div className="flex items-center space-x-3 pt-2">
                      <Checkbox
                        id="call"
                        className="border-gray-500 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                      />
                      <Phone size={16} className="text-gray-400" />
                      <label
                        htmlFor="call"
                        className="text-gray-300 text-sm cursor-pointer"
                      >
                        Call
                      </label>
                    </div>
                  </div>
                </div>

                
                <div>
                  <label className="text-white text-sm font-medium block mb-3">
                    Message
                  </label>
                  <textarea
                    placeholder="Enter your Message here.."
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      className="border-gray-500 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 mt-0.5"
                    />
                    <label
                      htmlFor="terms"
                      className="text-gray-300 text-sm cursor-pointer leading-relaxed"
                    >
                      I agree with Terms of Use and Privacy Policy
                    </label>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium">
                    Send Your Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
