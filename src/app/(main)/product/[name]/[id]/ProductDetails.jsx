'use client'
import Accordion from '../../../../components/Accordion';
import { AddButton } from '../../../../components/AddButton';
import { useState } from 'react';
import Variant from '../../../../components/Variant';
import { BAG_KEY, COLOR, SIZE } from '../../../../constant/staticResources';
import { useRouter } from 'next/navigation'
import rest, { createCaseURI } from '@/app/services/rest';
import { HttpMethod, paths, UI_Paths } from '@/app/constant/urlResource';
import { get, set } from '@/app/services/storage';
import { generateProductCode } from '@/app/services/service';

const ProductDetails = ({ product, params }) => {
  const colors = product.productDetails.availableColors;
  const sizes = product.productDetails.availableSizes;
  const [selectedSize, setSelectedSize] = useState(product.size);
  const [error, setError] = useState(undefined);
  const [sizeId, setSizeId] = useState(undefined);
  const router = useRouter();

  const onColor = (color) => {
    const code = generateProductCode(product.code, color.id, COLOR);
    router.push(createCaseURI([UI_Paths.PRODUCT, params.name, code]));
  }

  const onSize = (size) => {
    setSelectedSize(size.name);
    setSizeId(size.id);
    setError(undefined);
  }

  const handleCart = async () => {
    if (!selectedSize) {
      setError("Select size");
      return;
    }
    const bagId = get(BAG_KEY);
    const payload = {productCode: generateProductCode(product.code, sizeId, SIZE)};
    if (bagId) {
      payload["bagId"] = bagId;
    }
    const data = await rest(HttpMethod.POST, paths.ADD_TO_BAG, payload);
    set(BAG_KEY, data.bagId);
    router.push("/bag");
  }

  return (
    <div className="p-4">
      <h1 className="sm:mb-4 text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900">{product.title}</h1>
      <p className="text-xl mb-4 sm:mb-8">₹ {product.price}</p>
      {colors &&
        <>
          <p className='sm:mb-2'>Color</p>
          <div className="flex flex-wrap gap-3 mb-4 sm:mb-8">
            { colors.map(color => <Variant key={color.id} color={color.name.toLowerCase()} isCurrentVariant={color.name === product.color} onClick={() => onColor(color)}/>)}
          </div>
        </>
      }
      <p className='sm:mb-2'>Size</p>
      {
        error && <p className="text-red-500">{error}</p>
      }
      <div className="flex flex-wrap gap-3 mb-4 sm:mb-10">
        {sizes.map(size => <Variant key={size.id} label={size.name} isCurrentVariant={size.name === selectedSize} onClick={() => onSize(size)} />)}
      </div>
      <AddButton name={"Add to cart"} onClick={handleCart}/>
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