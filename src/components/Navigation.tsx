import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'menu' | 'about' | 'enquiry') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'enquiry', label: 'Contact' },
  ];

  const handleNavClick = (page: 'home' | 'menu' | 'about' | 'enquiry') => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="group"
          >
            <span className="text-3xl bg-gradient-to-r from-[#1a7b7d] to-[#0d5456] bg-clip-text text-transparent hover:opacity-80 transition-opacity tracking-tight lowercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}>influenceo</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id as any)}
                className={`transition-colors ${
                  currentPage === item.id
                    ? 'text-[#1a7b7d]'
                    : 'text-gray-600 hover:text-[#1a7b7d]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Get Started Button - Desktop */}
          <button
            onClick={() => handleNavClick('enquiry')}
            className="hidden md:block bg-[#1a7b7d] text-white px-6 py-2 rounded-lg hover:bg-[#156567] transition-colors"
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-[#1a7b7d]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id as any)}
                  className={`text-left px-4 py-2 transition-colors ${
                    currentPage === item.id
                      ? 'text-[#1a7b7d] bg-[#1a7b7d]/10'
                      : 'text-gray-600 hover:text-[#1a7b7d] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('enquiry')}
                className="mx-4 bg-[#1a7b7d] text-white px-6 py-2 rounded-lg hover:bg-[#156567] transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
