"use client"
import React, { useEffect, useState } from 'react';
import Card from '@/app/components/Card';
import rest, { createCaseURI, createURI } from '@/app/services/rest';
import { HttpMethod, UI_Paths, paths } from '@/app/constant/urlResource';
import FilterSlider from '@/app/components/FilterSlider';

const Products = ({params}) => {
  const [products, setProducts] = useState([]);
  
  const getTitle = () => {
    if (params.subtype) {
      return params.subtype.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    }
    return "";
  }

  const onFilter = async (filters) => {
    const products = await rest(HttpMethod.POST, paths.FILTERED_PRODUCTS, filters);
    if (products) {
      setProducts(products);
    }
    return true;
  }

  useEffect(() => {
    async function fetchProducts() {
      const products = await rest(HttpMethod.GET, createURI([paths.PRODUCTS, params.type, params.subtype]));
      setProducts(products);
    }
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className='flex h-12 justify-between pb-2 mt-4 mb-4'>
        <div className='justify-start'>{getTitle()}</div>
        <FilterSlider onFilter={onFilter}/>
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