'use client';

import React, { useState } from 'react';
import IconButton from './common/IconButton'; // Adjust the import path if necessary

const Footer = () => {
  const [showAccordion, setShowAccordion] = useState(false);

  const toggleAccordion = () => {
    setShowAccordion(!showAccordion);
  };

  const closeAccordion = () => {
    setShowAccordion(false);
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 py-8 sm:px-6 lg:px-8"> {/* Increased width */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Help Section */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-gray-900 uppercase">Help</h3>
            <p className="text-sm text-gray-600">
              Our Client Advisors are available to assist you by phone at{" "}
              <a href="tel:+1-866-ROLLYRICH" className="underline">
                +91 9876543210
              </a>
              , or you may also{" "}
              <a href="#" className="underline">
                chat with us
              </a>
              .
            </p>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Product Care
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Stores
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-gray-900 uppercase">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Repairs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Personalization
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Art of Gifting
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Download our Apps
                </a>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-gray-900 uppercase">About Rolly Rich</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Fashion Shows
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Arts & Culture
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  La Maison
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Foundation Rolly Rich
                </a>
              </li>
            </ul>
          </div>

          {/* Email Section */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-gray-900 uppercase">Email Sign-Up</h3>
            <p className="text-sm text-gray-600">
                <a href="#" className="underline text-black">Sign up</a> for Rolly Rich emails and receive the latest news from the Maison, including exclusive online pre-launches and new collections.
            </p>

            <button
              className="text-sm text-black underline" // Made it normal text with black underline
              onClick={toggleAccordion}
            >
              Follow Us
            </button>
          </div>
        </div>

        {/* Accordion Section */}
        {showAccordion && (
          <div className="mt-8 border-t border-gray-200 pt-4 flex flex-col items-center space-y-4 px-4 py-6 relative"> {/* Increased spacing */}
            {/* Close button for accordion */}
            <button
              className="absolute top-4 right-4 text-2xl text-gray-600"
              onClick={closeAccordion}
            >
              &times; {/* This is the cross (X) sign */}
            </button>

            <h3 className="text-lg font-semibold mb-4">Follow Us on Social Media</h3>
            <div className="flex space-x-6">
              <IconButton
                iconSrc="/facebook.svg"
                altText="Facebook"
                onClick={() => window.open('https://facebook.com', '_blank')}
              />
              <IconButton
                iconSrc="/twitter.svg"
                altText="Twitter"
                onClick={() => window.open('https://twitter.com', '_blank')}
              />
              <IconButton
                iconSrc="/instagram.svg"
                altText="Instagram"
                onClick={() => window.open('https://instagram.com', '_blank')}
              />
              <IconButton
                iconSrc="/linkedin.svg"
                altText="LinkedIn"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              />
              <IconButton
                iconSrc="/pinterest.svg"
                altText="Pinterest"
                onClick={() => window.open('https://pinterest.com', '_blank')}
              />
            </div>
          </div>
        )}

        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-6 text-gray-600 text-sm">
            <a href="#" className="hover:underline">
              Sitemap
            </a>
            <a href="#" className="hover:underline">
              Legal Notices
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Accessibility
            </a>
          </div>
          <p className="mt-4 sm:mt-0 text-sm text-gray-600">© Rolly Rich</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
