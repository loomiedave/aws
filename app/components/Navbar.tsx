'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface NavigationItem {
  name: string;
  href: string;
}

interface NavigationSection {
  name: string;
  items: NavigationItem[];
}

interface NavigationData {
  [key: string]: NavigationSection;
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navigation: NavigationData = {
    services: {
      name: 'Services',
      items: [
        { name: 'Go to page', href:'/services'},
        { name: 'Detox & Withdrawal', href: '/services#primary-services' },
        { name: 'Community Housing', href: '/services#primary-services' },
        { name: 'Treatments', href: '/services/#treatments' }
      ]
    }
  };

  const toggleDropdown = (key: string): void => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  return (
    <div className="grid-cols-3 gap-4 md:absolute top-0 left-0 right-0 z-50 bg-white md:bg-transparent shadow-lg md:shadow-none transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
           {/* Phone Icon - Positioned on the Right from Medium Screens */}
           <Link 
            href="tel:+14437123202" 
            className="md:absolute md:right-4 md:top-2 flex items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <Phone className="w-8 h-8 text-green-600" />
          </Link>
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="Absolute Wellness Services Logo"
                width={125}  
                height={50}  
                className="transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {Object.entries(navigation).map(([key, section]) => (
              <div
                key={key}
                className="relative"
              >
                <button
                  onClick={() => toggleDropdown(key)}
                  className="flex items-center px-3 py-2 text-gray-800 hover:text-blue-600 space-x-1 transition-all duration-300"
                  type="button"
                  aria-expanded={activeDropdown === key}
                  aria-controls={`${key}-dropdown`}
                >
                  <span>{section.name}</span>
                  <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${
                    activeDropdown === key ? 'rotate-180' : ''
                  }`} />
                </button>

                <div 
                  id={`${key}-dropdown`}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 transform transition-all duration-300 origin-top
                    ${activeDropdown === key 
                      ? 'opacity-100 scale-y-100 translate-y-0' 
                      : 'opacity-0 scale-y-0 -translate-y-4 pointer-events-none'}`}
                >
                  {section.items.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 transition-colors duration-300"
                      style={{
                        transitionDelay: `${index * 50}ms`
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link href="/about" className="px-3 py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300">
              About
            </Link>
            
            <Link href="/insurance" className="px-3 py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300">
              Insurance
            </Link>

            <Link href="/admissions" className="px-3 py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300">
              Admission
            </Link>

            <Link href="https://absolutewellnessservices.com/" className="px-3 py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
            target='_blank'
            >
              Outpatients
            </Link>

            <Link href="/contact" className=" px-3 py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {!isMobileMenuOpen && (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Sliding from right */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
           <X className="w-4 h-4" />
          </button>
        </div>
        <div className="px-4 py-2 space-y-4">
          {Object.entries(navigation).map(([key, section]) => (
            <div key={key} className="space-y-2">
              <button
                onClick={() => toggleDropdown(key)}
                className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md transition-all duration-300"
                type="button"
                aria-expanded={activeDropdown === key}
                aria-controls={`mobile-${key}-dropdown`}
              >
                <span>{section.name}</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    activeDropdown === key ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div 
                id={`mobile-${key}-dropdown`}
                className={`pl-4 space-y-1 transition-all duration-300 origin-top ${
                  activeDropdown === key 
                    ? 'opacity-100 max-h-96' 
                    : 'opacity-0 max-h-0 overflow-hidden'
                }`}
              >
                {section.items.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-md transition-all duration-300"
                    style={{
                      transitionDelay: `${index * 50}ms`
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-2">
            {['About','Insurance','Admissions',].map((item, index) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md transition-all duration-300"
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {item}
              </Link>
            ))}
            <Link
            href="https://absolutewellnessservices.com/"
            target='_blank'
            className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md transition-all duration-300"
            >
              Outpatients
            </Link>
            <Link
            href="/contact"
            className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md transition-all duration-300"
            >
              Contact Us
            </Link>
           <Link
            href="/"
            className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-center transition-all duration-300 hover:scale-105"
            >
              Get Help Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;