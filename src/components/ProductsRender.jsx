import ProductCard from "./ProductCard";
import productsData from "../data/products.json";


function ProductsRender({ filterType }) {
    // const filteredProducts = productsData.filter(
    //   (product) => product.type === filterType
    // );
  
    const filteredProducts = filterType
    ? productsData.filter((product) => product.type === filterType)
    : productsData;
    
    return (
     <>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
    </>
    );
  }
  
  export default ProductsRender;