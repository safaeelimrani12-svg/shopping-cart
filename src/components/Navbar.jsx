
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>MyShop</h2>

      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/products">Produits</Link></li>
        <li><Link to="/cart">Panier</Link></li>
        <li><Link to="/checkout">Payer</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
