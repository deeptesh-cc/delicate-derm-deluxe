import ProductImages from "../components/ProductImages"
import ProductDescription from "../components/ProductDescription"
import BreadcrumbBanner from "../components/BreadcrumbBanner";
import ProductSlider from "../components/ProductsRender";
import SectionTitle from "../components/SectionTitle";

function ProductDetails() {
    return(
        <>
            <BreadcrumbBanner 
            title="Details of the product" 
            />
            <section className="sectionGap productDetailsArea">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <ProductImages />
                        </div>
                        <div className="col-xl-6 ps-xl-4">
                            <ProductDescription />
                        </div>
                    </div>
                </div>
            </section>
            <section className="sectionGap productsArea overflow-hidden">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <SectionTitle
                                title="Related Products you might like"
                                alignment="text-center" 
                            />
                        </div>
                    </div>
                    
                    
                        <ProductSlider />
                    
                </div>
            </section>
        </>
    )
}

export default ProductDetails;