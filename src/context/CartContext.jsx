import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isConfirmed, setIsConfirmed] = useState(false);

  const confirmCart = () => {
    setIsConfirmed(true);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find(
        (item) => item.product_id === product.product_id
      );
      let updatedCart;

      if (itemExists) {
        updatedCart = prevCart.map((item) =>
          item.product_id === product.product_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      console.log("Cart updated:", updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((e) => {
      const updatedCart = e.filter((item) => item.product_id !== productId);
      console.log("Cart after removal:", updatedCart);
      return updatedCart;
    });
  };

  const increaseQuantity = (productId) => {
    setCart((e) => {
      const updatedCart = e.map((item) =>
        item.product_id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      console.log("Cart after increase:", updatedCart);
      return updatedCart;
    });
  };

  const decreaseQuantity = (productId) => {
    setCart((e) => {
      const updatedCart = e
        .map((item) =>
          item.product_id === productId
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        )
        .filter((item) => item.quantity > 0);
      console.log("Cart after decrease:", updatedCart);
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    setIsConfirmed(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        isConfirmed,
        confirmCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
