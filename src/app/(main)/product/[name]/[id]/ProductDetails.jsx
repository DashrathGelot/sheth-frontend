'use client'
import Accordion from '../../../../components/Accordion';
import { AddButton } from '../../../../components/AddButton';
import { useEffect, useState } from 'react';
import Variant from '../../../../components/Variant';
import { BAG_KEY, sizes } from '../../../../constant/staticResources';
import { useRouter } from 'next/navigation'
import rest from '@/app/services/rest';
import { HttpMethod, paths } from '@/app/constant/urlResource';
import { get, set } from '@/app/services/storage';

const ProductDetails = ({ product }) => {
  const colors = product.productDetails.availableColors;
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState(product.size);
  const router = useRouter();

  const handleCart = async () => {
    const bagId = get(BAG_KEY);
    const payload = {productCode: product.code};
    if (bagId) {
      payload["bagId"] = bagId;
    }
    const data = await rest(HttpMethod.POST, paths.ADD_TO_BAG, payload);
    set(BAG_KEY, data.bagId);
    router.push("/bag");
  }
  
  const isAvailable = () => {
    return product.productDetails.availableSizes.includes(selectedSize);
  }

  useEffect(() => {
    if (product.color) {
      setSelectedColor(product.color);
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="sm:mb-4 text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900">{product.title}</h1>
      <p className="text-xl mb-4 sm:mb-8">₹ {product.price}</p>
      {colors &&
        <>
          <p className='sm:mb-2'>Color</p>
          <div className="flex flex-wrap gap-3 mb-4 sm:mb-8">
            { colors.map(color => <Variant key={color} color={color.toLowerCase()} isCurrentVariant={color === selectedColor} onClick={() => setSelectedColor(color)}/>)}
          </div>
        </>
      }
      <p className='sm:mb-2'>Size</p>
      <div className="flex flex-wrap gap-3 mb-4 sm:mb-10">
        {sizes.map(size => <Variant key={size} label={size} isCurrentVariant={size === selectedSize} onClick={() => setSelectedSize(size)} />)}
      </div>
      <AddButton name={isAvailable() ? "Add to cart" : "Out of stock"} onClick={handleCart} disabled={!isAvailable()}/>
      <div className='mt-4 sm:mt-8'>
        {product.productDetails.details.map((accordion, index) => {
          const isLastThree = index >= product.productDetails.details.length - 3;
          return (
            <Accordion key={accordion.title} title={accordion.title} className={"py-3 px-2 border rounded my-2"}>
              <div className="overflow-hidden">
                {isLastThree && accordion.details.includes(",") ? (
                  <ul className="list-disc pl-5">
                    {accordion.details.split(",").map((item, index) => (
                      <li key={index}>{item.trim()}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{accordion.details}</p>
                )}
              </div>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetails;