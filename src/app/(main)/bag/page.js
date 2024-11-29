'use client';
import rest, { createURI } from '@/app/services/rest';
import { HttpMethod, paths } from '@/app/constant/urlResource';
import { BAG_KEY } from '@/app/constant/staticResources';
import { get } from '@/app/services/storage';
import { useEffect, useState } from 'react';
import Product from './Product';
import Button from '@/app/components/Button';

const Cart = () => {
  const [bag, setBag] = useState(null);

  const removeItem = async (code) => {
    const bag = await rest(HttpMethod.DELETE, paths.REMOVE_ITEM, {productCode: code, bagId: get(BAG_KEY)});
    setBag(bag);
  }

  const handleCheckout = () => {}

  useEffect(() => {
    async function fetchProducts() {
      const bag = await rest(HttpMethod.GET, createURI([paths.GET_BAG, get(BAG_KEY)]));
      setBag(bag);
    }
    fetchProducts();
  }, []);

  if (!bag) return;

  return (
    <div className="mx-3 sm:mx-16">
      <div className='my-4 sm:my-8'>
        <h1 className="text-xl sm:text-2xl font-semibold">My Shopping Cart ({bag.products.length})</h1>
      </div>
      <div className='flex flex-col sm:flex-row justify-between'>
        <div className='sm:w-2/3'>
          {bag.products.map(product => <Product key={product.title} product={product} onRemove={() => removeItem(product.code)}/>)}
        </div>
        <div className='sm:w-1/4 flex flex-col justify-around sm:h-[42vh]'>
          <div>
            <div className='flex flex-row justify-between my-2 border-b rounded p-2'>
              <p>Subtotal</p>
              <p>₹ {bag.subTotal.toFixed(2)}</p>
            </div>
            <div className='flex flex-row justify-between my-2 border-b rounded p-2'>
              <p>Shipping Cost</p>
              <p>₹ {bag.shippingCost.toFixed(2)}</p>
            </div>
            <div className='flex flex-row justify-between my-2 p-2'>
              <p>Total</p>
              <p>₹ {bag.total.toFixed(2)}</p>
            </div>
          </div>
          <Button name={"Proceed to checkout"} onClick={handleCheckout}/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
