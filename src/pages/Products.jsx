import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useSelector } from 'react-redux';

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  console.log(cart);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        console.log(data.products);
      })
      .catch(error => console.log(error));
  }, []);

  
  return (
    <div className="products-container">
      <h2>Products</h2>
      <p>Cart: {cart.length} products</p>

      <div className="products-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              width="150"
            />

            <h3>{product.title}</h3>
            <p>ID: {product.id}</p>
            <p>Price: {product.price} $</p>
            <button onClick={() => dispatch(addToCart(product))}>
            Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );


}

export default Products;
