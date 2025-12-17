import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Button from "./Button";

function ProductCard({ product }) {

  const { cart, addToCart } = useContext(CartContext);

  const isInCart = cart.some(item => item.id === product.id);

  return (
    <div className="col">
      <div className="product-block">
        <div className="inner-box">
          <div className="image-box position-relative">
            
            <div className="d-flex justify-content-between align-items-center"> 
                            <span className="sale-badge">{product.tag}</span>
                              <a href="#">
                                <img src="/images/icons/wishlist-02.svg" alt=""/>
                              </a>
                          </div>
            <div className="overlay-btns">
                {
                    isInCart ? ( <Button to="/cart" variant="solid">
                        View In Cart
                    </Button> ) : (<Button variant="solid" onClick={() => addToCart(product)}>
                        Add To Cart
                    </Button>)
                }
                   
                    <Button to={`/product-details/${product.id}`} variant="outline">
                        View Product
                    </Button>
            </div>

            <img src={product.image[0]} className="img-fluid" alt={product.name} />
          </div>

          <div className="content-box text-center">
            <h3>{product.name}</h3>
            <div>
              <img src="/images/icons/rating-stars.svg" alt="rating" />{" "}
              <span>({product.rating})</span>
            </div>
            <p className="mb-0">
              {product.mrpPrice && <del>${product.mrpPrice.toFixed(2)}</del>} ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
