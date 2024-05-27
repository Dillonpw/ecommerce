import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface ShopContextProps {
  products: Product[];
  categories: string[];
  selectedCategory: string;
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  setCategory: (category: string) => void;
}

const defaultState: ShopContextProps = {
  products: [],
  categories: [],
  selectedCategory: "",
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  setCategory: () => {},
};

interface ShopProviderProps {
  children: ReactNode;
}

export const ShopContext = createContext<ShopContextProps>(defaultState);

export const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};

export const ShopProvider: React.FC<ShopProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        const uniqueCategories = Array.from(
          new Set(data.map((product) => product.category))
        );
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addToCart = (product: Product, quantity: number) => {
    const existingCartItem = cartItems.find(
      (item) => item.product.id === product.id
    );
    if (existingCartItem) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { product, quantity }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCartItems(
      cartItems
        .map((item) => {
          if (item.product.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = (): void => {
    setCartItems([]);
  };

  const setCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <ShopContext.Provider
      value={{
        products: filteredProducts,
        categories,
        selectedCategory,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        setCategory,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
