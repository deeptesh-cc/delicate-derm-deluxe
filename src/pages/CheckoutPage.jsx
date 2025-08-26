import { Link } from "react-router-dom"
import BreadcrumbBanner from "../components/BreadcrumbBanner"
import Button from "../components/Button"

function CheckoutPage() {
    return(
        <>
            <BreadcrumbBanner
            title="It’s time to checkout"
            /> 
            <section className="sectionGap">
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-xl-7">
                                <fieldset className="checkout-widget mb-5">
                                    <p className="title mb-4">Billing Details</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="" className="required">First Name</label>
                                                <input type="text" className="form-control" name="firstName" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="" className="required">Last Name</label>
                                                <input type="text" className="form-control" name="lastName" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label htmlFor="" className="required">Full Address</label>
                                                <input type="text" className="form-control" name="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="" className="required">Email ID</label>
                                                <input type="email" className="form-control" name="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="" className="required">Phone Number</label>
                                                <input type="tel" className="form-control" name="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="" className="required">Country</label>
                                                <input type="text" className="form-control" name="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="" className="required">State</label>
                                                <input type="text" className="form-control" name="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="" className="required">City</label>
                                                <input type="text" className="form-control" name="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="" className="required">Zip/Postal Code</label>
                                                <input type="number" className="form-control" name="" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label htmlFor="" className="">Any instructions for delivery...</label>
                                                <input type="text" className="form-control" name="" />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="checkout-widget">
                                    <p className="title mb-4">Payment Information</p>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label htmlFor="" className="required">Select Payment Method</label>
                                                <select name="paymentMethod" className="form-select" id="">
                                                <option value="">Select Payment Method</option>
                                                <option value="visa">Visa</option>
                                                <option value="mastercard">Mastercard</option>
                                                <option value="discover">Discover</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label htmlFor="" className="required">Card Number</label>
                                                <input type="tel" className="form-control" maxlength="16" name="" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                            <label className="required">Expiry Month</label>
                                            <select name="expiryMonth" className="form-select" id="">
                                                <option value="">Expiry Month</option>
                                                <option value="january">January</option>
                                                <option value="february">February</option>
                                                <option value="march">March</option>
                                                <option value="april">April</option>
                                                <option value="may">May</option>
                                                <option value="june">June</option>
                                                <option value="july">July</option>
                                                <option value="august">August</option>
                                                <option value="september">September</option>
                                                <option value="october">October</option>
                                                <option value="november">November</option>
                                                <option value="december">December</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                            <label className="required">Expiry Year</label>
                                            <select name="expiryYear" className="form-select" id="">
                                                <option value="">Expiry Year</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                                <option value="2027">2027</option>
                                                <option value="2028">2028</option>
                                                <option value="2029">2029</option>
                                                <option value="2030">2030</option>
                                                <option value="2031">2031</option>
                                                <option value="2032">2032</option>
                                                <option value="2033">2033</option>
                                                <option value="2034">2034</option>
                                                <option value="2035">2035</option>
                                                <option value="2036">2036</option>
                                                <option value="2037">2037</option>
                                                <option value="2038">2038</option>
                                                <option value="2039">2039</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label className="required">CVV</label>
                                                <input id="" type="tel" maxlength="3" className="form-control" name="cvv" placeholder="CVV" />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <div className="col-xl-4 offset-xl-1">
                                <div className="checkout-summary checkout-widget">
                                    <p className="title mb-4">Your Order</p>
                                    <div id="checkout-items">
                                        <div className="d-flex align-items-center mb-2 justify-content-between">
                                            <div className="d-flex align-items-center">
                                            <div className="product-thumbnail">
                                                <img alt="product" src="/images/products/product2.png" className="img-fluid"/>
                                            </div>
                                            <div className="product-name">Skin Serum <br/> <small className="py-1 px-2 border rounded-3">Quantity: 1</small></div>
                                            </div>
                                            <div><strong><span className="amount">$15.00</span></strong></div>
                                            
                                        </div>
                                    </div>
                                    <div id="check-cart-foot">
                                        <ul>
                                            <ul>
                                                <li className="d-flex justify-content-between mb-2">
                                                    Cart Subtotal
                                                    <strong>$<span id="cart-sub-total">15.00</span></strong>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    Shipping and Handling
                                                    <strong><span>FREE</span></strong>
                                                </li>
                                            </ul>
                                            <li className="d-flex justify-content-between">
                                                <strong>Order Total</strong>
                                                <strong>$<span id="cart-total2">15</span>.00</strong>
                                            </li>
                                        </ul>
                                        <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value="" name="termsCheckbox" id="termsCheckbox"/>
                                        <label className="form-check-label" for="termsCheckbox">
                                            I have agree to the website <Link to="/terms" className="text-decoration-underline" target="_blank">terms and conditions.</Link>
                                        </label>
                                        
                                        </div>
                                    <Button type="submit" variant="solid" className="w-100">complete checkout</Button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default CheckoutPage