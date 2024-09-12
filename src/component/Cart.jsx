import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleConfirm = () => {
    navigate("/checkout");
  };

  return (
    <div className=" w-[400px] h-[650px] bg-[#EE6F57] flex flex-col justify-between overflow-hidden rounded-lg">
      <Header />
      <div className=" h-[600px] w-full mt-2 px-2 overflow-auto bg-amber-200 ">
        <h1>Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.product_id} className="cart-item">
                <h3>{item.product_name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => decreaseQuantity(item.product_id)}>
                  -
                </button>
                <button onClick={() => increaseQuantity(item.product_id)}>
                  +
                </button>
                <button onClick={() => removeFromCart(item.product_id)}>
                  Remove
                </button>
              </div>
            ))}
            <h2>Total: ${total.toFixed(2)}</h2>
            <button onClick={handleConfirm}>Confirm and Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
