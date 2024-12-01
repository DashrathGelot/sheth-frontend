'use client';

import React, { useState } from "react";

const Checkout = () => {
  const [activeAccordion, setActiveAccordion] = useState("identification");

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? "" : section);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Identification Accordion */}
      <div className="border border-gray-300 rounded-lg mb-4">
        <button
          className="w-full text-left py-4 px-6 text-lg font-medium text-black bg-gray-100 flex justify-between items-center"
          onClick={() => toggleAccordion("identification")}
        >
          <span className="flex items-center space-x-3">
            <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-md shadow-md text-sm font-bold">
              1
            </span>
            <span>Identification</span>
          </span>
          <span>{activeAccordion === "identification" ? "-" : "+"}</span>
        </button>
        {activeAccordion === "identification" && (
          <div className="p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <button className="bg-black text-white w-full sm:w-auto px-4 py-2 rounded-md hover:bg-gray-800">
                Sign In
              </button>
              <button className="bg-black text-white w-full sm:w-auto px-4 py-2 rounded-md hover:bg-gray-800">
                Continue as Guest
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>
        )}
      </div>

      {/* Delivery Options Accordion */}
      <div className="border border-gray-300 rounded-lg mb-4">
        <button
          className="w-full text-left py-4 px-6 text-lg font-medium text-black bg-gray-100 flex justify-between items-center"
          onClick={() => toggleAccordion("delivery")}
        >
          <span className="flex items-center space-x-3">
            <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-md shadow-md text-sm font-bold">
              2
            </span>
            <span>Delivery Options</span>
          </span>
          <span>{activeAccordion === "delivery" ? "-" : "+"}</span>
        </button>
        {activeAccordion === "delivery" && (
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Address 1"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Address 2"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Pincode"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <button className="bg-black text-white w-full py-2 rounded-md hover:bg-gray-800">
              Continue to Payment
            </button>
          </div>
        )}
      </div>

      {/* Payment Accordion */}
      <div className="border border-gray-300 rounded-lg">
        <button
          className="w-full text-left py-4 px-6 text-lg font-medium text-black bg-gray-100 flex justify-between items-center"
          onClick={() => toggleAccordion("payment")}
        >
          <span className="flex items-center space-x-3">
            <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-md shadow-md text-sm font-bold">
              3
            </span>
            <span>Payment</span>
          </span>
          <span>{activeAccordion === "payment" ? "-" : "+"}</span>
        </button>
        {activeAccordion === "payment" && (
          <div className="p-6">
            <p className="text-gray-500">Payment options will be displayed here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
