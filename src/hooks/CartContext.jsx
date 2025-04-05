import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const putProductInCart = (product) => {
    const productIndex = cartProducts.findIndex((prd) => product.id === prd.id);

    let newCartProducts = [];

    if (productIndex >= 0) {
      newCartProducts = cartProducts;
      newCartProducts[productIndex].quantity += 1;

      setCartProducts(newCartProducts);
    } else {
      product.quantity = 1;
      newCartProducts = [...cartProducts, product];

      setCartProducts(newCartProducts);
    }

    updateLocalStorage(newCartProducts);
  };

  const clearCart = () => {
    setCartProducts([]);
    updateLocalStorage([]);
  };

  const deleteProduct = (productId) => {
    const newCartProducts = cartProducts.filter((prd) => prd.id !== productId);

    setCartProducts(newCartProducts);
    updateLocalStorage(newCartProducts);
  };

  const increaseProduct = (productId) => {
    const newCartProducts = cartProducts.map((prd) => {
      return prd.id === productId ? { ...prd, quantity: prd.quantity++ } : prd;
    });

    setCartProducts(newCartProducts);
    updateLocalStorage(newCartProducts);
  };

  const decreaseProduct = (productId) => {
    const productIndex = cartProducts.findIndex((prd) => prd.id === productId);

    if (cartProducts[productIndex].quantity > 1) {
      const newCartProducts = cartProducts.map((prd) => {
        return prd.id === productId
          ? { ...prd, quantity: prd.quantity-- }
          : prd;
      });

      setCartProducts(newCartProducts);
      updateLocalStorage(newCartProducts);
    } else {
      deleteProduct(productId);
    }
  };

  const updateLocalStorage = (product) => {
    localStorage.setItem("devburger:cartInfo", JSON.stringify(product));
  };

  useEffect(() => {
    const userProducts = JSON.parse(localStorage.getItem("devburger:cartInfo"));

    if (userProducts) {
      setCartProducts(userProducts);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        clearCart,
        deleteProduct,
        increaseProduct,
        decreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be a valid context.");
  }

  return context;
};
