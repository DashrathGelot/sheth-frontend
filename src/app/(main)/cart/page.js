'use client';
import React from 'react';
import { config } from '../services/config';
import PriceDetails from '../components/PriceDetails';
import Button from '../components/Button';

const Cart = () => {
  const { items, totals } = config.cart;
  const item = items[0]; // Assuming there's only one item for now

  return (
    <div className="p-4 md:p-8 mt-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">My Shopping Cart ({items.length})</h1>

        <div className="flex flex-col md:flex-row mb-4">
          <img src={item.imageUrl} alt={item.name} className="w-full md:w-1/3 rounded-lg" />
          <div className="md:ml-4 mt-4 md:mt-0 flex-1">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p>Color: {item.color}</p>
            <p>Size: {item.size}</p>

            <div className="mt-4 flex items-center">
              <select className="border border-gray-300 rounded p-2">
                {item.quantityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <Button type="danger">
                Remove Item
              </Button>
            </div>
            <p className="mt-4 text-xl font-semibold">₹{item.price.toFixed(2)}</p>
          </div>
        </div>

        <PriceDetails totals={totals} />

        <div className="mt-4 w-full flex justify-end">
          <Button type="primary">Proceed to Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
