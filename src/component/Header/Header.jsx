import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, Cloud, Menu } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [travelers, setTravelers] = useState('');

  return (
    <div className="w-full">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <Menu className="w-6 h-6 mr-4 md:hidden" />
              <h1 className="text-2xl font-bold text-blue-600">VistaIndia</h1>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">Destinations</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Trips</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Experiences</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Routes</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/weather')}
              className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              <Cloud className="w-4 h-4" />
              Check Weather
            </button>
            <button className="px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600">
              Add Listing
            </button>
            <button 
              className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700" 
              onClick={() => navigate('/register')}
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Life's an <span className="text-blue-600">adventure</span>, live it!
          </h2>
          <p className="text-gray-600 mb-8">
            Plan your perfect trip with real-time weather updates, interactive maps, and personalized routes.
          </p>

          {/* Search Card */}
          <div className="bg-white/80 backdrop-blur rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="When?"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                />
              </div>

              <div className="relative">
                <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Travelers"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                />
              </div>

              <button className="bg-orange-500 text-white rounded-lg px-6 py-2 hover:bg-orange-600 flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;