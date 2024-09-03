import React from 'react';
import Card from '@/app/components/Card';
import rest, { createCaseURI, createURI } from '@/app/services/rest';
import { HttpMethod, UI_Paths, paths } from '@/app/constant/urlResource';
import IconButton from '@/app/components/common/IconButton';

const Products = async ({params}) => {
  const products = await rest(HttpMethod.GET, createURI([paths.PRODUCTS, params.type, params.subtype]));
  const getTitle = () => {
    if (params.subtype) {
      return params.subtype.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    }
    return "";
  }

  return (
    <div className="container mx-auto p-4">
      <div className='flex h-10 justify-between pb-2'>
        <div className='justify-start'>{getTitle()}</div>
        <IconButton right="Filters" iconSrc="/filter.svg" className={"rounded-full border border-secondary p-2"}/>
      </div>
      <div className="flex flex-wrap -mx-4">
        {products.map((product) => (
            <Card
              href={createCaseURI([UI_Paths.PRODUCT, product.title.toLowerCase(), product.code])}
              key={product.code}
              image={product.images}
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