//https://www.youtube.com/watch?v=AmIdY1Eb8tY&ab_channel=CodingwithBasir


import Main from './OfferMain';
import Basket from './OfferBasket';
import data from './OfferData';
import { useState } from 'react';
import '../../App.css';
import './Offer.css';


export default function Offer() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return( 
  <div className='offer'>
      <div className="row">
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
        <Main products={products} onAdd={onAdd}></Main>
        
      </div>
  </div>);
}