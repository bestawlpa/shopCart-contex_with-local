import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Header from "./Header";

const Checkout = () => {
  const { cart, isConfirmed } = useContext(CartContext);
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Placed:", orderDetails, cart);
  };

  if (!isConfirmed) {
    return <div>Please confirm your cart first.</div>;
  }

  return (
    <div className=" w-[400px] h-[650px] bg-[#EE6F57] flex flex-col justify-between overflow-hidden rounded-lg">
      <Header />
      <div className=" h-[600px] w-full mt-2 px-2 overflow-auto bg-amber-200 ">
        <h1>Checkout</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            placeholder="email"
            onChange={handleChange}
            required
          />
          <input
            name="address"
            placeholder="Address"
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <div>
            <h2>Order Summary</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.product_id}>
                        <td>{item.product_name}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>{item.quantity}</td>
                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan="3" style={{ textAlign: "right" }}>
                        <strong>Total:</strong>
                      </td>
                      <td>${total.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
