import React, { useState } from 'react';
import { Upload, User, Mail, Lock, Phone, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phonenumber: '',
    address: '',
    ProfilePhoto: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      ProfilePhoto: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('phonenumber', formData.phonenumber);
    data.append('address', formData.address);
    data.append('ProfilePhoto', formData.ProfilePhoto);

    try {
      const response = await axios.post('http://localhost:5000/api/v1/user/register', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Registration successful:', response.data);

      // Clear the form fields after successful registration
      setFormData({
        fullName: '',
        email: '',
        password: '',
        phonenumber: '',
        address: '',
        ProfilePhoto: null,
      });

      // Delay navigate to ensure form data reset before redirect
      setTimeout(() => navigate('/login'), 100);

    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Create an Account</h2>
        <p className="text-center text-gray-500 mb-4">Enter your information to register</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="phonenumber"
                name="phonenumber"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                value={formData.phonenumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="address"
                name="address"
                type="text"
                placeholder="123 Main St, City, Country"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="ProfilePhoto" className="block text-sm font-medium text-gray-700">Profile Photo</label>
            <div className="mt-1 flex items-center">
              <label className="w-full flex flex-col items-center px-4 py-6 bg-gray-50 text-gray-700 rounded-lg shadow-lg tracking-wide uppercase border border-dashed cursor-pointer hover:bg-gray-100">
                <Upload className="h-6 w-6 mb-2 text-gray-500" />
                <span className="text-sm text-gray-500">Click to upload</span>
                <input
                  id="ProfilePhoto"
                  name="ProfilePhoto"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
            Register
          </button>

          <p className="text-center text-sm mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
