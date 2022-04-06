import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.23;
  const totalPrice = itemsPrice;
  return (
    <aside className="block col-1">
      <h2>Twój koszyk</h2>
      <div>
        {cartItems.length === 0 && <div>Twój koszyk jest pusty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x  {item.price.toFixed(2)} PLN
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Cena:</div>
              <div className="col-1 text-right"> {itemsPrice.toFixed(2)} PLN</div>
            </div>
            <div className="row">
              <div className="col-2">W tym VAT (23%):</div>
              <div className="col-1 text-right"> {taxPrice.toFixed(2)} PLN</div>
            </div>
            

            <div className="row">
              <div className="col-2">
                <strong>Suma:</strong>
              </div>
              <div className="col-1 text-right">
                <strong> {totalPrice.toFixed(2)} PLN</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Zaraz zostaniesz przeniesiony do płatności')}>
                Do kasy
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}