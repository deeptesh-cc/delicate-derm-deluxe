import ProductImages from "../components/ProductImages"
import ProductDescription from "../components/ProductDescription"
import BreadcrumbBanner from "../components/BreadcrumbBanner";

function ProductDetails() {
    return(
        <>
            <BreadcrumbBanner 
            title="Details of the product" 
            />
            <section className="sectionGap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <ProductImages />
                        </div>
                        <div className="col-xl-6">
                            <ProductDescription />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails;