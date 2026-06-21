import { Link } from 'react-router-dom';
import { Flame, Sparkles, Heart, Star, ArrowRight, MessageSquare, Palette, Gift, ShoppingBag, Mail } from 'lucide-react';

export default function Home() {
  const brandColor = '#863253'; // Primary Brand Color

  const services = [
    {
      title: "Handcrafted Candle Making",
      description: "Discover our passion for creating custom-made candles that fill your home with warmth and delightful aromas. Each candle is carefully poured with attention to detail and quality ingredients.",
      icon: <Palette size={48} className={`text-[${brandColor}]`} />,
      link: "/services"
    }
  ];

  const testimonials = [
    {
      quote: "The services provided by Jenny's Candles completely transformed our operations. Their expertise in Candle Making is exceptional.",
      author: "Sarah Jenkins, CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&q=80" // General Workspace/Tech: member/portrait
    },
    {
      quote: "Unbelievable responsiveness and attention to detail. Highly recommended for any serious business.",
      author: "Marcus Vance, Director",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=80&q=80" // General Workspace/Tech: creative workspace team (can be used for portrait)
    }
  ];

  const unsplashImages = {
    hero: 'https://images.unsplash.com/photo-1603006905-53a99e2b61db?auto=format&fit=crop&w=1400&q=80', // candle glow
    about: 'https://images.unsplash.com/photo-1602872030268-b3d4f29e2467?auto=format&fit=crop&w=800&q=80', // hand poured candle maker
    craft: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80', // aromatic candle oils - currently not used directly in a section, but good to have
    wellness: 'https://images.unsplash.com/photo-1616037064883-fa496841249b?auto=format&fit=crop&w=800&q=80', // candles and flowers - currently not used directly in a section, but good to have
  };


  return (
    <div className="min-h-screen bg-amber-50 text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <img
          src={unsplashImages.hero}
          alt="Cozy candle glow illuminating a room with warm ambiance"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div> {/* Darker gradient for text */}
        <div className="relative z-10 p-6 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-lg leading-tight">
            Handcrafted Candles that Create Moments
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light drop-shadow-md">
            At Jenny's Candles, we craft more than just scents; we craft comfort, relaxation, and connection for your home in Randburg, Gauteng.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/shop"
              className={`inline-flex items-center justify-center px-8 py-4 bg-[${brandColor}] text-white font-semibold text-lg rounded-full shadow-lg hover:bg-[${brandColor}]/90 transition-all duration-300 transform hover:-translate-y-1`}
            >
              Shop Our Collection <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-full shadow-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
            >
              Discover Our Craft <Sparkles className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition / Intro Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Transform Your Home with Jenny's Candles
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          We believe a home should be a sanctuary. That's why we create handcrafted candles designed to do more than just scent a room. They create moments of comfort, relaxation, and connection. Using carefully selected fragrances and quality materials, our candles help you transform your space into a place you love to be in.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-[${brandColor}]">
            <div className="flex flex-col items-center">
                <Flame size={50} className="mb-2" />
                <span className="font-semibold text-lg text-gray-800">Cozy Ambiance</span>
            </div>
            <div className="flex flex-col items-center">
                <Heart size={50} className="mb-2" />
                <span className="font-semibold text-lg text-gray-800">Heartfelt Comfort</span>
            </div>
            <div className="flex flex-col items-center">
                <Sparkles size={50} className="mb-2" />
                <span className="font-semibold text-lg text-gray-800">Artisan Quality</span>
            </div>
        </div>
      </section>

      {/* About Us / Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Our Passion for the Perfect Glow
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nestled in Randburg, Gauteng, Jenny's Candles was born from a simple desire: to bring genuine warmth and delightful aromas into every home. We pour our hearts into every candle, selecting premium waxes, natural wicks, and unique fragrance oils that evoke serenity and joy.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              It’s more than just a product; it’s a craft refined with love, ensuring each flickering flame creates an unforgettable experience for you and your loved ones. Experience the Jenny's Candles difference.
            </p>
            <Link
              to="/contact"
              className={`inline-flex items-center px-8 py-3 bg-[${brandColor}] text-white font-semibold rounded-full shadow-md hover:bg-[${brandColor}]/90 transition-all duration-300`}
            >
              Get in Touch <MessageSquare className="ml-2" size={20} />
            </Link>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={unsplashImages.about}
              alt="Hands pouring wax into a candle mold, showing the candle making process"
              className="rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-500 w-full max-w-lg object-cover h-96"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Signature Craft
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Experience the dedication and artistry that goes into every Jenny's Candle. We offer exceptional custom candle making services.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-1 lg:grid-cols-1 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-amber-50 rounded-2xl p-8 shadow-lg border-b-4 border-[${brandColor}] flex flex-col items-center text-center transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="mb-6 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{service.description}</p>
              <Link
                to={service.link}
                className={`inline-flex items-center px-6 py-3 bg-[${brandColor}] text-white font-semibold rounded-full shadow-md hover:bg-[${brandColor}]/90 transition-all duration-300`}
              >
                Learn More <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process / Craftsmanship Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-100">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            The Art of Jenny's Candles
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our candles are a symphony of carefully chosen elements, crafted with intention and a sprinkle of magic.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl p-8 shadow-xl flex flex-col items-center text-center group transform hover:-translate-y-2 transition-transform duration-300">
            <Gift size={60} className={`text-[${brandColor}] mb-6 group-hover:scale-110 transition-transform`} />
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Select Finest Materials</h3>
            <p className="text-gray-700">We source premium waxes, lead-free wicks, and exquisite fragrance oils for a clean, long-lasting burn.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl flex flex-col items-center text-center group transform hover:-translate-y-2 transition-transform duration-300">
            <Palette size={60} className={`text-[${brandColor}] mb-6 group-hover:scale-110 transition-transform`} />
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Hand-Poured Perfection</h3>
            <p className="text-gray-700">Each candle is meticulously hand-poured in Randburg, ensuring consistency and a beautiful finish.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl flex flex-col items-center text-center group transform hover:-translate-y-2 transition-transform duration-300">
            <Flame size={60} className={`text-[${brandColor}] mb-6 group-hover:scale-110 transition-transform`} />
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Curated for Your Home</h3>
            <p className="text-gray-700">From classic scents to unique blends, our candles are designed to complement your home's ambiance.</p>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-amber-50 p-8 rounded-3xl shadow-lg border-t-4 border-[${brandColor}] hover:shadow-xl transition-shadow duration-300"
              >
                <Star size={24} className={`text-amber-500 mb-4 inline-block mr-1`} />
                <Star size={24} className={`text-amber-500 mb-4 inline-block mr-1`} />
                <Star size={24} className={`text-amber-500 mb-4 inline-block mr-1`} />
                <Star size={24} className={`text-amber-500 mb-4 inline-block mr-1`} />
                <Star size={24} className={`text-amber-500 mb-4 inline-block`} />
                <p className="text-lg italic text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[${brandColor}]"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[${brandColor}] to-[${brandColor}]/90 text-white text-center`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Light Up Your Home?
          </h2>
          <p className="text-xl md:text-2xl mb-10 font-light">
            Explore our handcrafted collection or connect with us to create your custom candle experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/shop"
              className={`inline-flex items-center justify-center px-10 py-4 bg-white text-[${brandColor}] font-semibold text-lg rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1`}
            >
              Browse Candles <ShoppingBag className="ml-2" size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white font-semibold text-lg rounded-full shadow-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Us <Mail className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}