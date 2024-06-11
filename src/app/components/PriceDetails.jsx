import React from 'react';

const PriceDetails = ({ totals }) => {
  return (
    <div className="flex flex-col items-start mb-6">
      <div className="w-full space-y-2">
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Subtotal:</p>
          <p>₹{totals.subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Shipping:</p>
          <p>₹{totals.shipping.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Tax:</p>
          <p>{totals.tax}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Total:</p>
          <p>₹{totals.total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
