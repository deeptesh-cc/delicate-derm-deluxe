import { useParams } from "react-router-dom";
import productsData from "../data/products.json";
import ProductImages from "../components/ProductImages"
import ProductDescription from "../components/ProductDescription"
import BreadcrumbBanner from "../components/BreadcrumbBanner";
import ProductSlider from "../components/ProductsRender";
import SectionTitle from "../components/SectionTitle";

function ProductDetails() {

  const { id } = useParams(); 
  const productId = parseInt(id, 10);
  const product = productsData.find((p) => p.id === productId);

  if (!product) {
    return <p>Product not found</p>;
  }

    return(
        <>
            <BreadcrumbBanner 
            title="Details of the product" 
            />
            <section className="sectionGap productDetailsArea">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <ProductImages product={product} />
                        </div>
                        <div className="col-xl-6 ps-xl-4">
                            <ProductDescription product={product} />
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