import { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import productsData from "../data/products.json";


function ProductsRender({ filterType }) {
    // const filterByType = productsData.filter(
    //   (product) => product.type === filterType
    // );
  
    const filterByType = filterType
    ? productsData.filter((product) => product.type === filterType)
    : productsData;
    
    return (
     <>
        {filterByType.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </>
    );
  }



const ProductSlider = ({ filterType }) => {

  const filterByType = filterType
    ? productsData.filter((p) => p.type === filterType)
    : productsData;

  
    const [slidesToShow, setSlidesToShow] = useState(4);

  
    useEffect(() => {
      const updateSlides = () => {
        if (window.innerWidth < 767) setSlidesToShow(2);
        else if (window.innerWidth < 992) setSlidesToShow(3);
        else setSlidesToShow(4);
      };
  
      updateSlides(); // run on mount
      window.addEventListener("resize", updateSlides);
      return () => window.removeEventListener("resize", updateSlides);
    }, []);


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

  return (
    <div className="home-products-slider">
      <Slider {...settings}>
        {filterByType.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
};

export {ProductsRender};

export default ProductSlider;
