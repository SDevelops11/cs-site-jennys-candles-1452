import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, User, Sparkles, Info } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! Jenny will get back to you soon.');
    // Optionally reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      enquiryType: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Connect with <span className="text-[#863253]">Jenny's Candles</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our hand-poured candles, a custom order request, or want to book a workshop, please reach out.
          </p>
        </div>

        {/* Main Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <MessageSquare className="mr-3 text-[#863253]" size={32} /> Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#863253] focus:border-[#863253] sm:text-sm"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#863253] focus:border-[#863253] sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number (Optional)
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#863253] focus:border-[#863253] sm:text-sm"
                    placeholder="012-345-6789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="enquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                  Type of Enquiry
                </label>
                <div className="relative">
                  <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <select
                    name="enquiryType"
                    id="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#863253] focus:border-[#863253] sm:text-sm appearance-none"
                  >
                    <option value="">Select an option</option>
                    <option value="Custom Order">Custom Candle Order</option>
                    <option value="Workshop Booking">Candle Making Workshop Booking</option>
                    <option value="Wholesale Inquiry">Wholesale Inquiry</option>
                    <option value="General Question">General Question</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l-.707.707L15 20l6-6-1.414-1.414L10 16.086l-4.293-4.293z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#863253] focus:border-[#863253] sm:text-sm"
                    placeholder="Tell us more about your request or question..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#863253] hover:bg-[#863253]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#863253]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details & Image Section */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Info className="mr-3 text-[#863253]" size={32} /> Our Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700 text-lg">
                  <Mail className="flex-shrink-0 mr-4 text-[#863253]" size={24} />
                  <span>jenny@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-700 text-lg">
                  <Phone className="flex-shrink-0 mr-4 text-[#863253]" size={24} />
                  <span>01223456789</span>
                </div>
                <div className="flex items-start text-gray-700 text-lg">
                  <MapPin className="flex-shrink-0 mr-4 text-[#863253] mt-1" size={24} />
                  <span>Randburg, Gauteng</span>
                </div>
              </div>
            </div>

            {/* Decorative Image */}
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 h-64 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1603006905-53a99e2b61db?auto=format&fit=crop&w=800&q=80"
                alt="Jenny's Candles workspace with materials"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-3xl font-bold">Crafting unique scents for your space.</h3>
              </div>
            </div>

             {/* Another image or CTA */}
             <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 h-64">
              <img
                src="https://images.unsplash.com/photo-1602872030268-b3d4f29e2467?auto=format&fit=crop&w=800&q=80"
                alt="Close-up of lit candles"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#863253]/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-3xl font-bold mb-2">Discover Our Collection</h3>
                <p className="text-white text-lg">Hand-poured with love, for every mood.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}