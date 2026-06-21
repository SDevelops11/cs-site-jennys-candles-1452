import { Link } from 'react-router-dom';
import { Flame, Sparkles, ShoppingBag, Gift, Palette, CheckCircle, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Candle Making",
      description: "Custom-made candles, crafted with passion and precision. From personalized gifts to bulk orders, we bring your scent dreams to life with handcrafted quality.",
      image: "https://images.unsplash.com/photo-1602872030268-b3d4f29e2467?auto=format&fit=crop&w=800&q=80",
      packages: [
        {
          name: "Starter Scent Kit",
          price: "$45",
          features: [
            "All supplies included",
            "Detailed instructions",
            "3 signature scents to choose from",
            "Perfect for beginners",
          ],
          buttonText: "Get Your Kit",
          icon: ShoppingBag,
        },
        {
          name: "Personalized Blending Session",
          price: "$95",
          features: [
            "1-on-1 consultation",
            "Premium essential oils selection",
            "Custom label design",
            "Create 2 finished candles",
          ],
          buttonText: "Book a Session",
          icon: Palette,
        },
        {
          name: "Event & Bulk Orders",
          price: "Custom Quote",
          features: [
            "Volume discounts available",
            "Custom branding options",
            "Wide scent catalog",
            "Dedicated support for your event",
          ],
          buttonText: "Request a Quote",
          icon: Gift,
        },
        {
          name: "Candle Refill & Recycling",
          price: "Starting at $20",
          features: [
            "Eco-friendly option",
            "Reduce waste, reuse your jars",
            "Choose any signature scent",
            "Quick turnaround service",
          ],
          buttonText: "Learn More",
          icon: Sparkles,
        },
      ],
    },
    // Add more services if needed, following the same structure
    // {
    //   id: 2,
    //   title: "Candle Making Workshops",
    //   description: "Join our interactive workshops to learn the art of candle crafting.",
    //   image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80",
    //   packages: [...]
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#863253] py-20 lg:py-32">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 animate-fade-in-down">
            Our <span className="text-yellow-200">Craft</span> & Services
          </h1>
          <p className="text-lg sm:text-xl text-white text-opacity-90 max-w-3xl mx-auto mb-8 animate-fade-in-up">
            At Jenny's Candles, we pour our heart into every creation. Discover our bespoke candle-making services designed to illuminate your life with warmth and fragrance.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-[#863253] bg-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Get a Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Services Catalog */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Candle Offerings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in the magic of scent and light. Browse our curated services, each crafted to deliver a unique and memorable candle experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 ease-in-out">
                <div className="md:flex">
                  <div className="md:w-1/2 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <Flame className="h-10 w-10 mb-2 text-yellow-200" />
                      <h3 className="text-3xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.packages.map((pkg, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                          <div className="flex items-center mb-3">
                            <pkg.icon className="h-6 w-6 text-[#863253] mr-3" />
                            <h4 className="text-xl font-semibold text-gray-900">{pkg.name}</h4>
                          </div>
                          <p className="text-2xl font-bold text-[#863253] mb-4">{pkg.price}</p>
                          <ul className="space-y-2 mb-6">
                            {pkg.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-gray-700">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Link
                            to="/contact"
                            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#863253] hover:bg-[#863253]/90 transition-all duration-300"
                          >
                            {pkg.buttonText}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16 lg:py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Light Up Your World?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Whether you have a custom request, need a bulk order, or want to learn more about our workshops, Jenny's Candles is here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-[#863253] bg-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Contact Jenny Today
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}