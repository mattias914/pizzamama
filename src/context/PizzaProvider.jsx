import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  const getPizzas = async () => {
    const res = await fetch("/pizzas.json");
    const pizzas = await res.json();
    setPizzas(pizzas);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  const addToCart = (pizza) => {
    setCart((prevCart) => [...prevCart, pizza]);
  };

  const getPizzaById = (id) => {
    return pizzas.find((pizza) => pizza.id === id);
  };

  return (
    <PizzaContext.Provider
      value={{ pizzas, setPizzas, getPizzaById, cart, addToCart }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
