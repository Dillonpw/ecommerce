import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
  }

  interface CartItem {
    product: Product;
    quantity: number;
  }

interface ShopContextProps {
  products: Product[];
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}


const defaultState: ShopContextProps = {
    products: [],
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
  };
  
  interface ShopProviderProps {
    children: ReactNode;
  }
  
  export const ShopContext = createContext<ShopContextProps>(defaultState);
  
  export const useShop = () => {
    const context = useContext(ShopContext);
    if (context === undefined) {
      throw new Error('useShop must be used within a ShopProvider');
    }
    return context;
  };
  
  export const ShopProvider: React.FC<ShopProviderProps> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products?limit=8")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  
    const addToCart = (product: Product) => {
      const existingCartItem = cartItems.find(item => item.product.id === product.id);
      if (existingCartItem) {
        setCartItems(cartItems.map(item => 
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ));
      } else {
        setCartItems([...cartItems, { product, quantity: 1 }]);
      }
    };
  
    const removeFromCart = (productId: number) => {
      setCartItems(cartItems.filter(item => item.product.id !== productId));
    };
  
    return (
      <ShopContext.Provider value={{ products, cartItems, addToCart, removeFromCart }}>
        {children}
      </ShopContext.Provider>
    );
  };
  
