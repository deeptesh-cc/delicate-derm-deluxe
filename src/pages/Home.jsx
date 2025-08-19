import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import ProductSlider, { ProductsRender } from "../components/ProductsRender";
import TestimonialSlider from "../components/TestimonialsRender";
import CategoryBlock, { CategoryBlockRender } from "../components/CategoryBlock";

function Home() {
    return(
        <>
            <section className="heroBanner">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-10">
                        <h1 className="heroHeading text-center">Let's be lovely. Be Unique & Beautiful</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 order-xl-1 col-md-6 order-md-2 col-sm-6 position-relative">
                        <div className="hero-feat">
                        <img src="images/feature-images/hero-feat.jpg" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-xl-3 order-xl-2 col-md-7 order-md-1 col-sm-6 mx-auto align-self-center">
                        <div className="hero-content text-md-center text-xl-start">
                        <h3>10m+ lovely Customers</h3>
                        <p>We believe in combining artistry and care to deliver the perfect experience for every client. From classic manicures to creative nail.</p>
                        <div className="mt-4">
                            <Button to="/shop" variant="solid">
                                Explore Now
                            </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 order-xl-3 col-md-6 order-md-3 col-sm-9 mx-auto">
                        <div className="hero-feat02">
                        <img src="images/feature-images/banner-feat-02.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="sectionGap aboutUsArea">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-5 col-md-8 align-self-end">
                        <SectionTitle
                            title='"Inspired by Nature, Powered by Passion, and Committed to Unveiling Your Most Radiant Self"'
                            alignment="text-start"
                            variant="light"
                            extraclasses="mb-md-0"
                        />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 ps-xl-5">
                        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-1 justify-content-center">
                            <div className="col">
                                <div className="counter-circle light">
                            <div>
                            <h4 className="counter-title">10m+</h4>
                            <p>World Wide Customers</p>
                            </div>
                            </div>
                            </div>
                            <div className="col">
                                <div className="counter-circle light">
                                <div>
                                <h4 className="counter-title">4.4</h4>
                                <img src="images/icons/rating-stars.svg" alt=""/>
                                <p>Overall Rated <br/> by Customers</p>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="counter-circle light">
                                <div>
                                <p className="mt-0 mb-2">10m+ Global Trusted Customers</p>
                                <img src="images/feature-images/customers-collage.png" className="img-fluid" alt=""/>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sectionGap categoryArea">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <SectionTitle
                                title="Shop By Category"
                                alignment="text-center" 
                            />
                        </div>
                        </div>
                        <div className="category-row-wrapper">
                        <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5 justify-content-center">
                            <CategoryBlockRender />
                        </div>
                        </div>
                </div>
            </section>
            <section className="sectionGap productsArea overflow-hidden">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <SectionTitle
                                title="Explore Our Skin Care Products"
                                alignment="text-center" 
                            />
                        </div>
                    </div>
                    
                    
                        <ProductSlider filterType="single" />
                    
                </div>
            </section>
            <section className="sectionGap benefitsArea">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-4 col-md-5 align-self-center">
                            <SectionTitle
                                title="The benefits you getting from our Products"
                                extraclasses="text-md-start text-xl-center"
                            />
                        </div>
                        <div className="col-xl-4 offset-xl-0 col-lg-7 offset-lg-1 col-md-6 align-self-center">
                            <div className="benefit-block text-end">
                                <div className="d-flex flex-row-reverse align-items-center">
                                    <div>
                                    <h3>Deep Hydration</h3>
                                    <p>Infuses your skin with lasting moisture to keep it soft, supple, and plump all day long.</p>
                                    </div>
                                    <span className="number">01.</span>
                                </div>
                            </div>
                            <div className="benefit-block text-end">
                                <div className="d-flex flex-row-reverse align-items-center">
                                    <div>
                                    <h3>For All Skin Types</h3>
                                    <p>Formulated with skin-loving, non-irritating ingredients that are perfect even for sensitive skin.</p>
                                    </div>
                                    <span className="number">02.</span>
                                </div>
                            </div>
                            <div className="benefit-block text-end">
                                <div className="d-flex flex-row-reverse align-items-center">
                                    <div>
                                    <h3>Natural Glow Boost</h3>
                                    <p>Enriched with botanical extracts that revive dull skin and enhance your natural radiance.</p>
                                    </div>
                                    <span className="number">03.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
                            <div className="position-relative my-4 my-md-0">
                            <div className="feat-img">
                            <img src="images/feature-images/benefits-feat.jpg" className="img-fluid" alt=""/>
                            </div>
                            <div className="feat-img02">
                            <img src="images/feature-images/benefit-feat02.png" className="img-fluid" alt=""/>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-7 col-md-6 align-self-center">
                            <div className="benefit-block">
                                <div className="d-flex align-items-center">
                                    <div>
                                    <h3>Fights Early Aging</h3>
                                    <p>Packed with antioxidants and nutrients that reduce fine lines and support youthful skin.</p>
                                    </div>
                                    <span className="number">04.</span>
                                </div>
                            </div>
                            <div className="benefit-block">
                                <div className="d-flex align-items-center">
                                    <div>
                                    <h3>Clean & Toxin-Free</h3>
                                    <p>Free from parabens, sulfates, and harsh chemicals—only pure, effective skincare you can trust.</p>
                                    </div>
                                    <span className="number">05.</span>
                                </div>
                            </div>
                            <div className="benefit-block">
                                <div className="d-flex align-items-center">
                                    <div>
                                    <h3>Light & Non-Greasy</h3>
                                    <p>Enriched with botanical extracts that revive dull skin and enhance your natural radiance.</p>
                                    </div>
                                    <span className="number">06.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sectionGap productsArea overflow-hidden">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <SectionTitle
                                title="Buy in combos get more Discounts"
                                alignment="text-center" 
                            />
                        </div>
                    </div>
                    
                        <ProductSlider filterType="combo" />
                </div>
            </section>
            <section className="sectionGap testimonialsArea pb-0">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-7 col-lg-6 col-md-5">
                            <SectionTitle
                                title="10m+ Customer said About Our Skin Care Products"
                                extraclasses="text-md-start mb-md-0"
                            />
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-7">
                        <div className="counter-wrap">
                            <div className="row row-cols-2 justify-content-end">
                            <div className="col">
                                <div className="counter-circle mb-0">
                                <div>
                                <p className="mt-0 mb-2">10m+ Global Trusted Customers</p>
                                <img src="images/feature-images/customers-collage.png" className="img-fluid" alt=""/>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="counter-circle mb-0">
                                <div>
                                <h4 className="counter-title">4.4</h4>
                                <img src="images/icons/rating-stars.svg" alt=""/>
                                <p>Overall Rated <br/> by Customers</p>
                                </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-6 col-md-6">
                            <TestimonialSlider />
                        </div>
                        <div className="col-xl-5 col-md-6 text-center">
                            <img src="images/feature-images/testimonial-feat.png" className="img-fluid mt-5" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sectionGap faqsArea">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-7">
                            <SectionTitle
                                title="Redefining Beauty Standards, One Client at a Time"
                                extraclasses="text-xl-start"
                            />
                        <div className="col-xl-11">
                            <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Are your products suitable for all skin types?
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Yes! Our formulas are designed to be gentle, effective, and suitable for all skin types, including sensitive skin.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How long before I see results?
                                </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Yes! Our formulas are designed to be gentle, effective, and suitable for all skin types, including sensitive skin.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Do your products contain parabens or sulfates?
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Yes! Our formulas are designed to be gentle, effective, and suitable for all skin types, including sensitive skin.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    How should I store your products?
                                </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Yes! Our formulas are designed to be gentle, effective, and suitable for all skin types, including sensitive skin.
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-xl-block col-xl-5">
                        <img src="images/feature-images/faq-feat.jpg" className="img-fluid" alt=""/>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;