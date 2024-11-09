import React from "react";
import {
  Star,
  MapPin,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const CategoryCard = ({ icon: Icon, title }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <Icon className="w-8 h-8 text-blue-600 mb-3" />
    <h3 className="text-lg font-semibold">{title}</h3>
  </div>
);

const TourCard = ({ image, title, location, price, rating }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div className="relative h-48">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-semibold">
        ${price}
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm">{rating}</span>
        </div>
      </div>
      <div className="flex items-center mt-2 text-gray-600">
        <MapPin className="w-4 h-4 mr-1" />
        <span className="text-sm">{location}</span>
      </div>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Featured Destinations */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Destinations</h2>
            <div className="flex gap-2">
              <button className="p-2 rounded-full bg-white shadow hover:bg-gray-50">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="p-2 rounded-full bg-white shadow hover:bg-gray-50">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TourCard
              image="https://wallpapers.com/images/hd/travel-hd-pi6mi8ghw8tpdtqu.jpg"
              title="Iceland Adventure"
              location="Reykjavik, Iceland"
              price="1,299"
              rating="4.9"
            />
            <TourCard
              image="https://media.istockphoto.com/id/945996820/photo/glenmacnass-valley-county-wicklow-ireland.jpg?s=612x612&w=0&k=20&c=TWYVLJm-epMtunMpn77Bhr5uj5O2ZI7Si5amaCN_6bc="
              title="Irish Countryside"
              location="Dublin, Ireland"
              price="899"
              rating="4.8"
            />
            <TourCard
              image="https://img.freepik.com/premium-photo/conquering-peaks-inspiring-photo-hiker-pushing-through-challenge-mountain-hike-hiking-background-wallpaper-generative-ai_438099-21158.jpg"
              title="Mountain Hiking"
              location="Swiss Alps"
              price="799"
              rating="4.7"
            />
          </div>
        </div>
      </section>

      {/* Travel Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Explore by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: MapPin, title: "Adventures" },
              { icon: Calendar, title: "Tours" },
              { icon: Clock, title: "Day Trips" },
            ].map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-80 rounded-lg overflow-hidden group">
              <img
                src="https://img.freepik.com/premium-psd/psd-travel-banner-adventure-tours-summer-instagram-post-square-banner-template_723663-70.jpg"
                alt="Special offer 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Summer Adventure Package
                </h3>
                <p className="text-white/90 mb-4">
                  Get 20% off on selected destinations
                </p>
                <button
                  className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold 
                                 transform opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden group">
              <img
                src="https://img.freepik.com/premium-psd/psd-travel-banner-adventure-tours-summer-instagram-post-square-banner-template_723663-70.jpg"
                alt="Special offer 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Early Bird Winter Deals
                </h3>
                <p className="text-white/90 mb-4">
                  Book now and save up to 30%
                </p>
                <button
                  className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold 
                                 transform opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Travel Updates
          </h2>
          <p className="text-white/90 mb-8">
            Subscribe to our newsletter and never miss our special offers!
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg"
            />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Real-time Weather Updates
              </h3>
              <p className="text-gray-600">
                Get accurate weather forecasts for your destination
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Smart Route Planning
              </h3>
              <p className="text-gray-600">
                Optimize your itinerary with our AI-powered planner
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Get help anytime, anywhere during your journey
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
