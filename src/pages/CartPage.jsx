import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import BreadcrumbBanner from "../components/BreadcrumbBanner"
import Button from "../components/Button"
import CartProduct from "../components/CartProduct"

function CartPage() {

    const { cart } = useContext(CartContext);

    return(
        <>
            <BreadcrumbBanner 
            title="Take a look at your cart" 
            />
            <section className="sectionGap">
                <div className="container">
                    {cart.length === 0 ? 
                        (<h3 className="text-center">Cart is empty</h3>) : 
                        (
                        <div className="row">
                                <div className="col-xl-7">
                                    <CartProduct />
                                </div>
                                <div className="col-xl-4 offset-lg-1">
                                <div className="cart-summary-area">
                                    <h2 className="mb-4">Cart Summery</h2>
                                    <ul>
                                        <li className="d-flex justify-content-between flex-wrap mb-2">
                                            <div>
                                                Cart Subtotal
                                            </div>
                                            <div>
                                            <strong>
                                                $<span id="cart-sub-total">
                                                { cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                                                </span>
                                            </strong>
                                            </div>
                                        </li>
                                        <li className="d-flex justify-content-between flex-wrap mb-2">
                                            <div>
                                                Shipping and Handling
                                            </div>
                                            <div>
                                            <strong>FREE</strong>
                                            </div>
                                        </li>
                                        <li 
                                        style={{fontSize: "1.43rem"}}
                                        className="d-flex justify-content-between flex-wrap pb-4 mt-2 pt-2 border-top">
                                            <div>
                                                <strong>Order Total</strong>
                                            </div>
                                            <div>
                                            <strong>
                                                $<span id="cart-total2">
                                                { cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                                                </span>
                                            </strong>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="text-center pb-3 w-100">
                                        <span className="pe-2">100% Secure</span>
                                        <img alt="" className="img-fluid" src="images/icons/payments.svg" width="180"/>

                                    </div>
                                    <div className="btns-area mb-4">
                                        <Button to="/checkout" variant="solid" className="w-100 mb-2 shadow">
                                            proceed to checkout
                                        </Button>
                                        <Button to="/shop" variant="outline" className="w-100">
                                            continue Shopping
                                        </Button>
                                    </div>
                                    <div className='row row-cols-1 row-cols-md-2 pt-2'>
                                        <div className='col'>
                                            <div className='mb-3 mb-md-0 feature-box d-flex flex-column align-items-center text-center'>
                                                <div className='icon bg-white mb-2 rounded-3 me-0'>
                                                    <img className="img-fluid" alt="" src="/images/icons/shipping.svg"/>
                                                </div>
                                                <p>Free Shipping Worldwide</p>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='mb-3 mb-md-0 feature-box d-flex flex-column align-items-center text-center'>
                                                <div className='icon bg-white mb-2 rounded-3 me-0'>
                                                    <img className="img-fluid" alt="" src="/images/icons/return.svg"/>
                                                </div>
                                                <p>Free Returns Upto 30 Days</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                </div>
                        </div>
                        )}
                </div>
            </section>
        </>
    )
}

export default CartPage