import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductSlider, { ProductsRender } from "../components/ProductsRender";
import BreadcrumbBanner from "../components/BreadcrumbBanner";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.json";

function Shop() {

    
    const { filteredProducts } = useContext(CartContext);

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
                                        <strong>Showing {filteredProducts.length} of {productsData.length} products</strong>
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
                        
                            {filteredProducts.length === 0 ? (
                                <p className="text-center">No products found</p>
                                ) : (
                                <div className="row row-cols-2 row-cols-md-3">
                                    {filteredProducts.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                                )
                            }
                        
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Shop;