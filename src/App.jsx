import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Register from './component/Form/Register';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import SignupPage from './component/Form/Signup';
import WeatherDashboard from './component/Weather/WeatherDahboard';
import RestaurantPage from './component/Restaurant/RestaurantPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/weather" element={<WeatherDashboard />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
