import ProductSlider, { ProductsRender } from "../components/ProductsRender";
import BreadcrumbBanner from "../components/BreadcrumbBanner";
import FilterSidebar from "../components/FilterSidebar";
import productsData from "../data/products.json";

function Shop() {
    return(
        <>
            <BreadcrumbBanner 
            title="Explore and visit our shop" 
            />
            <section className="sectionGap">
                <div className="container">
                <div className='row'>
                    <div className='col-lg-3 pe-xl-4'>
                        <FilterSidebar />
                    </div>
                    <div className='col-lg-9'>
                        <div className="mb-5">
                            <div className="row row-cols-1 row-cols-md-2 justify-content-between">
                                <div className="col">
                                    <p className="mb-md-0">
                                        <strong>Showing {productsData.length} of {productsData.length} results</strong>
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select" aria-label="Default select example">
                                        <option value="">Default sorting</option>
                                        <option value="low-high">Price Low to High</option>
                                        <option value="high-low">Price High to Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-2 row-cols-md-3">
                            <ProductsRender />
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Shop;