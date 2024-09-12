import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import Header from "./Header";
const Product = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error("There was a problem with the fetch operation:", err);
      });
  }, []);

  return (
    <div className=" w-[450px] h-[630px] flex flex-col justify-between bg-[#EE6F57] overflow-hidden rounded-lg">
      <Header />
      <div className=" h-[600px] w-full mt-2 px-2 overflow-auto bg-[#F5F5F5] ">
        <div className="product-list grid grid-cols-2 gap-2 m-4 ">
          {products.map((product) => (
            <div
              key={product.product_id}
              className="product-card m-2 bg-white rounded-xl border-solid border-2 border-[#5C636E] overflow-hidden w-[180px] h-[260px]"
            >
              <img
                src={product.images[0]}
                alt={product.product_name}
                className="w-full h-[120px]  object-fill"
              />

              <h3
                className=" text-base font-medium tracking-tight text-gray-900 dark:text-white mb-2 line-clamp-2 text-left px-2"
                style={{ lineHeight: "1.5rem", height: "3rem" }}
              >
                {product.product_name}
              </h3>

              <p className=" text-red-600">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className=" w-[100px] h-[40px] bg-[#6A9C89] text-[#FFF5E4] rounded-xl mt-1"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
