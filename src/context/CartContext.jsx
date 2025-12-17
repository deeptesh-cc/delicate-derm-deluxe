import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // Load cart from localStorage
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
        const existingItem = prevCart.find(
          (item) => item.id === product.id
        );
    
        if (existingItem) {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
    
        // Add new product with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      });
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  const incrementQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity < 10 ? item.quantity + 1 : item.quantity }
          : item
      )
    );
  };
  
  const decrementQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        //.filter((item) => item.quantity > 0) 
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQty, decrementQty }}>
      {children}
    </CartContext.Provider>
  );
};
