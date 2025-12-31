import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Range } from "react-range";

function FilterSidebar() {

    const { searchTerm,
            setSearchTerm,
            selectedCategories,
            toggleCategory,
            selectedTypes,
            toggleType,
            priceRange,
            setPriceRange } = useContext(CartContext);



    //const cateGories = []

    return(
        <>
            <div className="sidebar-widget">
                <input
                   type="text"
                   className="form-control"
                   id="productSearch"
                   placeholder="Search Products..."
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="sidebar-widget">
                <p className="widget-title">Product Category</p>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" value="" id="SkinSerum" 
                        checked={selectedCategories.includes("skin-serum")}
                        onChange={() => toggleCategory("skin-serum")}    
                    />
                    <label className="form-check-label" htmlFor="SkinSerum">
                        Skin Serum
                    </label>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" value="" id="FaceCream"
                         checked={selectedCategories.includes("face-cream")}
                         onChange={() => toggleCategory("face-cream")}    
                    />
                    <label className="form-check-label" htmlFor="FaceCream">
                        Face Cream
                    </label>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" value="" id="SkinToner"
                         checked={selectedCategories.includes("skin-toner")}
                         onChange={() => toggleCategory("skin-toner")}
                    />
                    <label className="form-check-label" htmlFor="SkinToner">
                        Skin Toner
                    </label>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" value="" id="SingleProduct"
                        checked={selectedTypes.includes("single")}
                        onChange={() => toggleType("single")}
                    />
                    <label className="form-check-label" htmlFor="SingleProduct">
                        Single Product
                    </label>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" value="" id="ComboProduct"
                        checked={selectedTypes.includes("combo")}
                        onChange={() => toggleType("combo")}
                    />
                    <label className="form-check-label" htmlFor="ComboProduct">
                        Combo Product
                    </label>
                </div>
            </div>
            <div className="sidebar-widget">
                <p className="widget-title">Price Range</p>

                <div className="rangeWrap">
                <Range
                    step={1}
                    min={0}
                    max={100}
                    values={priceRange}
                    onChange={setPriceRange}
                    renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                        height: "5px",
                        width: "100%",
                        background: "linear-gradient(to right, var(--color-border) 0%, var(--color-border) " +
                            (priceRange[0] / 1) +
                            "%, var(--color-secondary) " +
                            (priceRange[0] / 1) +
                            "%, var(--color-secondary) " +
                            (priceRange[1] / 1) +
                            "%, var(--color-border) " +
                            (priceRange[1] / 1) +
                            "%, var(--color-border) 100%)",
                        borderRadius: "5px",
                        }}
                    >
                        {children}
                    </div>
                    )}
                    renderThumb={({ props, index }) => {
                        const { key, ...restProps } = props;
                        return (
                          <div
                            key={index}
                            {...restProps}
                            style={{
                            //   ...restProps.style,
                              height: "1rem",
                              width: "1rem",
                              borderRadius: "50%",
                              backgroundColor: "var(--color-secondary)",
                            }}
                          />
                        );
                      }}
                />
                </div>
                <div className="range-display">
                   Price: &nbsp;
                   <span>${priceRange[0]}</span> - <span> ${priceRange[1]}</span>
               </div>
            </div>
            <div className="">
                <div className="position-relative">
                    <div className="position-absolute start-0 bottom-0 p-4">
                        <h3 className="text-white" style={{fontSize: "2.25rem"}}>Looking for Beauty Product 20% off</h3>
                    </div>
                    <img src="images/backgrounds/shop-offer.png" className="img-fluid" />
                </div>
            </div>
        </>
    )
}

export default FilterSidebar