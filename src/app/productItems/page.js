import React from 'react';
import Card from '../components/Card';
import { config } from '../services/config';

const ProductList = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-4">
        {config.products.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            name={product.name}
            text={product.text}
            noShadow={true}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
