

function FilterSidebar() {
    return(
        <>
            <div className="widget">
                <input type="search" className="form-control" id="productSearch" placeholder="Search Products..."/>
            </div>
            <div className="widget">
                <p className="widget-title">Product Category</p>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="skinSerum" />
                    <label className="form-check-label" for="skinSerum">
                        Skin Serum
                    </label>
                </div>
            </div>
            <div className="widget">
                
            </div>
        </>
    )
}

export default FilterSidebar