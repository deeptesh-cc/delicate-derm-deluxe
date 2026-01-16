import { createContext, useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import productsData from "../data/products.json"

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


  /* ---------------- WISHLIST ---------------- */

  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  // Remove from wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter(item => item.id !== id));
  };

  const isInWishlist = (id) => {
    return wishlist.some(item => item.id === id);
  };

  const moveToCart = (product) => {
    // Add product to cart
    addToCart(product);
  
    // Remove product from wishlist
    setWishlist((prev) =>
      prev.filter((item) => item.id !== product.id)
    );
  };


  /* ---------------- FILTER ---------------- */

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]); 
  const [priceRange, setPriceRange] = useState([5, 50]);

  
  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {


      const matchSearch = 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.type.toLowerCase().includes(searchTerm.toLowerCase());

      //const productTypes = Array.isArray(product.type) ? product.type : [product.type];


      const matchType = selectedTypes.length === 0 || selectedTypes.includes(product.type);

      const matchCategory =
        selectedCategories.length === 0 ||
        product.categories.some(c => selectedCategories.includes(c));

      //const matchCategory = selectedCategories.length === 0 || selectedCategories.every(cat => product.type.includes(cat));              

      const matchPrice = product.price >= priceRange[0] &&  product.price <= priceRange[1];

      return matchSearch && matchType && matchCategory && matchPrice;
    });
  }, [searchTerm, selectedCategories, selectedTypes, priceRange]);

  const toggleType = (type) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };
  
  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };


     /* ---------------- PAGINATION ---------------- */

     const PRODUCTS_PER_PAGE = 6;

     const [currentPage, setCurrentPage] = useState(1);
 
     const totalPages = Math.ceil(
         filteredProducts.length / PRODUCTS_PER_PAGE
       );
       
       const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
       const endIndex = startIndex + PRODUCTS_PER_PAGE;
       
       const paginatedProducts = filteredProducts.slice(
         startIndex,
         endIndex
       );
 
       useEffect(() => {
         setCurrentPage(1);
       }, [searchTerm, selectedTypes, selectedCategories, priceRange]);


  /* ---------------- URL BASED FILTER WITH PAGINATION ---------------- */

  const [searchParams, setSearchParams] = useSearchParams();

  
  useEffect(() => {
    const search = searchParams.get("search") || "";
    const type = searchParams.get("type");
    const category = searchParams.get("category");
    const min = searchParams.get("min");
    const max = searchParams.get("max");
    const page = Number(searchParams.get("page")) || 1;

    setCurrentPage(page);
  
    setSearchTerm(search);
  
    if (type) setSelectedTypes(type.split(","));
    if (category) setSelectedCategories(category.split(","));
  
    if (min && max) {
      setPriceRange([Number(min), Number(max)]);
    }
  }, []);

  useEffect(() => {
    const params = {};

    const MIN_PRICE = 0;
    const MAX_PRICE = 100;
  
    if (searchTerm.trim()) {
      params.search = searchTerm;
    }

    if (selectedTypes.length > 0) {
      params.type = selectedTypes.join(",");
    }
  
    if (selectedCategories.length > 0) {
      params.category = selectedCategories.join(",");
    }
  
    if (priceRange[0] !== MIN_PRICE || priceRange[1] !== MAX_PRICE) {
      params.min = priceRange[0];
      params.max = priceRange[1];
    }

    if (currentPage > 1) {
      params.page = currentPage;
    }
  
    setSearchParams(params);
  }, [searchTerm, selectedTypes, selectedCategories, priceRange, currentPage]);


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementQty,
        decrementQty,
        wishlist,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        moveToCart,
        // products: productsData,
        searchTerm,
        setSearchTerm,
        selectedCategories,
        toggleCategory,
        selectedTypes,
        toggleType,
        priceRange,
        setPriceRange,
        filteredProducts,
        currentPage,
        setCurrentPage,
        totalPages,
        paginatedProducts
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
