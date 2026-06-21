import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Terminal, 
  Sparkles, 
  Shield, 
  Sun, 
  Menu, 
  X, 
  Box 
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export function BusinessLogo({ iconName, className = "h-6 w-6" }: { iconName: string; className?: string }) {
  switch (iconName) {
    case 'Terminal':
      return <Terminal className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Shield':
      return <Shield className={className} />;
    case 'Sun':
      return <Sun className={className} />;
    default:
      return <Box className={className} />;
  }
}

export default function Navbar() {
  const { activeProfile } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const theme = activeProfile.theme;

  return (
    <div className={`w-full ${theme.fontClass} flex flex-col`}>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            <NavLink to="/" className="flex items-center gap-2.5 group">
              <div className={`p-2 rounded-xl bg-gray-50 group-hover:scale-105 transition ${theme.logoColor}`}>
                <BusinessLogo iconName={activeProfile.logoIcon} className="h-6 w-6" />
              </div>
              <span className="font-bold text-lg tracking-tight text-gray-900 group-hover:text-black transition">
                {activeProfile.companyName}
              </span>
            </NavLink>
            
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => `text-[13px] font-medium transition ${theme.fontClass} ${
                  isActive ? `${theme.textAccent} font-semibold` : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Home
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => `text-[13px] font-medium transition ${theme.fontClass} ${
                  isActive ? `${theme.textAccent} font-semibold` : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Services
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `text-[13px] font-medium transition ${theme.fontClass} ${
                  isActive ? `${theme.textAccent} font-semibold` : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Contact
              </NavLink>
              
              <NavLink 
                to="/contact"
                className={`ml-4 text-xs font-semibold px-4 py-2 rounded-lg shadow-xs transition-transform hover:-translate-y-0.5 ${theme.primaryBg} ${theme.primaryHover} ${theme.textOnPrimary || 'text-white'}`}
              >
                {activeProfile.ctaText || 'Get in Touch'}
              </NavLink>
            </nav>
            
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-500 hover:text-gray-700 p-2 focus:ring-2 focus:ring-gray-100 rounded-lg transition"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white shadow-lg animate-fadeIn">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <NavLink 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `block px-3 py-2.5 rounded-lg text-base font-medium transition ${
                  isActive ? `${theme.primaryBg} text-white` : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Home
              </NavLink>
              <NavLink 
                to="/services" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `block px-3 py-2.5 rounded-lg text-base font-medium transition ${
                  isActive ? `${theme.primaryBg} text-white` : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Services
              </NavLink>
              <NavLink 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `block px-3 py-2.5 rounded-lg text-base font-medium transition ${
                  isActive ? `${theme.primaryBg} text-white` : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
