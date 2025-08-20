import ProductSlider, { ProductsRender } from "../components/ProductsRender";


function Shop() {
    return(
        <section className="sectionGap">
            <div className="container">
            <div className='row'>
                <div className='col-lg-3'>

                </div>
                <div className='col-lg-9'>
                    <div className="row row-cols-2 row-cols-md-3">
                        <ProductsRender />
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Shop;