"use client";

import React, { useEffect, useState } from 'react';
import ProductDetails from '../../../../components/ProductDetails';
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
    <div className="container mx-auto min-h-screen mt-14 flex justify-between p-4 gap-40">
      <div className="flex flex-col items-center w-1/2">
        <div className="w-full h-2/3 flex aspect-square overflow-hidden bg-neutral-50">
          <img src={currentImage} alt={product.title} className="w-full h-full object-contain object-center" />
        </div>
        <div className="flex mt-4 space-x-2">
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={`Thumbnail ${index}`}
              className={`w-16 h-16 object-cover cursor-pointer ${currentImage === image ? 'border-2 border-black' : 'border'}`}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <ProductDetails product={product} />
      </div>
    </div>
  );
};

export default Product;
