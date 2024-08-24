"use client";

import React, { useEffect, useState } from 'react';
import ProductDetails from '../../../components/ProductDetails';
import rest, { createCaseURI } from '@/app/services/rest';
import { HttpMethod, paths } from '@/app/constant/urlResource';

const Product = ({params}) => {
  const [product, setProduct] = useState(undefined);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      const product = await rest(HttpMethod.GET, createCaseURI([paths.PRODUCT, params.id]));
      setProduct(product);
      setCurrentImage(product.images[0])
    }
    fetchProduct();
  }, [])

  if (!product) return;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-14">
      <div className="flex flex-col lg:flex-row w-full h-full items-start justify-center">
        <div className="lg:w-2/5 flex flex-col items-center p-4">
          <div className="relative w-full max-w-lg h-96 bg-gray-200 flex items-center justify-center overflow-hidden">
            <img src={currentImage} alt={"product.title"} className="w-full h-full object-contain" />
          </div>
          <div className="flex mt-4 space-x-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`w-16 h-16 object-cover cursor-pointer ${currentImage === image ? 'border-2 border-black' : 'border'}`}
                onClick={() => setCurrentImage(image)}
              />
            ))}
          </div>
        </div>
        <div className="lg:w-3/5 flex justify-center p-4">
          <ProductDetails product={product} />
        </div>
      </div>
    </div>
  );
};

export default Product;
