
function Footer() {
    return(
        <footer>
            <div className="footer-body">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="row row-cols-1 row-cols-md-3">
                            <div className="col d-flex">
                                <div className="feature-block">
                                <img src="images/icons/shipping.svg" className="img-fluid" alt=""/>
                                <p>Free Shipping Worldwide</p>
                                </div>
                            </div>
                            <div className="col d-flex">
                                <div className="feature-block">
                                <img src="images/icons/money.svg" className="img-fluid" alt=""/>
                                <p>Money Back Guarantee</p>
                                </div>
                            </div>
                            <div className="col d-flex">
                                <div className="feature-block">
                                <img src="images/icons/return.svg" className="img-fluid" alt=""/>
                                <p>Free Returns Upto 30 Days</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-11">
                            <div className="logo-area">
                                <img src="images/logo.png" className="img-fluid" alt=""/>
                                <p className="my-4">Blending nature with science, we create clean, effective products that celebrate every skin type.</p>
                             </div>
                             <ul className="social-list">
                                <li><a href="" target="_blank">
                                        <img src="images/icons/facebook.svg" alt=""/>
                                    </a></li>
                                <li><a href="" target="_blank">
                                    <img src="images/icons/insta.svg" alt=""/>
                                    </a></li>
                                <li><a href="" target="_blank">
                                    <img src="images/icons/whatsapp.svg" alt=""/>
                                    </a></li>
                                <li><a href="" target="_blank">
                                    <img src="images/icons/youtube.svg" alt=""/>
                                    </a></li>
                             </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 px-xl-5">
                        <div className="row row-cols-1 row-cols-md-3">
                            <div className="col">
                            <div className="footer-widget links-widget">
                                <h3 className="">Quick Links</h3>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Products</a></li>
                                    <li><a href="">Terms</a></li>
                                    <li><a href="">Privacy Policy</a></li>
                                    <li><a href="">Contact Us</a></li>
                                </ul>
                            </div>
                            </div>
                            <div className="col">
                            <div className="footer-widget links-widget">
                                <h3 className="">Shop</h3>
                                <ul>
                                    <li><a href="">Skin Serum</a></li>
                                    <li><a href="">Day Cream</a></li>
                                    <li><a href="">Night Cream</a></li>
                                </ul>
                            </div>
                            </div>
                            <div className="col">
                            <div className="footer-widget contact-widget">
                                <h3 className="">Contact Info</h3>
                                <ul>
                                    <li><a href=""><img src="images/icons/email.svg"/> info@delicatederm.com</a></li>
                                    <li><a href=""><img src="images/icons/phone.svg"/> (1800) 577 9667</a></li>
                                    <li><a href=""><img src="images/icons/location.svg"/> 34 Carmine Street, New York, NY 10014</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="footer-widget subs-widget">
                                <h3>Subscribe To Our Newsletter</h3>
                                <div className="position-relative">
                                <div className="mb-4">
                                    <input type="email" className="form-control" placeholder="Your Email" />
                                    <span>We do not spam. We send offers instead.</span>
                                </div>
                                <button type="submit"><img src="images/icons/paper-plane.svg"/></button>
                                </div>
                                <img src="images/icons/payments.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="footer-bottom">
                <p className="mb-0">© {new Date().getFullYear()}  delicare derm deluxe  |  All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer