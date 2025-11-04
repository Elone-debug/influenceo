import { Instagram, Facebook, Youtube, Twitter, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'menu' | 'about' | 'enquiry') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="mb-4">
              <span className="text-2xl text-[#1a7b7d] lowercase tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}>influenceo</span>
            </div>
            <p className="text-gray-400 text-sm">
              Digital marketing solutions for companies and brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('enquiry')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Social Media Marketing</li>
              <li>Video Editing</li>
              <li>Content Creation</li>
              <li>Google Ads</li>
              <li>Brand Strategy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                Influenceo26@gmail.com
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                +91 6238011212
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="https://www.instagram.com/infl_uenceo?utm_source=qr&igsh=ajZ6amlxZWpoMHh1" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1a7b7d] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/share/1JVybtLRDj/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1a7b7d] transition-colors">
                <Facebook size={18} />
              </a>
              <a target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1a7b7d] transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Influenceo. All rights reserved. | Empowering brands through digital marketing.</p>
        </div>
      </div>
    </footer>
  );
}
