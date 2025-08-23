import Button from "./Button";

function ProductCard({ name, image, mrpPrice, price, rating, tag }) {
  return (
    <div className="col">
      <div className="product-block">
        <div className="inner-box">
          <div className="image-box position-relative">
            
            <div className="d-flex justify-content-between align-items-center"> 
                            <span className="sale-badge">{tag}</span>
                              <a href="#">
                                <img src="images/icons/wishlist-02.svg" alt=""/>
                              </a>
                          </div>
            <div className="overlay-btns">
                    <Button to="/shop" variant="solid">
                        Add To Cart
                    </Button>
                    <Button to="/product-details" variant="outline">
                        View Product
                    </Button>
            </div>

            <img src={image} className="img-fluid" alt={name} />
          </div>

          <div className="content-box text-center">
            <h3>{name}</h3>
            <div>
              <img src="images/icons/rating-stars.svg" alt="rating" />{" "}
              <span>({rating})</span>
            </div>
            <p className="mb-0">
              {mrpPrice && <del>${mrpPrice.toFixed(2)}</del>} ${price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
