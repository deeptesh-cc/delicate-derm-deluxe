import { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import productsData from "../data/products.json";
import { CartContext } from "../context/CartContext";
import Button from '../components/Button'

function ProductDescription({product}) {

    const { id } = useParams(); 

    const { cart, addToCart, incrementQty, decrementQty } = useContext(CartContext);

    // Find product from JSON
    const productId = productsData.find(
        (item) => item.id === Number(id)
    );

    // Find product in cart
    const cartItem = cart.find(
        (item) => item.id === productId.id
    );

    // Quantity to display
    const quantity = cartItem ? cartItem.quantity : 1;

    if (!product) return <p>Product not found</p>;

    return(
        <div className="productDescArea">
            <p className="title">{product.name}</p>
            <div>
                <img alt="rating" src="/images/icons/rating-stars.svg" style={{width: "7rem"}}/> 
                <span style={{fontSize: "1rem"}}> ({product.rating})</span>
            </div>
            <p className="price"><del>${product.mrpPrice.toFixed(2)}</del> <span style={{color: "var(--color-dark)"}}>${product.price.toFixed(2)}</span></p>
            <p>{product.description}</p>
            <p className="stockAvl" style={{color: "var(--color-dark)"}}>Availability: 
            <span style={{color: "var(--color-secondary)"}}>In stock</span></p>
            <div className="d-flex gap-3">
                <div className="input-group" style={{maxWidth: "7.5rem"}}>
                    <button
                        className="btn bg-white border"
                        type="button"
                        onClick={() => decrementQty(productId.id)}
                    >
                        -
                    </button>
                    <input 
                        type="number"
                        className="form-control text-center"
                        value={quantity}
                        min="1"
                        max="10"
                        readOnly
                        onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                    />
                    <button
                        className="btn bg-white border"
                        type="button"
                        onClick={() => incrementQty(productId.id)}
                     > +
                    </button>
                </div>
                {
                    cartItem ? ( <Button to="/cart" variant="solid">
                        View In Cart
                    </Button> ) : (<Button onClick={() => addToCart(product)} variant="solid">
                    Add To Cart
                    </Button>)
                }
                    
            </div>
            <p className='estimDlv' style={{color: "var(--color-dark)"}}>ESTIMATED DELIVERy 5-7 DAYS</p>
            <div className='row row-cols-1 row-cols-md-2' style={{maxWidth: "32rem"}}>
                <div className='col'>
                    <div className='mb-3 feature-box d-flex align-items-center'>
                        <div className='icon bg-white'>
                            <img className="img-fluid" alt="" src="/images/icons/shipping.svg"/>
                        </div>
                        <p>Free Shipping Worldwide</p>
                    </div>
                </div>
                <div className='col'>
                    <div className='mb-3 feature-box d-flex align-items-center'>
                        <div className='icon bg-white'>
                            <img className="img-fluid" alt="" src="/images/icons/return.svg"/>
                        </div>
                        <p>Free Returns Upto 30 Days</p>
                    </div>
                </div>
                <div className='col'>
                    <div className='mb-3 feature-box d-flex align-items-center'>
                        <div className='icon bg-white'>
                            <img className="img-fluid" alt="" src="/images/icons/money.svg"/>
                        </div>
                        <p>Money Back Guarantee</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProductDescription