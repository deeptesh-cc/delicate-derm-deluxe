import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import BreadcrumbBanner from "../components/BreadcrumbBanner"
import Button from "../components/Button"

function Wishlist() {

    const { wishlist, removeFromWishlist, moveToCart } = useContext(CartContext);

    return(
        <>
            <BreadcrumbBanner 
            title="Take a look at your wishlist" 
            />
            <section className="sectionGap">
                <div className="container">
                {wishlist.length === 0 && <h3 className="text-center">Wishlist is empty</h3>}

                    <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4">
                        {wishlist.map((item) => (
                            <div className="col">
                            <div className="product-block">
                            <div className="inner-box">
                                <div className="image-box position-relative">
                                    <div className="d-flex justify-content-between align-items-center"><span className="sale-badge">{item.tag}</span>
                                        <button
                                            onClick={() => removeFromWishlist(item.id)}
                                            style={{ background: "none", border: "none" }}
                                        >
                                            <img alt="" src="/images/icons/remove-wishlist.svg"/>
                                        </button>
                                    </div>
                                    
                                    <img className="img-fluid" alt={item.name} src={item.image[0]}/>
                                </div>
                                <div className="content-box text-center">
                                    <h3>{item.name}</h3>
                                    <div><img alt="rating" src="/images/icons/rating-stars.svg"/> 
                                    <span> ({item.rating})</span>
                                    </div>
                                    <p className="mb-0">
                                    {item.mrpPrice && <del>${item.mrpPrice.toFixed(2)}</del>} ${item.price.toFixed(2)}
                                    </p>
                                    <div className="px-3 px-lg-4 pt-3">
                                    <Button className="w-100" variant="outline" onClick={() => moveToCart(item)}>
                                        Move To Cart
                                    </Button>
                                    </div>
                                </div>
                                
                            </div>
                            </div>
                        </div>
                        ))}
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wishlist