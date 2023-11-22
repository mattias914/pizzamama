import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div className="header">
      <h1>Pizzeria Mamma mia</h1>
      <h2>Tenemos las mejores pizzas que puedes encontrar</h2>
      <hr className='linea'/>
    </div>
  )
};

export default Header;