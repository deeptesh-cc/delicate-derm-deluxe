

function CartProduct() {
    return(
        <>
            <div className="cart_item">
                <div className="row align-items-center">
                    <div className="col-sm-4">
                        <div className="image-area text-center py-3">
                            <a href="#">
                                <img
                                src="images/products/product2.png"
                                className="img-fluid"
                                alt="Pre Workout Capsules"
                                style={{maxHeight: "10.65rem", objectFit: "contain"}}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="cont-area py-3">
                            <p className="product-name">Skin Serum</p>
                            <p style={{marginBottom:"0", fontSize:"0.9rem"}}><strong>Brand: </strong>
                            <span>Delicate Derm Deluxe</span>
                            </p>
                            <div className="rating mt-1 mb-2">
                                       <img src="/images/icons/rating-stars.svg" width="87" className="d-inline-block" />
                                            <span className="ps-1" style={{fontSize: "0.9rem"}}>(4.2)
                                        </span>
                             </div>
                            <div className="product-quantity">
                            <div className="product-details__quantity">
                            <div className="input-group mb-3" style={{maxWidth: "7.5rem"}}>
                                <button
                                    className="btn bg-white border"
                                    type="button"
                                    onClick=""
                                >
                                    -
                                </button>
                                <input 
                                    type="number"
                                    className="form-control text-center"
                                    value="1"
                                    min="1"
                                    max="10"
                                    readOnly
                                    onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                                />
                                <button
                                    className="btn bg-white border"
                                    type="button"
                                    onClick=""
                                > +
                                </button>
                            </div>
                            </div>
                            </div>
                            <div className="product-subtotal">
                               <strong><del>$10.67</del>  <span style={{color: "var(--color-dark)"}}>$8.47</span></strong>
                            </div>

                            <button title="Remove this item" className="removeFromCart"
                            >
                                <img src="/images/icons/close.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CartProduct