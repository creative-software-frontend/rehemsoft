import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-pink-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-[#db2777] uppercase tracking-wide">
              REHEM SOFT
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering businesses with smart, reliable, and scalable software solutions. Grow with confidence.
            </p>
 
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-[#db2777] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#db2777] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#db2777] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#db2777] transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

 
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Product</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#db2777] transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-[#db2777] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#db2777] transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-[#db2777] transition-colors">Affiliate Program</a></li>
            </ul>
          </div>

 
           <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#db2777] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#db2777] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#db2777] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#db2777] transition-colors">Contact</a></li>
            </ul>
          </div>


          <div>
            <h4 className="font-bold text-gray-900 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#db2777] shrink-0 mt-0.5" />
                <span>Jersey City, NJ 07307,<br/>United States</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#db2777] shrink-0" />
                <span>support@rehemsoft.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#db2777] shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Rehem Soft. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-[#db2777] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#db2777] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#db2777] transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;