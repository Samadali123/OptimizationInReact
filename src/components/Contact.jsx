import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Panel - Contact Info */}
        <div className="bg-blue-100 p-8 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold text-blue-800">Get in Touch</h2>
          <p className="text-blue-700">We’d love to hear from you! Reach us anytime.</p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-700" />
              <span className="text-blue-700">+91 9109792700</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-700" />
              <span className="text-blue-700">samadali0125@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-700" />
              <span className="text-blue-700">Bhopal, India</span>
            </div>
          </div>
        </div>

        {/* Right Panel - Contact Form */}
        <form className="p-8 bg-white space-y-5">
          <h2 className="text-2xl font-semibold text-gray-800">Send a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
