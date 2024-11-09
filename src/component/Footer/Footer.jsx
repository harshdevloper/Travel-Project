import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Shield,
  Clock
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Payment and Security Banner */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <CreditCard className="w-6 h-6 text-blue-400" />
              <div>
                <h4 className="font-semibold">Secure Payment</h4>
                <p className="text-sm text-gray-400">All major cards accepted</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-6 h-6 text-blue-400" />
              <div>
                <h4 className="font-semibold">Best Price Guarantee</h4>
                <p className="text-sm text-gray-400">Found it cheaper? We'll match it</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-3">
              <Clock className="w-6 h-6 text-blue-400" />
              <div>
                <h4 className="font-semibold">24/7 Support</h4>
                <p className="text-sm text-gray-400">Help when you need it</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">VistaIndia</h3>
            <p className="text-gray-400 mb-4">
              Making your journey memorable with real-time weather updates, 
              smart route planning, and unforgettable experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tour Packages</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Travel Guides</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Travel Insurance</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Iceland Tours</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Ireland Adventures</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Swiss Alps Trekking</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Balloon Rides</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">City Tours</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Adventure Sports</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <p className="text-sm">
                  123 Adventure Street
                  <br />Travel City, TC 12345
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <p className="text-sm">+91 1111111111</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <p className="text-sm">info@VistaIndia.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 VistaIndia. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;