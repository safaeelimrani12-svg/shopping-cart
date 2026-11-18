import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity} from '../redux/cartSlice';

function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
    );

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      <h3 className="cart-total">Total: {total.toFixed(2)} $</h3>

      {cart.map(product => (
        <div key={product.id} className="cart-item">
          <h3>{product.title}</h3>
          <p>Price: {product.price} $</p>
          <p>Quantity: {product.quantity}</p>
          <p>Sous-total: {(product.price * product.quantity).toFixed(2)} $</p>
          <button onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
          <span>{product.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
          <button onClick={() => dispatch(removeFromCart(product.id))}>
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
