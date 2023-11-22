import { useContext } from "react";
import PizzaProvider from "../../context/PizzaProvider";
import { PizzaContext } from "../../context/PizzaProvider";
import './Card.css'
import { useNavigate } from "react-router-dom";

const Card = () => {
  const {pizzas , setPizzas} = useContext(PizzaContext);
  const navigate = useNavigate();
  const { getPizzaById, addToCart } = useContext(PizzaContext);

  const handleAddToCart = (pizza) => {
    addToCart(pizza);
  };
  
  const verMasClickHandler = (id) => {
    navigate(`/pizza/${id}`);
  };


  return(<div className="body">
    {pizzas.map(pizza => (
      <div className="card" key={pizza.id}>
        <img className="img" src={pizza.img} alt='' />
        <div className="descripcion">
          <h4 className="titulo">{pizza.name}</h4>
          <hr className="linea" />
          <h6>Ingredientes: </h6>
          <ul className="ingredientes">
          {pizza.ingredients.map((ingredient, index) => (
                <li key={index}><i className="lni lni-pizza"></i>{ingredient}</li>
              ))}
          </ul>
          <hr className="linea" />
          <h4 className="price">Precio: ${pizza.price}</h4>
          <button onClick={() => verMasClickHandler(pizza.id)}>Ver mas</button>
          <button className="buttonA" onClick={() => handleAddToCart(pizza)}>Añadir</button>
        </div>
      </div>
    ))}
  </div>
)};

export default Card;