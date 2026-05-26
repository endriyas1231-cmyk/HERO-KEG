import React from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Smartphone,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

import contactHeroImg from '../assets/images/contact_hero_1779725491927.png';
import mapBgImg from '../assets/images/map_background_1779725518254.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function ContactUs() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full aspect-[4/3] sm:aspect-video max-h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-900">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={contactHeroImg} 
            alt="Contact Us Hero" 
            className="w-full h-full object-contain lg:object-cover lg:object-[center_20%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl mt-16"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-serif text-white leading-tight mb-6">
              Contact Us
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-slate-200 leading-relaxed max-w-xl">
              We're here to support your brewery operations. Reach out
              to our team for maintenance, repairs, parts supply, or
              technical support.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Form */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Get in Touch */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="lg:col-span-4"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-serif font-bold text-[#183346] mb-6">Get in Touch</motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-600 mb-10 text-[15px] leading-relaxed">
              Whether you need a one-time service, regular
              maintenance, or technical support, our team is
              ready to help.
            </motion.p>

            <div className="space-y-8 mb-12">
              <motion.div variants={fadeInUp} className="flex items-start group">
                <div className="w-12 h-12 bg-[#183346] rounded-full flex items-center justify-center shrink-0 mr-4 group-hover:bg-[#C5A059] group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform" />
                </div>
                <div className="mt-1">
                  <h4 className="font-bold text-[#183346] mb-1 group-hover:text-[#C5A059] transition-colors">Location</h4>
                  <p className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">Bole Sub-City<br/>Addis Ababa, Ethiopia</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start group">
                <div className="w-12 h-12 bg-[#183346] rounded-full flex items-center justify-center shrink-0 mr-4 group-hover:bg-[#C5A059] group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
                </div>
                <div className="mt-1">
                  <h4 className="font-bold text-[#183346] mb-1 group-hover:text-[#C5A059] transition-colors">Phone</h4>
                  <p className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">+251 934 567 890</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start group">
                <div className="w-12 h-12 bg-[#183346] rounded-full flex items-center justify-center shrink-0 mr-4 group-hover:bg-[#C5A059] group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div className="mt-1">
                  <h4 className="font-bold text-[#183346] mb-1 group-hover:text-[#C5A059] transition-colors">Email</h4>
                  <p className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">your@gmail.com</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start group">
                <div className="w-12 h-12 bg-[#183346] rounded-full flex items-center justify-center shrink-0 mr-4 group-hover:bg-[#C5A059] group-hover:scale-110 transition-all duration-300">
                  <Clock className="w-5 h-5 text-white group-hover:rotate-[360deg] transition-all duration-700" />
                </div>
                <div className="mt-1">
                  <h4 className="font-bold text-[#183346] mb-1 group-hover:text-[#C5A059] transition-colors">Working Hours</h4>
                  <p className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">Monday – Friday<br/>8:30 AM – 5:30 PM EAT</p>
                </div>
              </motion.div>
            </div>

            {/* Need Technical Support Box */}
            <motion.div variants={fadeInUp} className="bg-slate-50 p-8 rounded-sm group hover:bg-slate-100 transition-colors hover:-translate-y-1">
              <div className="flex items-center space-x-4 mb-4">
                <Smartphone className="w-10 h-10 text-[#183346] stroke-1 group-hover:scale-110 group-hover:text-[#C5A059] transition-all duration-300" />
                <h3 className="font-bold text-xl text-[#183346] leading-tight group-hover:text-[#C5A059] transition-colors">Need Technical<br/>Support?</h3>
              </div>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed group-hover:text-slate-900 transition-colors">
                Have a technical question about keg<br/>maintenance or parts?
              </p>
              <button className="w-full bg-transparent border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white font-semibold py-3 transition-all flex items-center justify-center rounded-sm text-sm hover:scale-[1.02]">
                Ask Technical Question <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <h2 className="text-3xl font-serif font-bold text-[#183346] mb-6">Send Us a Message</h2>
            <p className="text-slate-600 mb-10 text-[15px]">
              Fill out the form below and we will get back to you as soon as possible.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-bold text-[#183346] mb-2 group-focus-within:text-[#C5A059] transition-colors">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" placeholder="Enter your full name" className="w-full border border-slate-200 p-3 rounded-sm text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] placeholder:text-slate-400 transition-all" />
                </div>
                <div className="group">
                  <label className="block text-sm font-bold text-[#183346] mb-2 group-focus-within:text-[#C5A059] transition-colors">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" placeholder="Enter your company name" className="w-full border border-slate-200 p-3 rounded-sm text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] placeholder:text-slate-400 transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-bold text-[#183346] mb-2 group-focus-within:text-[#C5A059] transition-colors">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input type="email" placeholder="Enter your email" className="w-full border border-slate-200 p-3 rounded-sm text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] placeholder:text-slate-400 transition-all" />
                </div>
                <div className="group">
                  <label className="block text-sm font-bold text-[#183346] mb-2 group-focus-within:text-[#C5A059] transition-colors">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input type="tel" placeholder="Enter your phone number" className="w-full border border-slate-200 p-3 rounded-sm text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] placeholder:text-slate-400 transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <label className="block text-sm font-bold text-[#183346] mb-2 group-focus-within:text-[#C5A059] transition-colors">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border border-slate-200 p-3 rounded-sm text-sm text-slate-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] appearance-none bg-white transition-all cursor-pointer">
                    <option>Select a service</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-[38px] w-4 h-4 text-slate-400 pointer-events-none group-focus-within:text-[#C5A059] transition-colors" />
                </div>
                <div className="group">
                  <label className="block text-sm font-bold text-[#183346] mb-2 group-focus-within:text-[#C5A059] transition-colors">
                    Number of Kegs (Optional)
                  </label>
                  <input type="text" placeholder="Approximate number of kegs" className="w-full border border-slate-200 p-3 rounded-sm text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] placeholder:text-slate-400 transition-all" />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-bold text-[#183346] mb-2 group-focus-within:text-[#C5A059] transition-colors">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input type="text" placeholder="Tell us more about your requirement" className="w-full border border-slate-200 p-3 rounded-sm text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] placeholder:text-slate-400 transition-all" />
              </div>

              <div className="group">
                <label className="block text-sm font-bold text-[#183346] mb-2 group-focus-within:text-[#C5A059] transition-colors">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea rows={6} placeholder="Type your message here..." className="w-full border border-slate-200 p-3 rounded-sm text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] placeholder:text-slate-400 resize-none transition-all"></textarea>
              </div>
              
              {/* Fake reCAPTCHA */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-sm flex items-center justify-between w-[304px] hover:border-slate-300 transition-colors">
                <div className="flex items-center cursor-pointer group/recaptcha">
                  <div className="w-7 h-7 bg-white border-2 border-slate-300 rounded-sm mr-3 group-hover/recaptcha:border-[#C5A059] transition-colors flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#C5A059] rounded-sm opacity-0 group-active/recaptcha:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm text-slate-700">I'm not a robot</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 bg-slate-400 mb-1 rounded-sm"></div>
                  <span className="text-[9px] text-slate-500 leading-tight text-center">reCAPTCHA<br/>Privacy - Terms</span>
                </div>
              </div>

              <div className="flex items-center mt-2 group/check cursor-pointer">
                <input type="checkbox" className="w-4 h-4 border-slate-300 rounded-sm mr-3 text-[#183346] focus:ring-[#183346] cursor-pointer group-hover/check:border-[#183346] transition-colors" />
                <span className="text-[15px] text-slate-600 group-hover/check:text-slate-900 transition-colors">I agree to be contacted about my inquiry.</span>
              </div>

              <div className="flex items-center justify-between pt-4">
                <span className="text-xs text-slate-500"><span className="text-red-500">*</span> Required fields</span>
                <button type="button" className="group flex items-center justify-center text-sm bg-[#C5A059] text-white px-8 py-3.5 font-semibold hover:bg-[#a38043] transition-colors rounded-sm hover:-translate-y-0.5 shadow-sm hover:shadow-md">
                  Send Inquiry <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full h-[550px] mt-8 bg-slate-200"
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8734254990927!2d38.79373147569106!3d8.983793189693598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b858fbf50bd97%3A0x93a0799b20ab0276!2sBole%20Addis%20Ababa%20International%20Airport!5e0!3m2!1sen!2set!4v1779726097672!5m2!1sen!2set" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.section>

    </motion.div>
  );
}
