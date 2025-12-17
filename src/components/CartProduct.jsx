import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartProduct() {

    const { cart, removeFromCart, incrementQty, decrementQty } = useContext(CartContext);

    return(
        <>
            {cart.length === 0 && <h3 className="text-center">Cart is empty</h3>}

            {cart.map((item) => (
                <div className="cart_item">
                <div className="row align-items-center">
                    <div className="col-sm-4">
                        <div className="image-area text-center py-3">
                            <Link to={`/product-details/${item.id}`}>
                                <img
                                src={item.image[0]}
                                className="img-fluid"
                                alt={item.name}
                                style={{maxHeight: "10.65rem", objectFit: "contain"}}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="cont-area py-3">
                            <p className="product-name">{item.name}</p>
                            <p style={{marginBottom:"0", fontSize:"0.9rem"}}><strong>Brand: </strong>
                            <span>Delicate Derm Deluxe</span>
                            </p>
                            <div className="rating mt-1 mb-2">
                                    <img src="/images/icons/rating-stars.svg" width="87" className="d-inline-block" />
                                            <span className="ps-1" style={{fontSize: "0.9rem"}}>({item.rating})
                                        </span>
                            </div>
                            <div className="product-quantity">
                            <div className="product-details__quantity">
                            <div className="input-group mb-3" style={{maxWidth: "7.5rem"}}>
                                <button
                                    className="btn bg-white border"
                                    type="button"
                                    onClick={() => decrementQty(item.id)}
                                >
                                    -
                                </button>
                                <input 
                                    type="number"
                                    className="form-control text-center"
                                    value={item.quantity}
                                    min="1"
                                    max="10"
                                    readOnly
                                    onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                                />
                                <button
                                    className="btn bg-white border"
                                    type="button"
                                    onClick={() => incrementQty(item.id)}
                                > +
                                </button>
                            </div>
                            </div>
                            </div>
                            <div className="product-subtotal">
                            <strong><del>${item.mrpPrice.toFixed(2)} </del>
                                <span style={{color: "var(--color-dark)"}}> ${item.price.toFixed(2)}</span>
                            </strong>
                            </div>

                            <button title="Remove Product" className="removeFromCart"
                            onClick={() => removeFromCart(item.id)}
                            >
                                <img src="/images/icons/close.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            ))}
                
        </>
    )
}


export default CartProduct