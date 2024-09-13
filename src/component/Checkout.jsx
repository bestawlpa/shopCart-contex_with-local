import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, isConfirmed, clearCart } = useContext(CartContext);
  const [orderDetails, setOrderDetails] = useState({
    name: "test-01",
    email: "test@hotmail.com",
    address: "bangkok",
    phone: "123456789",
  });

  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Placed:", orderDetails, cart);

    // clear
    clearCart();

    // success message
    alert("Order placed successfully!");

    navigate("/");
  };

  return (
    <div className="w-[600px] h-[650px] bg-[#EE6F57] flex flex-col justify-between overflow-hidden rounded-lg">
      <Header />
      <div className="h-[600px] w-full flex flex-col items-center mt-2 px-2 overflow-auto bg-[#F5F5F5]">
        <div className=" w-[200px] h-[100px]  text-4xl mt-4 font-extrabold">
          <h1>Checkout</h1>
        </div>
        {!isConfirmed ? (
          <div>Please confirm your cart first.</div>
        ) : (
          <div className="container mx-auto p-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 border-b text-left">Product</th>
                    <th className="py-2 px-4 border-b text-left">Price</th>
                    <th className="py-2 px-4 border-b text-left">Quantity</th>
                    <th className="py-2 px-4 border-b text-left">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.product_id} className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b">
                        {item.product_name}
                      </td>
                      <td className="py-2 px-4 border-b">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="py-2 px-4 border-b">{item.quantity}</td>
                      <td className="py-2 px-4 border-b">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td
                      colSpan="3"
                      className="py-2 px-4 text-right border-b font-bold"
                    >
                      Total:
                    </td>
                    <td className="py-2 px-4 border-b font-bold">
                      ${total.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>

              <form onSubmit={handleSubmit} className="mt-6">
                <div className="mb-4">
                  <label className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={orderDetails.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={orderDetails.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    placeholder="Address"
                    value={orderDetails.address}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={orderDetails.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;

// import React, { useContext, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import Header from "./Header";

// const Checkout = () => {
//   const { cart, isConfirmed, clearCart } = useContext(CartContext);
//   const [orderDetails, setOrderDetails] = useState({
//     name: "",
//     email: "",
//     address: "",
//     phone: "",
//   });
//   const navigate = useNavigate(); // Initialize useNavigate

//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const handleChange = (e) => {
//     setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Order Placed:", orderDetails, cart);

//     // Clear the cart
//     clearCart();

//     // Show success message
//     alert("Order placed successfully!");

//     // Redirect to the product page
//     navigate("/"); // Adjust the path as needed
//   };

//   return (
//     <div className="w-[600px] h-[650px] bg-[#EE6F57] flex flex-col justify-between overflow-hidden rounded-lg">
//       <Header />
//       <div className="h-[600px] w-full flex flex-col items-center mt-2 px-2 overflow-auto bg-[#F5F5F5]">
//         <div className=" w-[200px] h-[100px]  text-4xl mt-4 font-extrabold">
//           <h1>Checkout</h1>
//         </div>
//         {!isConfirmed ? (
//           <div>Please confirm your cart first.</div>
//         ) : (
//           <div className="container mx-auto p-6">
//             <div className="bg-white shadow-md rounded-lg p-6">
//               <table className="min-w-full border-collapse border border-gray-300">
//                 <thead>
//                   <tr className="bg-gray-200">
//                     <th className="py-2 px-4 border-b text-left">Product</th>
//                     <th className="py-2 px-4 border-b text-left">Price</th>
//                     <th className="py-2 px-4 border-b text-left">Quantity</th>
//                     <th className="py-2 px-4 border-b text-left">Subtotal</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cart.map((item) => (
//                     <tr key={item.product_id} className="hover:bg-gray-100">
//                       <td className="py-2 px-4 border-b">
//                         {item.product_name}
//                       </td>
//                       <td className="py-2 px-4 border-b">
//                         ${item.price.toFixed(2)}
//                       </td>
//                       <td className="py-2 px-4 border-b">{item.quantity}</td>
//                       <td className="py-2 px-4 border-b">
//                         ${(item.price * item.quantity).toFixed(2)}
//                       </td>
//                     </tr>
//                   ))}
//                   <tr>
//                     <td
//                       colSpan="3"
//                       className="py-2 px-4 text-right border-b font-bold"
//                     >
//                       Total:
//                     </td>
//                     <td className="py-2 px-4 border-b font-bold">
//                       ${total.toFixed(2)}
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>

//               <form onSubmit={handleSubmit} className="mt-6">
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Full Name</label>
//                   <input
//                     name="name"
//                     placeholder="Full Name"
//                     onChange={handleChange}
//                     required
//                     className="w-full p-2 border border-gray-300 rounded"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Email</label>
//                   <input
//                     name="email"
//                     placeholder="Email"
//                     onChange={handleChange}
//                     required
//                     className="w-full p-2 border border-gray-300 rounded"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Address</label>
//                   <input
//                     name="address"
//                     placeholder="Address"
//                     onChange={handleChange}
//                     required
//                     className="w-full p-2 border border-gray-300 rounded"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Phone Number</label>
//                   <input
//                     name="phone"
//                     placeholder="Phone Number"
//                     onChange={handleChange}
//                     required
//                     className="w-full p-2 border border-gray-300 rounded"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
//                 >
//                   Place Order
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Checkout;
