import React from 'react';
import { motion } from 'motion/react';
import {
  Target,
  Eye,
  CheckCircle2,
  Heart,
  User,
  Layers,
  ClipboardCheck,
  Package,
  Handshake,
  Hexagon,
  Store,
  Truck,
  Building2,
  Calendar,
  PhoneCall,
  ArrowRight,
  Beer
} from 'lucide-react';

import heroImg from '../assets/images/about_us_hero_1779723746302.png';

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

export default function AboutUs() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroImg} 
            alt="Hero Keg Inspection" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-serif text-white leading-tight mb-6">
              About Us
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-slate-200 leading-relaxed max-w-xl">
              Technical expertise. Operational understanding.<br/>
              A partner committed to your success.<br/><br/>
              Hero Keg Service and Trading PLC is Ethiopia's specialized partner for professional keg maintenance, sanitation, repair, and genuine parts supply. We help breweries and beverage operators maintain quality, reduce losses, and ensure reliable keg circulation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-serif text-[#183346] mb-8 font-bold">Who We Are</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Founded by professionals with deep experience in the Ethiopian brewing
                  industry, Hero Keg Service and Trading PLC understands the critical role kegs
                  play in delivering perfect beer to every glass.
                </p>
                <p>
                  We provide end-to-end keg care solutions using modern equipment, industry
                  best practices, and a team trained in technical, hygiene, and safety standards.
                </p>
                <p>
                  From cleaning and inspection to structural repair and parts supply, we ensure
                  every keg is safe, clean, and performance-ready.
                </p>
              </div>
            </motion.div>

            <div className="bg-slate-50 p-10 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-10 border border-slate-100">
              <motion.div variants={fadeInUp} className="group">
                <Target className="w-8 h-8 text-[#183346] mb-4 group-hover:scale-110 group-hover:text-[#C5A059] transition-all duration-300" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-[#183346] mb-3 group-hover:text-[#C5A059] transition-colors duration-300">Our Mission</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                  To provide reliable, high-quality keg
                  maintenance and asset protection
                  solutions that improve brewery
                  performance and profitability.
                </p>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="group">
                <Eye className="w-8 h-8 text-[#183346] mb-4 group-hover:scale-110 group-hover:text-[#C5A059] transition-all duration-300" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-[#183346] mb-3 group-hover:text-[#C5A059] transition-colors duration-300">Our Vision</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                  To become Ethiopia's most trusted
                  keg maintenance and brewery asset
                  protection partner.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="group">
                <CheckCircle2 className="w-8 h-8 text-[#183346] mb-4 group-hover:scale-110 group-hover:text-[#C5A059] transition-all duration-300" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-[#183346] mb-3 group-hover:text-[#C5A059] transition-colors duration-300">Our Values</h3>
                <ul className="text-[15px] text-slate-600 space-y-2 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                  <li>Quality Excellence</li>
                  <li>Reliability</li>
                  <li>Technical Precision</li>
                  <li>Operational Integrity</li>
                  <li>Customer Partnership</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="group">
                <Heart className="w-8 h-8 text-[#183346] mb-4 group-hover:scale-110 group-hover:text-[#C5A059] transition-all duration-300" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-[#183346] mb-3 group-hover:text-[#C5A059] transition-colors duration-300">Our Philosophy</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                  Proper keg maintenance is not an
                  expense. It is a strategic investment
                  in product quality, asset longevity,
                  and profitability.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* What Makes Our Approach Different */}
      <section className="py-24 bg-[#161F2E] text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif text-white mb-4 font-bold">What Makes Our Approach Different</h2>
            <div className="w-12 h-1 bg-[#D4AF37] mx-auto mb-16 transition-all duration-300 hover:w-24"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8"
          >
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center group">
              <User className="w-10 h-10 text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-300" strokeWidth={1.5} />
              <h3 className="text-white font-bold mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">Industry Expertise</h3>
              <p className="text-[15px] text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                Deep knowledge of brewing
                operations, keg systems, and
                distribution challenges in Ethiopia.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center group">
              <Layers className="w-10 h-10 text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-300" strokeWidth={1.5} />
              <h3 className="text-white font-bold mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">Structured Processes</h3>
              <p className="text-[15px] text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                Standardized inspection, sanitation,
                testing, and repair procedures for
                consistent results.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center group">
              <ClipboardCheck className="w-10 h-10 text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-300" strokeWidth={1.5} />
              <h3 className="text-white font-bold mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">Quality Standards</h3>
              <p className="text-[15px] text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                Brewery-grade cleaning, pressure
                testing, and hygiene practices ensure
                safe and reliable kegs.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center group">
              <Package className="w-10 h-10 text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:-translate-y-1 group-hover:text-white transition-all duration-300" strokeWidth={1.5} />
              <h3 className="text-white font-bold mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">Genuine Parts</h3>
              <p className="text-[15px] text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                We supply authentic, high-quality
                components for long-term operational
                reliability.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center group">
              <Handshake className="w-10 h-10 text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-300" strokeWidth={1.5} />
              <h3 className="text-white font-bold mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">Partnership Mindset</h3>
              <p className="text-[15px] text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                We work as an extension of your team
                to improve uptime, reduce costs, and
                grow your business.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Support */}
      <section className="py-24 bg-white text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif text-[#183346] mb-4 font-bold">Industries We Support</h2>
            <div className="w-12 h-1 bg-[#183346] mx-auto mb-16 transition-all duration-300 hover:w-24"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-12 md:gap-16"
          >
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center w-32 group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 flex items-center justify-center bg-white border border-slate-100 shadow-sm rounded-xl mb-6 group-hover:border-[#C5A059] group-hover:shadow-md transition-all duration-300">
                <Hexagon className="w-8 h-8 text-[#183346] group-hover:text-[#C5A059] group-hover:rotate-12 transition-all duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#183346] font-bold text-sm group-hover:text-[#C5A059] transition-colors duration-300">Breweries</h3>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center w-32 group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 flex items-center justify-center bg-white border border-slate-100 shadow-sm rounded-xl mb-6 group-hover:border-[#C5A059] group-hover:shadow-md transition-all duration-300">
                <Store className="w-8 h-8 text-[#183346] group-hover:text-[#C5A059] group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#183346] font-bold text-sm group-hover:text-[#C5A059] transition-colors duration-300">Brewpubs</h3>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center w-32 group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 flex items-center justify-center bg-white border border-slate-100 shadow-sm rounded-xl mb-6 group-hover:border-[#C5A059] group-hover:shadow-md transition-all duration-300">
                <Truck className="w-8 h-8 text-[#183346] group-hover:text-[#C5A059] group-hover:translate-x-1 transition-all duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#183346] font-bold text-sm group-hover:text-[#C5A059] transition-colors duration-300">Beverage<br />Distributors</h3>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center w-32 group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 flex items-center justify-center bg-white border border-slate-100 shadow-sm rounded-xl mb-6 group-hover:border-[#C5A059] group-hover:shadow-md transition-all duration-300">
                <Building2 className="w-8 h-8 text-[#183346] group-hover:text-[#C5A059] group-hover:-translate-y-1 transition-all duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#183346] font-bold text-sm group-hover:text-[#C5A059] transition-colors duration-300">Hospitality<br />Groups</h3>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center w-32 group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 flex items-center justify-center bg-white border border-slate-100 shadow-sm rounded-xl mb-6 group-hover:border-[#C5A059] group-hover:shadow-md transition-all duration-300">
                <Beer className="w-8 h-8 text-[#183346] group-hover:text-[#C5A059] group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#183346] font-bold text-sm group-hover:text-[#C5A059] transition-colors duration-300">Draught Beer<br />Operators</h3>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center w-32 group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 flex items-center justify-center bg-white border border-slate-100 shadow-sm rounded-xl mb-6 group-hover:border-[#C5A059] group-hover:shadow-md transition-all duration-300">
                <Calendar className="w-8 h-8 text-[#183346] group-hover:text-[#C5A059] group-hover:rotate-12 transition-all duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#183346] font-bold text-sm group-hover:text-[#C5A059] transition-colors duration-300">Event & Catering<br />Services</h3>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Let's Work Together */}
      <section className="py-12 bg-white pb-24 border-t border-slate-50 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 justify-between hover:border-[#C5A059]/30 hover:shadow-md transition-all duration-500">
            <div className="flex items-start gap-6 max-w-xl group">
              <div className="w-16 h-16 bg-[#183346] flex shrink-0 items-center justify-center rounded-full text-white group-hover:bg-[#C5A059] group-hover:rotate-12 transition-all duration-500">
                <PhoneCall className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#183346] mb-3 group-hover:text-[#C5A059] transition-colors duration-300">Let's Work Together</h3>
                <p className="text-slate-600 leading-relaxed">
                  Whether you need a one-time service, regular maintenance, or technical support, our team is ready to
                  help.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
              <button className="bg-[#C5A059] text-white px-8 py-4 rounded font-semibold flex items-center justify-between min-w-[200px] hover:bg-[#a38043] transition-colors group">
                Request a<br/>Quote <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border border-slate-300 text-[#111827] px-8 py-4 rounded font-semibold flex items-center justify-between min-w-[200px] hover:bg-slate-50 hover:border-slate-400 transition-colors group">
                Contact Our<br/>Team <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
