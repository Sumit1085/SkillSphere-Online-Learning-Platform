import { LogoFacebook, LogoGithub } from '@gravity-ui/icons';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-start">
        
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold mb-3">SkillSphere Academy</h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
            EMPOWERING THE NEXT GENERATION OF DIGITAL LEADERS 
            THROUGH GUIDED EXCELLENCE.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col space-y-2 md:items-center">
            <p className='text-xl'>Legal</p>
          <Link href="/" className="hover:text-blue-600">Privacy Policy</Link>
          <Link href="/" className="hover:text-blue-600">Terms of Service</Link>
          <Link href="/" className="hover:text-blue-600">Help Center</Link>
          <Link href="/" className="hover:text-blue-600">Contact Us</Link>
        </div>

        {/* Right Section */}
        <div className="md:text-right">
          <h2 className="text-lg font-semibold mb-3">Follow us</h2>
          <div className="flex md:justify-end gap-4">
            <LogoFacebook className="cursor-pointer hover:text-blue-600" />
            <LogoGithub className="cursor-pointer hover:text-gray-800" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;