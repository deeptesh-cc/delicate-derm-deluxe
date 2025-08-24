import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";

function ProductImages({product}) {
    const mainSlider = useRef(null);
    const thumbSlider = useRef(null);
  
    const [navMain, setNavMain] = useState(null);
    const [navThumb, setNavThumb] = useState(null);

    // Sync refs after mount
  useEffect(() => {
    setNavMain(mainSlider.current);
    setNavThumb(thumbSlider.current);
  }, []);

  // const productImg = [
  //   "images/products/product2.png",
  //   "images/products/product3.png",
  //   "images/products/product4.png",
  // ];

  const mainSettings = {
    asNavFor:  navThumb,
    ref: mainSlider,
    arrows: false,
    fade: true,
  };

  const thumbSettings = {
    asNavFor: navMain,
    ref: thumbSlider,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    // vertical: true,      
    // verticalSwiping: true,
  };

  return (
    <div className="product-details-slider bg-white">

      {/* Main Image Slider */}
      <div className="main-slider pt-4">
      <Slider {...mainSettings} ref={mainSlider}>
        {product.image.map((img, index) => (
          <div key={index}>
            <img src={img} className="img-fluid" alt={`Product ${index}`} />
          </div>
        ))}
      </Slider>
      </div>

      {/* Thumbnail Slider */}
      <div className="thumb-slider py-4">
        <Slider {...thumbSettings} ref={thumbSlider}>
          {product.image.map((img, index) => (
            <div key={index}>
              <img src={img} className="img-fluid" alt={`Thumb ${index}`} />
            </div>
          ))}
        </Slider>
      </div>

      

    </div>
  )
}

export default ProductImages