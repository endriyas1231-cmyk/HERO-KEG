import React from 'react';
import { motion } from 'motion/react';
import {
  FlaskConical,
  Settings,
  Package,
  Check,
  Clock,
  LayoutGrid,
  BarChart2,
  Search,
  ArrowRightLeft,
  CalendarCheck,
  LifeBuoy,
  ClipboardList,
  Zap,
  CheckCircle,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

import heroImg from '../assets/images/services_hero_1779722089553.png';
import sanitationImg from '../assets/images/service_sanitation_1779717414016.png';
import repairImg from '../assets/images/service_repair_1779717434332.png';
import partsImg from '../assets/images/service_parts_1779717475851.png';

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

export default function Services() {
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent flex"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-serif text-white leading-tight mb-6">
              Our Services
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-slate-200 leading-relaxed max-w-xl">
              End-to-end keg care solutions that protect quality, reduce
              losses, and extend the life of your assets. Our services are
              designed for breweries and draught beverage operations
              across Ethiopia.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#183346] mb-4 font-bold">Our Core Services</h2>
            <p className="text-slate-500">Professional maintenance. Technical precision. Measurable results.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
          >
            {/* Service 1 */}
            <motion.div variants={fadeInUp} className="bg-white shadow-sm hover:shadow-xl border border-slate-100 flex flex-col group rounded-sm overflow-hidden relative transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 shrink-0">
                <div className="w-full h-full overflow-hidden">
                  <img src={sanitationImg} alt="Keg Maintenance & Sanitation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute -bottom-6 left-6 w-12 h-12 bg-[#111827] group-hover:bg-[#C5A059] transition-colors duration-300 rounded-full flex items-center justify-center border-4 border-white z-10">
                  <FlaskConical className="w-5 h-5 text-white group-hover:animate-bounce" />
                </div>
              </div>
              <div className="p-8 pt-10 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#183346] mb-3 font-serif group-hover:text-[#C5A059] transition-colors duration-300">1. Keg Maintenance &<br/>Sanitation</h3>
                <p className="text-[15px] text-slate-600 mb-8 border-b border-slate-100 pb-8 flex-grow">
                  Comprehensive cleaning and sanitation services
                  to protect beer quality and remove
                  contamination risks.
                </p>
                <ul className="space-y-4 mb-8 text-[15px] text-slate-700">
                  <li className="flex items-start"><Check className="w-5 h-5 text-slate-900 mr-3 shrink-0 group-hover:text-[#C5A059] transition-colors" />Ultrasonic internal cleaning</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-slate-900 mr-3 shrink-0 group-hover:text-[#C5A059] transition-colors" />Beer stone (scale) removal</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-slate-900 mr-3 shrink-0 group-hover:text-[#C5A059] transition-colors" />Sanitation & hygiene validation</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-slate-900 mr-3 shrink-0 group-hover:text-[#C5A059] transition-colors" />Pressure testing & leak verification</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-slate-900 mr-3 shrink-0 group-hover:text-[#C5A059] transition-colors" />Residual beer disposal</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-slate-900 mr-3 shrink-0 group-hover:text-[#C5A059] transition-colors" />Internal visual inspection</li>
                </ul>
                <div className="bg-slate-50 p-4 flex items-center gap-4 mb-8 group-hover:bg-slate-100 transition-colors">
                  <Clock className="w-6 h-6 text-slate-400 shrink-0 group-hover:text-[#C5A059] group-hover:rotate-[360deg] transition-all duration-700" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Recommended Frequency</div>
                    <div className="text-xs text-slate-500">Every 90 - 120 days</div>
                  </div>
                </div>
                <button className="w-full bg-[#C5A059] text-white py-4 font-semibold hover:bg-[#a38043] transition-colors flex items-center justify-center rounded-sm">
                  Schedule Maintenance <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeInUp} className="bg-white shadow-sm hover:shadow-xl border border-slate-100 flex flex-col group rounded-sm overflow-hidden relative transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 shrink-0">
                <div className="w-full h-full overflow-hidden">
                  <img src={repairImg} alt="Keg Repair & Structural Restoration" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute -bottom-6 left-6 w-12 h-12 bg-[#111827] group-hover:bg-[#C5A059] transition-colors duration-300 rounded-full flex items-center justify-center border-4 border-white z-10">
                  <Settings className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-500" />
                </div>
              </div>
              <div className="p-8 pt-10 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#183346] mb-3 font-serif group-hover:text-[#C5A059] transition-colors duration-300">2. Keg Repair & Structural<br/>Restoration</h3>
                <p className="text-[15px] text-slate-600 mb-8 border-b border-slate-100 pb-8 flex-grow">
                  Restore structural integrity, eliminate leaks, and
                  extend the operational life of your kegs.
                </p>
                <ul className="space-y-4 mb-8 text-[15px] text-slate-700">
                  <li className="flex items-start"><Check className="w-5 h-5 text-slate-900 mr-3 shrink-0 group-hover:text-[#C5A059] transition-colors" />Dent removal & body repair</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-slate-900 mr-3 shrink-0 group-hover:text-[#C5A059] transition-colors" />Neck straightening & alignment</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-slate-900 mr-3 shrink-0 group-hover:text-[#C5A059] transition-colors" />Chime (top & bottom) restoration</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-slate-900 mr-3 shrink-0 group-hover:text-[#C5A059] transition-colors" />Spear alignment & system check</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-slate-900 mr-3 shrink-0 group-hover:text-[#C5A059] transition-colors" />Leak correction & pressure testing</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-slate-900 mr-3 shrink-0 group-hover:text-[#C5A059] transition-colors" />Final inspection & approval</li>
                </ul>
                <div className="bg-slate-50 p-4 flex items-center gap-4 mb-8 group-hover:bg-slate-100 transition-colors">
                  <Clock className="w-6 h-6 text-slate-400 shrink-0 group-hover:text-[#C5A059] group-hover:rotate-[360deg] transition-all duration-700" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Typical Turnaround</div>
                    <div className="text-xs text-slate-500">24 - 72 hours*</div>
                  </div>
                </div>
                <button className="w-full bg-[#C5A059] text-white py-4 font-semibold hover:bg-[#a38043] transition-colors flex items-center justify-center rounded-sm">
                  Book Inspection <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeInUp} className="bg-white shadow-sm hover:shadow-xl border border-slate-100 flex flex-col group rounded-sm overflow-hidden relative transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 shrink-0">
                <div className="w-full h-full overflow-hidden">
                  <img src={partsImg} alt="Genuine Parts Supply" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute -bottom-6 left-6 w-12 h-12 bg-[#111827] group-hover:bg-[#C5A059] transition-colors duration-300 rounded-full flex items-center justify-center border-4 border-white z-10">
                  <Package className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
              <div className="p-8 pt-10 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#183346] mb-3 font-serif group-hover:text-[#C5A059] transition-colors duration-300">3. Genuine Parts Supply<br/>&nbsp;</h3>
                <p className="text-[15px] text-slate-600 mb-8 border-b border-slate-100 pb-8 flex-grow">
                  High-quality, genuine components for optimal
                  performance and long-term reliability.
                </p>
                <ul className="space-y-4 mb-8 text-[15px] text-slate-700 flex-grow">
                  <li className="flex items-start"><Check className="w-5 h-5 text-slate-900 mr-3 shrink-0 group-hover:text-[#C5A059] transition-colors" />Spears</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-slate-900 mr-3 shrink-0 group-hover:text-[#C5A059] transition-colors" />Gaskets</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-slate-900 mr-3 shrink-0 group-hover:text-[#C5A059] transition-colors" />O-rings</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-slate-900 mr-3 shrink-0 group-hover:text-[#C5A059] transition-colors" />CO2 valves</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-slate-900 mr-3 shrink-0 group-hover:text-[#C5A059] transition-colors" />Sealing components & accessories</li>
                </ul>
                <div className="bg-slate-50 p-4 flex items-center gap-4 mb-8 mt-auto group-hover:bg-slate-100 transition-colors">
                  <LayoutGrid className="w-6 h-6 text-slate-400 shrink-0 group-hover:text-[#C5A059] group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Pricing</div>
                    <div className="text-xs text-slate-500">Unit-based or contract supply</div>
                  </div>
                </div>
                <button className="w-full bg-[#C5A059] text-white py-4 font-semibold hover:bg-[#a38043] transition-colors flex items-center justify-center rounded-sm">
                  Request Parts <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center text-sm text-slate-400"
          >
            *Turnaround time depends on service volume, inspection findings, and part availability.
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-serif text-[#183346] mb-16 font-bold"
          >
            Additional Services
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8"
          >
            <motion.div variants={fadeInUp} className="flex flex-col items-center group cursor-pointer">
              <BarChart2 className="w-8 h-8 text-[#183346] mb-4 group-hover:text-[#C5A059] group-hover:scale-110 transition-all duration-300" strokeWidth={2} />
              <h3 className="font-bold text-[#183346] mb-2 text-[15px] group-hover:text-[#C5A059] transition-colors duration-300">Pressure Testing</h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-[200px] group-hover:text-slate-700 transition-colors duration-300">
                Nitrogen/air pressure testing to
                ensure pressure integrity.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center group cursor-pointer">
              <Search className="w-8 h-8 text-[#183346] mb-4 group-hover:text-[#C5A059] group-hover:scale-110 transition-all duration-300" strokeWidth={2} />
              <h3 className="font-bold text-[#183346] mb-2 text-[15px] group-hover:text-[#C5A059] transition-colors duration-300">Inspection & Reporting</h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-[200px] group-hover:text-slate-700 transition-colors duration-300">
                Detailed inspection with findings
                and actionable
                recommendations.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center group cursor-pointer">
              <ArrowRightLeft className="w-8 h-8 text-[#183346] mb-4 group-hover:text-[#C5A059] group-hover:scale-110 transition-all duration-300" strokeWidth={2} />
              <h3 className="font-bold text-[#183346] mb-2 text-[15px] group-hover:text-[#C5A059] transition-colors duration-300">Collection & Delivery</h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-[200px] group-hover:text-slate-700 transition-colors duration-300">
                Flexible pickup and delivery
                options within Addis Ababa and
                nearby regions.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center group cursor-pointer">
              <CalendarCheck className="w-8 h-8 text-[#183346] mb-4 group-hover:text-[#C5A059] group-hover:scale-110 transition-all duration-300" strokeWidth={2} />
              <h3 className="font-bold text-[#183346] mb-2 text-[15px] max-w-[180px] leading-tight group-hover:text-[#C5A059] transition-colors duration-300">Preventive Maintenance Programs</h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-[200px] group-hover:text-slate-700 transition-colors duration-300">
                Planned maintenance schedules
                to reduce downtime and
                unexpected failures.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center group cursor-pointer">
              <LifeBuoy className="w-8 h-8 text-[#183346] mb-4 group-hover:text-[#C5A059] group-hover:scale-110 transition-all duration-300" strokeWidth={2} />
              <h3 className="font-bold text-[#183346] mb-2 text-[15px] group-hover:text-[#C5A059] transition-colors duration-300">Technical Support</h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-[200px] group-hover:text-slate-700 transition-colors duration-300">
                Expert technical guidance and
                support for your keg operations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Service Process */}
      <section className="py-24 bg-[#0B1423] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif text-white mb-4 font-bold">Our Service Process</h2>
            <div className="w-12 h-1 bg-[#D4AF37] mx-auto mb-20 transition-all duration-300 hover:w-24"></div>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] border-t border-dashed border-slate-700 z-0"></div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10"
            >
              {/* Step 1 */}
              <motion.div variants={fadeInUp} className="flex flex-col items-center group">
                <div className="relative w-24 h-24 bg-[#0B1423] border border-slate-800 rounded-2xl flex items-center justify-center mb-6 z-10 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-500">
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#D4AF37] text-[#0B1423] rounded-full flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">1</div>
                  <ClipboardList className="w-8 h-8 text-[#D4AF37] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold mb-3 text-[15px] group-hover:text-[#D4AF37] transition-colors">Collection & Intake</h3>
                <p className="text-[13px] text-slate-400 leading-relaxed max-w-[200px] group-hover:text-slate-300 transition-colors">
                  Kegs are collected and logged into our service system.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div variants={fadeInUp} className="flex flex-col items-center group">
                <div className="relative w-24 h-24 bg-[#0B1423] border border-slate-800 rounded-2xl flex items-center justify-center mb-6 z-10 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-500">
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#D4AF37] text-[#0B1423] rounded-full flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">2</div>
                  <Search className="w-8 h-8 text-[#D4AF37] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold mb-3 text-[15px] group-hover:text-[#D4AF37] transition-colors">Inspection</h3>
                <p className="text-[13px] text-slate-400 leading-relaxed max-w-[200px] group-hover:text-slate-300 transition-colors">
                  We inspect each keg for structural, hygiene, and pressure integrity.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div variants={fadeInUp} className="flex flex-col items-center group">
                <div className="relative w-24 h-24 bg-[#0B1423] border border-slate-800 rounded-2xl flex items-center justify-center mb-6 z-10 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-500">
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#D4AF37] text-[#0B1423] rounded-full flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">3</div>
                  <Zap className="w-8 h-8 text-[#D4AF37] group-hover:scale-110 group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold mb-3 text-[15px] group-hover:text-[#D4AF37] transition-colors">Service Execution</h3>
                <p className="text-[13px] text-slate-400 leading-relaxed max-w-[200px] group-hover:text-slate-300 transition-colors">
                  Cleaning, repair, part replacement, and testing are performed.
                </p>
              </motion.div>

              {/* Step 4 */}
              <motion.div variants={fadeInUp} className="flex flex-col items-center group">
                <div className="relative w-24 h-24 bg-[#0B1423] border border-slate-800 rounded-2xl flex items-center justify-center mb-6 z-10 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-500">
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#D4AF37] text-[#0B1423] rounded-full flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">4</div>
                  <CheckCircle className="w-8 h-8 text-[#D4AF37] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold mb-3 text-[15px] group-hover:text-[#D4AF37] transition-colors">Quality Check</h3>
                <p className="text-[13px] text-slate-400 leading-relaxed max-w-[200px] group-hover:text-slate-300 transition-colors">
                  Every keg is pressure tested and verified before release.
                </p>
              </motion.div>

              {/* Step 5 */}
              <motion.div variants={fadeInUp} className="flex flex-col items-center group">
                <div className="relative w-24 h-24 bg-[#0B1423] border border-slate-800 rounded-2xl flex items-center justify-center mb-6 z-10 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-500">
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#D4AF37] text-[#0B1423] rounded-full flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">5</div>
                  <ArrowRightLeft className="w-8 h-8 text-[#D4AF37] group-hover:scale-110 hover:-rotate-12 transition-transform" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold mb-3 text-[15px] group-hover:text-[#D4AF37] transition-colors">Return & Circulation</h3>
                <p className="text-[13px] text-slate-400 leading-relaxed max-w-[200px] group-hover:text-slate-300 transition-colors">
                  Kegs are returned ready for optimal performance.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-serif text-[#183346] mb-16 font-bold text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm"
          >
            
            <motion.div variants={fadeInUp} className="border-b border-slate-100 py-4 flex items-center justify-between cursor-pointer group hover:border-[#C5A059]/30 transition-colors duration-300">
              <span className="font-bold text-[#183346] group-hover:text-[#C5A059] transition-colors duration-300">How is pricing structured?</span>
              <ChevronDown className="w-5 h-5 text-[#D4AF37] group-hover:scale-125 transition-transform duration-300" />
            </motion.div>
            
            <motion.div variants={fadeInUp} className="border-b border-slate-100 py-4 flex items-center justify-between cursor-pointer group hover:border-[#C5A059]/30 transition-colors duration-300">
              <span className="font-bold text-[#183346] group-hover:text-[#C5A059] transition-colors duration-300">Do you replace worn parts?</span>
              <ChevronDown className="w-5 h-5 text-[#D4AF37] group-hover:scale-125 transition-transform duration-300" />
            </motion.div>

            <motion.div variants={fadeInUp} className="border-b border-slate-100 py-4 flex items-center justify-between cursor-pointer group hover:border-[#C5A059]/30 transition-colors duration-300">
              <span className="font-bold text-[#183346] group-hover:text-[#C5A059] transition-colors duration-300">How long does maintenance take?</span>
              <ChevronDown className="w-5 h-5 text-[#D4AF37] group-hover:scale-125 transition-transform duration-300" />
            </motion.div>

            <motion.div variants={fadeInUp} className="border-b border-slate-100 py-4 flex items-center justify-between cursor-pointer group hover:border-[#C5A059]/30 transition-colors duration-300">
              <span className="font-bold text-[#183346] group-hover:text-[#C5A059] transition-colors duration-300">Do you provide maintenance contracts?</span>
              <ChevronDown className="w-5 h-5 text-[#D4AF37] group-hover:scale-125 transition-transform duration-300" />
            </motion.div>

            <motion.div variants={fadeInUp} className="border-b border-slate-100 py-4 flex items-center justify-between cursor-pointer group hover:border-[#C5A059]/30 transition-colors duration-300">
              <span className="font-bold text-[#183346] group-hover:text-[#C5A059] transition-colors duration-300">What areas do you serve?</span>
              <ChevronDown className="w-5 h-5 text-[#D4AF37] group-hover:scale-125 transition-transform duration-300" />
            </motion.div>

            <motion.div variants={fadeInUp} className="border-b border-slate-100 py-4 flex items-center justify-between cursor-pointer group hover:border-[#C5A059]/30 transition-colors duration-300">
              <span className="font-bold text-[#183346] group-hover:text-[#C5A059] transition-colors duration-300">How do you ensure hygiene?</span>
              <ChevronDown className="w-5 h-5 text-[#D4AF37] group-hover:scale-125 transition-transform duration-300" />
            </motion.div>

          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}
