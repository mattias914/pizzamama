import './Navbar.css';
import { Link } from 'react-router-dom';
import { PizzaContext } from "../../context/PizzaProvider";
import { useContext } from 'react';

const Navbar = () => {
  const { cart } = useContext(PizzaContext);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);



  return(<div className="navbar">
    <Link className='link' to="/">
    <h2><i className="lni lni-pizza"></i>Pizzería Mamma Mia!</h2>
    </Link>
    <Link className='link' to="/carrito">
    <h2><i className="lni lni-cart"></i>Total: ${totalPrice}</h2>
    </Link>
    
  </div>
  )
};

export default Navbar;