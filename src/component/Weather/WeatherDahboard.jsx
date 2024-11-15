import React, { useState } from 'react';
import axios from 'axios';
import { SunIcon, CloudRainIcon, WindIcon, DropletIcon } from 'lucide-react';

// Create axios instance with base URL
const api = axios.create({
    baseURL: 'http://localhost:5000', // Update this with your backend URL
    timeout: 10000,
});

const WeatherDashboard = () => {
    const [city, setCity] = useState('');
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeatherData = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const [currentResponse, forecastResponse] = await Promise.all([
                api.get(`/api/v1/weather/current`, {
                    params: { city: city.trim() }
                }),
                api.get(`/api/v1/weather/forecast`, {
                    params: { city: city.trim() }
                })
            ]);

            if (currentResponse.data.success && forecastResponse.data.success) {
                setCurrentWeather(currentResponse.data.data);
                setForecast(forecastResponse.data.data);
            } else {
                throw new Error('Failed to fetch weather data');
            }
        } catch (err) {
            console.error('Error fetching weather data:', err);
            setError(
                err.response?.data?.message || 
                'Failed to fetch weather data. Please check your connection and try again.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Weather Dashboard</h1>
                    <p className="mt-2 text-gray-600">Enter a city to get current weather and forecast</p>
                </div>

                {/* Search Form */}
                <form onSubmit={fetchWeatherData} className="mb-8">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter city name..."
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400"
                        >
                            {loading ? 'Loading...' : 'Search'}
                        </button>
                    </div>
                </form>

                {/* Error Message */}
                {error && (
                    <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                        <p>{error}</p>
                    </div>
                )}

                {/* Current Weather Display */}
                {currentWeather && (
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {currentWeather.name}
                                </h2>
                                <div className="mt-4 flex items-center">
                                    <span className="text-6xl font-bold text-gray-900">
                                        {Math.round(currentWeather.main.temp)}°C
                                    </span>
                                </div>
                                <p className="mt-2 text-xl text-gray-600 capitalize">
                                    {currentWeather.weather[0].description}
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center space-x-2">
                                    <DropletIcon className="text-blue-500" />
                                    <div>
                                        <p className="text-gray-500">Humidity</p>
                                        <p className="text-lg font-semibold">
                                            {currentWeather.main.humidity}%
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <WindIcon className="text-blue-500" />
                                    <div>
                                        <p className="text-gray-500">Wind Speed</p>
                                        <p className="text-lg font-semibold">
                                            {currentWeather.wind.speed} m/s
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <SunIcon className="text-blue-500" />
                                    <div>
                                        <p className="text-gray-500">High</p>
                                        <p className="text-lg font-semibold">
                                            {Math.round(currentWeather.main.temp_max)}°C
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CloudRainIcon className="text-blue-500" />
                                    <div>
                                        <p className="text-gray-500">Low</p>
                                        <p className="text-lg font-semibold">
                                            {Math.round(currentWeather.main.temp_min)}°C
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Forecast Display */}
                {forecast && (
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">5-Day Forecast</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                            {forecast.list
                                .filter((item, index) => index % 8 === 0)
                                .slice(0, 5)
                                .map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 rounded-lg p-4 text-center"
                                    >
                                        <p className="font-medium text-gray-900">
                                            {new Date(item.dt * 1000).toLocaleDateString('en-US', {
                                                weekday: 'short',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </p>
                                        <p className="text-2xl font-bold text-gray-900 my-2">
                                            {Math.round(item.main.temp)}°C
                                        </p>
                                        <p className="text-gray-600 capitalize">
                                            {item.weather[0].description}
                                        </p>
                                        <div className="mt-2 text-sm text-gray-500">
                                            <p>H: {Math.round(item.main.temp_max)}°C</p>
                                            <p>L: {Math.round(item.main.temp_min)}°C</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherDashboard;