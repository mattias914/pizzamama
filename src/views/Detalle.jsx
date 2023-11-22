import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PizzaContext } from '../context/PizzaProvider';

const Detalle = () => {
  const { id } = useParams();
  const { getPizzaById, addToCart } = useContext(PizzaContext);
  const pizza = getPizzaById(id);

  const handleAddToCart = () => {
    addToCart(pizza);
  };

  return (
    <div className="detalle">
      <div className="img">
        <img src={pizza.img} alt={pizza.name} />
      </div>
      <div className="descripcion">
        <h4>{pizza.name}</h4>
        <hr className="linea" />
        <p className='pizza-desc'>{pizza.desc}</p>
        <h6 className='ingredientes'>Ingredientes: </h6>
        <ul className="ingredientes">
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>
              <i className="lni lni-pizza"></i>
              {ingredient}
            </li>
          ))}
        </ul>
        <div className='precio-y-btn'>
        <h4>Precio: ${pizza.price}</h4>
          <button className="buttonA" onClick={handleAddToCart}>
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
