import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#FCE8D5] pt-8 pb-4 px-4 md:px-8 rounded-t-[40px]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#003459] rounded-2xl p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-white text-lg md:text-xl font-semibold mb-4 md:mb-0">
              Register Now So You Don't Miss Our Programs
            </h2>
            <div className="bg-white p-2 px-2 rounded-lg w-full md:w-[60%]">
                <form onSubmit={handleSubmit} className="w-full flex items-center">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your Email"
                        className="flex-grow p-2 rounded-md focus:outline-none border m-1 w-[70%]"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-primary text-background px-4 py-2 m-1 rounded-md font-semibold hover:bg-[#f0c989] transition-colors"
                    >
                        Subscribe Now
                    </button>
                </form>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between items-center mb-8">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {['Home', 'Category', 'About', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-[#003459] hover:underline">
                {item}
              </a>
            ))}
          </div>
          <div className="flex space-x-4">
            <Facebook className="text-[#003459] w-6 h-6" />
            <Twitter className="text-[#003459] w-6 h-6" />
            <Instagram className="text-[#003459] w-6 h-6" />
            <Youtube className="text-[#003459] w-6 h-6" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-4">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2022 Monito. All rights reserved.
          </div>
          <div className="mb-4 md:mb-0">
            <img src="/Monito-logo-f.jpg" alt="Monito" className="h-8" />
          </div>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-[#003459] hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-[#003459] hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;