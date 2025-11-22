import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-6 w-6 text-primary-500" />
              <span className="font-bold text-xl">NovaCorp</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering businesses with cutting-edge digital solutions and AI-driven strategies.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/jobs" className="text-slate-400 hover:text-white text-sm transition-colors">Careers</Link></li>
              <li><Link to="/blogs" className="text-slate-400 hover:text-white text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Digital Transformation</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">AI Integration</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} NovaCorp Solutions Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;