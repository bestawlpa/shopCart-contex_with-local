import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    confirmCart,
  } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleConfirm = () => {
    confirmCart();
    navigate("/checkout");
  };

  return (
    <div className=" w-[600px] h-[650px] bg-[#EE6F57] flex flex-col justify-between overflow-hidden rounded-lg">
      <Header />
      <div className=" h-[600px] w-full mt-2 px-2 overflow-auto bg-[#F5F5F5] flex flex-col items-center">
        <div className="  w-[150px] h-[80px] flex justify-center items-center mt-3 text-[#604CC3] font-bold text-lg">
          <h1>Shopping Cart</h1>
        </div>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.product_id} className="cart-item">
                <div className="flex flex-col items-center my-4 h-[150px] w-[370px] bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="flex flex-row items-center px-4 leading-normal">
                    <img
                      src={item.images[0]}
                      alt=""
                      className=" w-[100px] h-[100px]"
                    />
                    <div className=" font-normal text-gray-700 dark:text-gray-400 w-[240px] h-[130px] px-2 flex flex-col justify-around">
                      <h3 className=" text-sm font-semibold text-red-600">
                        {item.product_name}
                      </h3>

                      <div className=" flex justify-center items-center space-x-3">
                        <button
                          onClick={() => decreaseQuantity(item.product_id)}
                          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                        >
                          -
                        </button>
                        <p className="text-lg font-semibold">{item.quantity}</p>
                        <button
                          onClick={() => increaseQuantity(item.product_id)}
                          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product_id)}
                      className=" text-[#0C0C0C] hover:text-red-600 "
                    >
                      <DeleteOutlineIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className=" mb-6">
              <div className=" h-[30px] text-xl font-semibold">
                <h2>
                  Total : ${" "}
                  <span className=" text-red-700">{total.toFixed(2)}</span>
                </h2>
              </div>
              <button onClick={handleConfirm}>
                <div className=" w-[100px] h-[40px] hover:bg-red-600 bg-red-800 transition-colors text-white flex justify-center items-center font-semibold rounded-xl mt-2">
                  Checkout
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
