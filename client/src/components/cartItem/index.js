import React from 'react';


const cartItem = ( item ) => {
  return (
    <div className="cart">
      <div className="close">[close]</div>
      <div>
        <img
        src={`/images/${item.image}`}
        alt=""
        />
        </div>
        <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
          />
          <span
            role="img"
            aria-label="trash"
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default cartItem;