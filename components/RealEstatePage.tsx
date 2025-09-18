
"use client";
import React from "react";
import Image from "next/image";
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
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


const formSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name must be 50 characters or less"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name must be 50 characters or less"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  preferredLocation: z.string().min(1, "Please select a location"),
  propertyType: z.string().min(1, "Please select a property type"),
  bathrooms: z.string().min(1, "Please select number of bathrooms"),
  bedrooms: z.string().min(1, "Please select number of bedrooms"),
  budget: z.string().min(1, "Please select a budget"),
  contactMethod: z.boolean().refine((val) => val === true, {
    message: "You must select the contact method",
  }),
  message: z.string().max(500, "Message must be 500 characters or less").optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms of Use and Privacy Policy",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function RealEstatePage() {
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      preferredLocation: "",
      propertyType: "",
      bathrooms: "",
      bedrooms: "",
      budget: "",
      contactMethod: false,
      message: "",
      terms: false,
    },
  });

 
  const onSubmit = (data: FormData) => {
    console.log("Form submitted with data:", data);
   
  };

  return (
    <div className="min-h-screen bg-gray-900">
    
      <div className="bg-gray-900 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
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
            {/* Property Card 1 */}
            <Card className="bg-gray-800 border-gray-700 overflow-hidden">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
                  alt="Seaside Serenity Villa"
                  width={2075}
                  height={600}
                  className="w-full h-48 object-cover"
                  unoptimized
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

            {/* Property Card 2 */}
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

            {/* Property Card 3 */}
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

      {/* Section 2*/}
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

          {/* Form Card */}
          <Card className="bg-gray-800 border-gray-700 p-8">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* First Row - Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      First Name
                    </label>
                    <Controller
                      name="firstName"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          placeholder="Enter First Name"
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      )}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      Last Name
                    </label>
                    <Controller
                      name="lastName"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          placeholder="Enter Last Name"
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      )}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      Email
                    </label>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="email"
                          placeholder="Enter your Email"
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      )}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      Phone
                    </label>
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          placeholder="Enter Phone Number"
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      )}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      Preferred Location
                    </label>
                    <Controller
                      name="preferredLocation"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <SelectValue placeholder="Select Location" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-700 border-gray-600">
                            <SelectItem value="new-york">New York</SelectItem>
                            <SelectItem value="los-angeles">Los Angeles</SelectItem>
                            <SelectItem value="miami">Miami</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.preferredLocation && (
                      <p className="text-red-500 text-sm mt-1">{errors.preferredLocation.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      Property Type
                    </label>
                    <Controller
                      name="propertyType"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <SelectValue placeholder="Select Property Type" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-700 border-gray-600">
                            <SelectItem value="villa">Villa</SelectItem>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="townhouse">Townhouse</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.propertyType && (
                      <p className="text-red-500 text-sm mt-1">{errors.propertyType.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      No. of Bathrooms
                    </label>
                    <Controller
                      name="bathrooms"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <SelectValue placeholder="Select No of Bathroom" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-700 border-gray-600">
                            <SelectItem value="1">1 Bathroom</SelectItem>
                            <SelectItem value="2">2 Bathrooms</SelectItem>
                            <SelectItem value="3">3 Bathrooms</SelectItem>
                            <SelectItem value="4">4+ Bathrooms</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.bathrooms && (
                      <p className="text-red-500 text-sm mt-1">{errors.bathrooms.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      No. of Bedrooms
                    </label>
                    <Controller
                      name="bedrooms"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <SelectValue placeholder="Select No of Bedrooms" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-700 border-gray-600">
                            <SelectItem value="1">1 Bedroom</SelectItem>
                            <SelectItem value="2">2 Bedrooms</SelectItem>
                            <SelectItem value="3">3 Bedrooms</SelectItem>
                            <SelectItem value="4">4+ Bedrooms</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.bedrooms && (
                      <p className="text-red-500 text-sm mt-1">{errors.bedrooms.message}</p>
                    )}
                  </div>
                </div>

               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      Budget
                    </label>
                    <Controller
                      name="budget"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <SelectValue placeholder="Select Budget" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-700 border-gray-600">
                            <SelectItem value="under-500k">Under $500K</SelectItem>
                            <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                            <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                            <SelectItem value="over-2m">Over $2M</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.budget && (
                      <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium block mb-3">
                      Preferred Contact Method
                    </label>
                    <div className="flex items-center space-x-3 pt-2">
                      <Controller
                        name="contactMethod"
                        control={control}
                        render={({ field }) => (
                          <Checkbox
                            id="call"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-gray-500 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                          />
                        )}
                      />
                      <Phone size={16} className="text-gray-400" />
                      <label
                        htmlFor="call"
                        className="text-gray-300 text-sm cursor-pointer"
                      >
                        Call
                      </label>
                    </div>
                    {errors.contactMethod && (
                      <p className="text-red-500 text-sm mt-1">{errors.contactMethod.message}</p>
                    )}
                  </div>
                </div>

               
                <div>
                  <label className="text-white text-sm font-medium block mb-3">
                    Message
                  </label>
                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        placeholder="Enter your Message here.."
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                    )}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

               
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start space-x-3">
                    <Controller
                      name="terms"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          id="terms"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-gray-500 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 mt-0.5"
                        />
                      )}
                    />
                    <label
                      htmlFor="terms"
                      className="text-gray-300 text-sm cursor-pointer leading-relaxed"
                    >
                      I agree with Terms of Use and Privacy Policy
                    </label>
                  </div>
                  {errors.terms && (
                    <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>
                  )}
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium"
                  >
                    Send Your Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}