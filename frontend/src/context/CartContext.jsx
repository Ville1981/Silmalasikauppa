import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const tallennettu = localStorage.getItem("cart");
    return tallennettu ? JSON.parse(tallennettu) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (tuote) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === tuote.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === tuote.id ? { ...item, määrä: item.määrä + 1 } : item
        );
      } else {
        return [...prevCart, { ...tuote, määrä: 1 }];
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, määrä) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, määrä: Math.max(1, määrä) } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
