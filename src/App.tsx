import React, { useState } from 'react';
import { Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';

export const HeroKegLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 120" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Shield Outline */}
    <path 
      d="M 12 25 L 50 15 L 88 25 L 88 65 C 88 95, 50 112, 50 112 C 50 112, 12 95, 12 65 Z" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="5" 
      strokeLinejoin="round" 
    />
    
    {/* Keg Bump */}
    <rect x="43" y="29" width="14" height="4" rx="1" fill="currentColor" />
    
    {/* Keg Top */}
    <path 
      d="M 32 46 C 32 34, 68 34, 68 46 L 68 47 L 32 47 Z M 42 37 L 58 37 L 58 41 L 42 41 Z" 
      fill="currentColor" 
      fillRule="evenodd"
    />
    
    {/* Keg Middle */}
    <rect x="31" y="50" width="38" height="26" rx="1.5" fill="currentColor" />
    
    {/* Tap */}
    <path d="M 69 61 L 76 61 L 76 64 L 69 64 Z" fill="currentColor" />
    <path d="M 74 62 L 78 62 L 77 70 L 75 70 Z" fill="currentColor" />
    <path d="M 75 60 L 77 60 L 78 52 L 74 52 Z" fill="currentColor" />
    
    {/* Keg Bottom */}
    <path d="M 32 79 L 68 79 L 68 86 C 68 93, 32 93, 32 86 Z" fill="currentColor" />
  </svg>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'contact'>('home');

  const scrollToWhyChooseUs = () => {
    setCurrentPage('home');
    setTimeout(() => {
      document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-blue-100">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              <HeroKegLogo className="h-12 w-12 text-[#183346]" />
              <div className="leading-tight">
                <div className="font-bold text-xl tracking-tight text-slate-900">HERO KEG</div>
                <div className="text-[0.6rem] font-semibold text-slate-500 tracking-wider">SERVICE AND TRADING PLC</div>
              </div>
            </div>

            {/* Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`text-sm font-medium transition-colors pb-1 border-b-2 ${
                  currentPage === 'home' 
                    ? 'text-slate-900 border-slate-900' 
                    : 'text-slate-600 hover:text-slate-900 border-transparent'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className={`text-sm font-medium transition-colors pb-1 border-b-2 ${
                  currentPage === 'about' 
                    ? 'text-slate-900 border-slate-900' 
                    : 'text-slate-600 hover:text-slate-900 border-transparent'
                }`}
              >
                About Us
              </button>
              <button 
                onClick={() => setCurrentPage('services')}
                className={`text-sm font-medium transition-colors pb-1 border-b-2 ${
                  currentPage === 'services' 
                    ? 'text-slate-900 border-slate-900' 
                    : 'text-slate-600 hover:text-slate-900 border-transparent'
                }`}
              >
                Services
              </button>
              <button 
                onClick={scrollToWhyChooseUs}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors border-b-2 border-transparent pb-1"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className={`text-sm font-medium transition-colors pb-1 border-b-2 ${
                  currentPage === 'contact' 
                    ? 'text-slate-900 border-slate-900' 
                    : 'text-slate-600 hover:text-slate-900 border-transparent'
                }`}
              >Contact Us</button>
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <button className="bg-[#C5A059] text-white text-sm font-semibold px-6 py-3 rounded-sm hover:bg-[#a38043] transition-colors uppercase tracking-wide">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {currentPage === 'home' ? <Home /> : currentPage === 'about' ? <AboutUs /> : currentPage === 'contact' ? <ContactUs /> : <Services />}
      </main>

      {/* Footer */}
      <footer className="bg-[#111827] pt-16 pb-8 text-white border-t-4 border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Col 1 */}
            <div>
              <div 
                className="flex items-center gap-2 mb-6 cursor-pointer"
                onClick={() => setCurrentPage('home')}
              >
                <HeroKegLogo className="h-12 w-12 text-white" />
                <div className="leading-tight">
                  <div className="font-bold text-xl tracking-tight text-white">HERO KEG</div>
                  <div className="text-[0.6rem] font-semibold text-slate-400 tracking-wider">SERVICE AND TRADING PLC</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Professional keg maintenance, sanitation, repair, and genuine parts solutions for breweries and draught beverage operations across Ethiopia.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><button onClick={() => setCurrentPage('home')} className="text-sm text-slate-400 hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="text-sm text-slate-400 hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => setCurrentPage('services')} className="text-sm text-slate-400 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={scrollToWhyChooseUs} className="text-sm text-slate-400 hover:text-white transition-colors">Why Choose Us</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="text-sm text-slate-400 hover:text-white transition-colors">Contact Us</button></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li><button className="text-sm text-slate-400 hover:text-white transition-colors">Keg Sanitation & Cleaning</button></li>
                <li><button className="text-sm text-slate-400 hover:text-white transition-colors">Structural Repair & Welding</button></li>
                <li><button className="text-sm text-slate-400 hover:text-white transition-colors">Valve Maintenance & Replacement</button></li>
                <li><button className="text-sm text-slate-400 hover:text-white transition-colors">Pressure & Leak Testing</button></li>
                <li><button className="text-sm text-slate-400 hover:text-white transition-colors">Genuine Spare Parts Supply</button></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-slate-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-400 leading-relaxed">Addis Ababa, Ethiopia<br/>Industrial Zone, Block 4B</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-slate-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-slate-400">+251 911 123456</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-slate-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-slate-400">info@herokeg.com</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-500">
              © 2026 Hero Keg Service and Trading PLC. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
