import React from 'react';
import Card from '@/app/components/Card';
import rest, { createCaseURI, createURI } from '@/app/services/rest';
import { HttpMethod, UI_Paths, paths } from '@/app/constant/urlResource';

const Products = async ({params}) => {
  const products = await rest(HttpMethod.GET, createURI([paths.PRODUCTS, params.type, params.subtype]));
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-4">
        {products.map((product) => (
            <Card
              href={createCaseURI([UI_Paths.PRODUCT, product.title.toLowerCase(), product.code])}
              key={product.code}
              image={product.img}
              title={product.title}
              price={product.price}
              name={product.title}
              noShadow={true}
            />
        ))}
      </div>
    </div>
  );
};

export default Products;

export const revalidate = 10;