import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <div className="navbar">
      <Link to="/">
        <img className="logo" src="pood.png" alt=""/>
      </Link>
      <Link to="admin">
        <button>Admini vaatesse</button>
      </Link>
      <Link to="cart">
        <img className="cart" src="cart.svg" alt=""/>
      </Link>
    </div>
  );
}

// alumine tehke ise

export default Navbar;