import { useState } from "react";
import { Range } from "react-range";

function FilterSidebar() {

    const [values, setValues] = useState([5, 50]);

    //const cateGories = []

    return(
        <>
            <div className="sidebar-widget">
                <input type="search" className="form-control" id="productSearch" placeholder="Search Products..."/>
            </div>
            <div className="sidebar-widget">
                <p className="widget-title">Product Category</p>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" value="" id="SkinSerum" />
                    <label className="form-check-label" htmlFor="SkinSerum">
                        Skin Serum
                    </label>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" value="" id="FaceCream" />
                    <label className="form-check-label" htmlFor="FaceCream">
                        Face Cream
                    </label>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" value="" id="SkinToner" />
                    <label className="form-check-label" htmlFor="SkinToner">
                        Skin Toner
                    </label>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" value="" id="SingleProduct" />
                    <label className="form-check-label" htmlFor="SingleProduct">
                        Single Product
                    </label>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" value="" id="ComboProduct" />
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
                    values={values}
                    onChange={(vals) => setValues(vals)}
                    renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                        height: "5px",
                        width: "100%",
                        background: "linear-gradient(to right, var(--color-border) 0%, var(--color-border) " +
                            (values[0] / 1) +
                            "%, var(--color-secondary) " +
                            (values[0] / 1) +
                            "%, var(--color-secondary) " +
                            (values[1] / 1) +
                            "%, var(--color-border) " +
                            (values[1] / 1) +
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
                   <span>${values[0]}</span> -
                   <span> ${values[1]}</span>
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