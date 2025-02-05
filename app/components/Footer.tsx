import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  X,
  Facebook,
  Linkedin,
  Instagram
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Treatment', href: '/treatment' },
    { name: 'Contact', href: '/contact' },
  ];

  const addresses = [
    '700 Liberty Heights Avenue, Baltimore, MD 21215',
    'TBA Office 1 (Outpatient clinic) : 516 N Rolling Rd Catonsville, MD 21228',
  ];

  return (
    <footer className="bg-indigo-50 flex flex-col py-6 px-4 space-y-4">
      <div className="container mx-auto max-w-6xl">
        {/* Top Logo */}
        <div className="flex justify-center mb-12">
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

        {/* Main Content */}
        <div className="flex flex-col space-y-6 gap-x-6 gap-y-6">
          {/* Call Us Section */}
          <div className="text-center">
            <h3 className="font-semibold text-indigo-900 mb-4">Call Us Today</h3>
            <Link 
              href="tel:+14437123202" 
              className="text-indigo-600 hover:text-indigo-800 transition-colors text-lg"
            >
              443-712-3202
            </Link>
          </div>

      
          <div className="text-center">
            <h3 className="font-semibold text-indigo-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         
          <div className="text-center w-3/4 mx-auto">
            <h3 className="font-semibold text-indigo-900 mb-4">Meet Us</h3>
            <ol className="list-disc pl-3 space-y-2 text-gray-700">
              {addresses.map((address, index) => (
                <li key={index}>
                  {address}
                </li>
              ))}
            </ol>
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-indigo-900 mb-4">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
              <Link href="#" className="text-indigo-600 hover:text-indigo-800">
                <X className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-indigo-600 hover:text-indigo-800">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-indigo-600 hover:text-indigo-800">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-indigo-600 hover:text-indigo-800">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;