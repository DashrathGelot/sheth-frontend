'use client';
import rest, { createURI } from '@/app/services/rest';
import { HttpMethod, paths } from '@/app/constant/urlResource';
import { BAG_KEY } from '@/app/constant/staticResources';
import { get } from '@/app/services/storage';
import { useEffect, useState } from 'react';
import Product from './Product';
import Button from '@/app/components/Button';
import { useRouter } from 'next/navigation'

const Cart = () => {
  const router = useRouter();
  const [bag, setBag] = useState(null);

  const removeItem = async (code) => {
    const bag = await rest(HttpMethod.DELETE, paths.REMOVE_ITEM, {productCode: code, bagId: get(BAG_KEY)});
    setBag(bag);
  }

  const handleCheckout = () => {
    router.push('/checkout');
  }

  useEffect(() => {
    async function fetchProducts() {
      const bagId = get(BAG_KEY);
      let path = paths.GET_BAG;

      if (bagId) {
        path = createURI([paths.GET_BAG, bagId]);
      }

      const bag = await rest(HttpMethod.GET, path);
      setBag(bag);
    }
    fetchProducts();
  }, []);

  if (!bag) return;

  return (
    <div className="mx-3 sm:mx-16">
      <div className='my-4 sm:my-8'>
        <h1 className="text-xl sm:text-2xl font-semibold">My Shopping Bag ({bag.products.length})</h1>
      </div>
      {
        bag.products.length === 0 ?
          <div className="flex flex-col items-center justify-center p-6 text-center sm:p-8 md:p-12 mt-5">
            <EmptyOpenBagIcon/>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mt-4">Your Bag is Empty</h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base md:text-lg">Looks like you haven't added anything to your cart yet.</p>
          </div>
        :
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
      }
    </div>
  );
};

const EmptyOpenBagIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-24 h-24 text-gray-400"
    >
      <path d="M20 20a12 12 0 0 1 24 0" />
      <path d="M44 20V16a12 12 0 0 0-24 0v4" />
      <path d="M8 20h48l-6 36H14L8 20z" />
      <path d="M8 20c8 6 40 6 48 0" />
    </svg>
  );
};

export default Cart;
