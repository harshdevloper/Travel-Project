import React, { useState, useEffect } from 'react';
import { Star, MapPin, Clock, Phone, X, Search } from 'lucide-react';

const RestaurantPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/restaurants/getAllrestaurants');
      const data = await response.json();
      setRestaurants(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const fetchRestaurantById = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/restaurants/restaurants/${id}`);
      const data = await response.json();
      setSelectedRestaurant(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mb-4" />
        <p className="text-xl text-gray-600 font-semibold">Discovering restaurants...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-red-50 p-6 rounded-lg shadow-sm">
          <p className="text-red-600 text-lg font-medium">Unable to load restaurants: {error}</p>
          <button 
            onClick={fetchRestaurants}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Local Restaurants</h1>
          <p className="text-xl text-gray-600 mb-8">Discover the best dining experiences in your area</p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search restaurants by name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 pl-12 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant._id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => fetchRestaurantById(restaurant._id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={restaurant.restaurantImage || "http://localhost:5000/api/v1//restaurants/"}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h2 className="text-white text-xl font-bold">{restaurant.name}</h2>
                  {/* Display Rating in Grid */}
                  <div className="flex items-center">
                    {[...Array(restaurant.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4 line-clamp-2 h-12">
                  {restaurant.description}
                </p>
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{restaurant.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed View Modal */}
        {selectedRestaurant && (
          <div 
            className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            onClick={() => setSelectedRestaurant(null)}
          >
            <div 
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedRestaurant.restaurantImage || "/api/placeholder/400/320"}
                  alt={selectedRestaurant.name}
                  className="w-full h-72 object-cover"
                />
                <button 
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
                  onClick={() => setSelectedRestaurant(null)}
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-800">
                    {selectedRestaurant.name}
                  </h2>
                  <div className="flex items-center">
                    {[...Array(selectedRestaurant.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedRestaurant.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                    <span>{selectedRestaurant.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 mr-3 text-blue-500" />
                    <span>Open: 9:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-5 h-5 mr-3 text-blue-500" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantPage;
