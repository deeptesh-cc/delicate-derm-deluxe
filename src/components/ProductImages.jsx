import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";

function ProductImages() {
    const mainSlider = useRef(null);
    const thumbSlider = useRef(null);
  
    const [navMain, setNavMain] = useState(null);
    const [navThumb, setNavThumb] = useState(null);

    // Sync refs after mount
  useEffect(() => {
    setNavMain(mainSlider.current);
    setNavThumb(thumbSlider.current);
  }, []);

  const productImg = [
    "images/products/product2.png",
    "images/products/product3.png",
    "images/products/product4.png",
  ];

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
  };

  return (
    <div className="product-slider">
      {/* Main Image Slider */}
      <Slider {...mainSettings} ref={mainSlider}>
        {productImg.map((img, index) => (
          <div key={index}>
            <img src={img} className="img-fluid" alt={`Product ${index}`} />
          </div>
        ))}
      </Slider>

      {/* Thumbnail Slider */}
      <Slider {...thumbSettings} ref={thumbSlider}>
        {productImg.map((img, index) => (
          <div key={index}>
            <img src={img} className="img-fluid" alt={`Thumb ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ProductImages