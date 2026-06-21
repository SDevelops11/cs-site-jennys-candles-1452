import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { BusinessLogo } from './Navbar';

export default function Footer() {
  const { activeProfile } = useAppContext();
  const theme = activeProfile.theme;

  return (
    <footer className={`w-full ${theme.bgLight || 'bg-slate-50'} text-slate-600 mt-auto ${theme.fontClass} border-t border-slate-200/60`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          
          {/* Brand/Summary column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className={`p-1.5 rounded-lg bg-white shadow-xs ${theme.textAccent}`}>
                <BusinessLogo iconName={activeProfile.logoIcon} className="h-5 w-5" />
              </div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">
                {activeProfile.companyName}
              </span>
            </div>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              {activeProfile.tagline}
            </p>
          </div>
          
          {/* Quick links routes */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-slate-800 font-mono">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <NavLink to="/" className="text-slate-500 hover:text-slate-900 transition">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-slate-500 hover:text-slate-900 transition">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-slate-500 hover:text-slate-900 transition">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          
          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-slate-800 font-mono">Contact Info</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              {activeProfile.address && (
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-slate-400 mt-0.5" />
                  <span>{activeProfile.address}</span>
                </li>
              )}
              {activeProfile.supportEmail && (
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <a href={`mailto:${activeProfile.supportEmail}`} className="hover:text-slate-900 transition">
                    {activeProfile.supportEmail}
                  </a>
                </li>
              )}
              {activeProfile.phone && (
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-slate-400" />
                  <span>{activeProfile.phone}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {activeProfile.companyName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-slate-500 transition">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#terms" className="hover:text-slate-500 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
