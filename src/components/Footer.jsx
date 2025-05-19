import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200">
      {/* Newsletter Section */}
      <div className="bg-indigo-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white">Subscribe to our Newsletter</h3>
              <p className="text-indigo-100">Get the latest updates, deals and exclusive offers</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/5">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
                <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-r-lg font-medium transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;