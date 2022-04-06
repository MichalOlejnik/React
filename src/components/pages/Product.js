import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className='SingleProduct'>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>{product.price} PLN / 24H</div>
      <div>
        <button onClick={() => onAdd(product)}>Dodaj do Koszyka</button>
      </div>
    </div>
  );
}