import Slider from "react-slick";
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



const ProductSlider = ({ filterType }) => {

  const filteredProducts = filterType
    ? productsData.filter((p) => p.type === filterType)
    : productsData;


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 320,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  return (
    <div className="home-products-slider">
      <Slider {...settings}>
        {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
        ))}
      </Slider>
    </div>
  );
};

export {ProductsRender};

export default ProductSlider;
