import Accordion from './Accordion';
import { AddButton } from './AddButton';
import { useEffect, useState } from 'react';
import Variant from './Variant';
import { sizes } from '../constant/staticResources';
import { config } from '../services/config';

const ProductDetails = ({ product }) => {
  const colors = product.productDetails.availableColors;

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState(product.productDetails.availableSizes[0]);

  
  const isAvailable = () => {
    return product.productDetails.availableSizes.includes(selectedSize);
  }

  useEffect(() => {
    if (colors) {
      setSelectedColor(colors[0]);
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-medium tracking-tight text-neutral-900">{product.title}</h1>
      <p className="text-xl mb-8">₹ {product.price}</p>
      {colors &&
        <>
          <p className='mb-2'>Color</p>
          <div className="flex flex-wrap gap-3 mb-8">
            { colors.map(color => <Variant key={color} color={color.toLowerCase()} label={color.charAt(0)} isCurrentVariant={color === selectedColor} onClick={() => setSelectedColor(color)}/>)}
          </div>
        </>
      }
      <p className='mb-2'>Size</p>
      <div className="flex flex-wrap gap-3 mb-10">
        {sizes.map(size => <Variant key={size} label={size} isCurrentVariant={size === selectedSize} onClick={() => setSelectedSize(size)} />)}
      </div>
      <AddButton name={isAvailable() ? "Add to cart" : "Out of stock"} onClick={() => console.log("clicked")} disabled={!isAvailable()}/>
      <div className='mt-8'>
        {product.productDetails.details.map((accordion) => (
          <Accordion key={accordion.title} title={accordion.title} details={accordion.details} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
