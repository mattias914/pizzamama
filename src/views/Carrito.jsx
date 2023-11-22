import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaProvider";
import './Carrito.css'

const Carrito = () => {
  const { cart } = useContext(PizzaContext);
  const total = cart.reduce((acc, pizza) => acc + pizza.price, 0);
  
  return (
    <div className="carrito-container">
      <div className="compras">
        {cart.map((pizza) => (
          <div key={pizza.id} className="carrito-item">
            <div className="item-img">
              <img src={pizza.img} alt={pizza.name} />
              <p className="item-name">{pizza.name}</p>
            </div>
            <div className="item-masmenos">
              <button className="mas-menos-btn">+</button>
              <p className="item-quantity">10</p>
              <button className="mas-menos-btn">-</button>
            </div>
          </div>
        ))}
      </div>
      <div className="total-container">
        <p className="total-amount">Total: ${total}</p>
        <button className="pagar-btn">Ir a Pagar</button>
      </div>
    </div>
  );
};

export default Carrito;