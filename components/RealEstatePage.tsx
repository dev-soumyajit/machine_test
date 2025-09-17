import React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectTrigger
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Bath, Bed, Building, Phone } from "lucide-react";

export const RealEstatePage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      {/* <div className='h-4 bg-gradient-to-b fr'></div> */}
      <div className="bg-black px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-white text-3xl font-bold mb-3">
                Featured Properties
              </h2>
              <p className="text-gray-300 text-sm max-w-2xl">
                Explore our handpicked selection of featured properties. Each
                listing offers a glimpse into......
              </p>
            </div>
            <Button>View All Properties</Button>
          </div>

          {/* Property */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-black border-gray-900 overflow-hidden">
              <div className="relative">
                <div className="w-full h-48 bg-black flex items-center justify-center">
                  <div className="w-32 h-24 bg-white/90 rounded-lg flex items-center justify-center">
                    <div className="w-20 h16 bg-amber-100 rounded"></div>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="text-white font-semibold text-lg mb-2">
                  Seaside Serenity Villa
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  A stunning villa offering panoramic ocean views, private beach
                  access, and luxurious amenities for the ultimate.. Read More
                </p>
                <div className="flex items-center gap-4 mb-4 text-gray-300 text-sm">
                  <div className="flex items-center gap-1">
                    <Bed size={16} />
                    <span>4 Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={16} />
                    <span>3 Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building size={16} />
                    <span>Villa</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 text-sm">Price</span>
                    <div className="text-white font-bold text-lg">$550,000</div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    View Property Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-900 overflow-hidden">
              <div className="relative">
                <div className="w-full h-48 bg-black flex items-center justify-center">
                  <div className="w-32 h-24 bg-white/90 rounded-lg flex items-center justify-center">
                    <div className="w-20 h16 bg-amber-100 rounded"></div>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="text-white font-semibold text-lg mb-2">
                  Seaside Serenity Villa
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  A stunning villa offering panoramic ocean views, private beach
                  access, and luxurious amenities for the ultimate.. Read More
                </p>
                <div className="flex items-center gap-4 mb-4 text-gray-300 text-sm">
                  <div className="flex items-center gap-1">
                    <Bed size={16} />
                    <span>4 Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={16} />
                    <span>3 Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building size={16} />
                    <span>Villa</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 text-sm">Price</span>
                    <div className="text-white font-bold text-lg">$550,000</div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    View Property Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-900 overflow-hidden">
              <div className="relative">
                <div className="w-full h-48 bg-black flex items-center justify-center">
                  <div className="w-32 h-24 bg-white/90 rounded-lg flex items-center justify-center">
                    <div className="w-20 h16 bg-amber-100 rounded"></div>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="text-white font-semibold text-lg mb-2">
                  Seaside Serenity Villa
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  A stunning villa offering panoramic ocean views, private beach
                  access, and luxurious amenities for the ultimate.. Read More
                </p>
                <div className="flex items-center gap-4 mb-4 text-gray-300 text-sm">
                  <div className="flex items-center gap-1">
                    <Bed size={16} />
                    <span>4 Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={16} />
                    <span>3 Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building size={16} />
                    <span>Villa</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 text-sm">Price</span>
                    <div className="text-white font-bold text-lg">$550,000</div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    View Property Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-black px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-white text-3xl font-bold mb-3">
              Let&apos;s Make it happen
            </h2>
            <p className="text-gray-300 text-sm max-w-2xl">
              Ready to find your dream home? Contact us today to schedule a
              viewing or learn more about our listings. Our team of experts is
              here to help you every step of the way.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Enter your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Preferred Location
                </label>
                <Select>
                  <SelectTrigger className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <span className="text-gray-400">Select location</span>
                  </SelectTrigger>
                </Select>
              </div>
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Property Type
                </label>
                <Select>
                  <SelectTrigger className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <span className="text-gray-400">Select property type</span>
                  </SelectTrigger>
                </Select>
              </div>
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  No of Bathrooms
                </label>
                <Select>
                  <SelectTrigger className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <span className="text-gray-400">
                      Select no of bathrooms
                    </span>
                  </SelectTrigger>
                </Select>
              </div>
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  No of Bedrooms
                </label>
                <Select>
                  <SelectTrigger className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <span className="text-gray-400">Select no of bedrooms</span>
                  </SelectTrigger>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 items-end">
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Budget
                </label>
                <Select>
                  <SelectTrigger className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <span className="text-gray-400">Select your budget</span>
                  </SelectTrigger>
                </Select>
              </div>
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="phone"
                      className="border-gray-700 data-[state=checked]:bg-blue-600"
                    />
                    <Phone size={16} className="text-gray-400" />
                    <label htmlFor="phone" className="text-gray-400 text-sm">
                      Enter Your Number
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
