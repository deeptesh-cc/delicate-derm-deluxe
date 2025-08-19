import Slider from "react-slick";
import TestimonialsData from "../data/testimonials.json"
import TestimonialCard from "./TestimonialCard";


function TestimonialSlider() {

    const settings = {
        dots: false,
        nav: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: (
            <div>
                <img src='images/icons/nav-arrow-right.svg'/>
            </div>
        ),
        prevArrow: (
            <div>
                <img src='images/icons/nav-arrow-left.svg'/>
            </div>
        ),
        // responsive: [
        //   {
        //     breakpoint: 992,
        //     settings: { slidesToShow: 1 }
        //   },
        //   {
        //     breakpoint: 768,
        //     settings: { slidesToShow: 1 }
        //   },
        //   {
        //     breakpoint: 320,
        //     settings: { slidesToShow: 1 }
        //   }
        // ]
    };

    return(
        <div className="testimonial-slider">
            <Slider {...settings}>
                {TestimonialsData.map((item) => (
                    <TestimonialCard key={item.id} {...item} />
                ))}
            </Slider>
        </div>
    )
}

export default TestimonialSlider