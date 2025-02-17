"use client";

import React, { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails';
import rest, { createCaseURI } from '@/app/services/rest';
import { HttpMethod, paths } from '@/app/constant/urlResource';
import { isVideo } from '@/app/lib/utils';

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
    <div className="container mx-auto min-h-screen sm:mt-14 flex flex-col sm:flex-row justify-between p-4 gap-5 sm:gap-40">
      <div className="flex flex-col items-center w-full sm:w-1/2">
        <div className="w-full sm:h-2/3 flex aspect-square overflow-hidden border rounded">
          {
            isVideo(currentImage) ?
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-contain object-center"
                style={{ width: "100vw", objectFit: "contain" }}
              >
                <source src={currentImage} type={`video/${currentImage.split('.').pop()}`} />
              </video>
            : <img src={currentImage} alt={product.title} className="w-full h-full object-contain object-center" /> 
          }
        </div>
        <div className="flex mt-1 sm:mt-4 space-x-2">
          {product.images.map((media, index) => {
            if (isVideo(media)) {
              return <div key={index} 
                className={`w-14 h-14 sm:w-16 sm:h-16 object-cover cursor-pointer rounded ${currentImage === media ? 'border-2 border-black' : 'border'} flex justify-center items-center`}
                onClick={() => setCurrentImage(media)}> 
                <img key={index} src={"/play-button.svg"} alt={`Thumbnail ${index}`} 
                  className={`w-9 h-9 sm:w-9 sm:h-9 object-cover`} 
                />
              </div>
            }
            return <img key={index} src={media} alt={`Thumbnail ${index}`} 
              className={`w-14 h-14 sm:w-16 sm:h-16 object-cover cursor-pointer rounded ${currentImage === media ? 'border-2 border-black' : 'border'}`} 
              onClick={() => setCurrentImage(media)}/>
          })}
        </div>
      </div>
      <div className="w-full sm:w-1/2 flex justify-end">
        <ProductDetails product={product} />
      </div>
    </div>
  );
};

export default Product;
