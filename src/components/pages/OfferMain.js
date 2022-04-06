import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="mainblock">
      <h1>Mamy Państwu do zaoferowania karty podarunkowe, upoważniające do wynajęcia jednego z naszych pojazdów, na 24 godziny</h1>
      
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}