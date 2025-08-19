import categoriesData from '../data/categories.json'
import { Link } from "react-router-dom";

function CategoryBlock({title, img, items}) {

    return(
                            <div className="col">
                                <Link to="/shop" className="category-circle">
                                    <img src={img} className="img-fluid" alt="" />
                                    <div className="overlay-content">
                                        <div>
                                        <h4>{title}</h4>
                                        <span>{items} Items</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
    )
                            
}

function CategoryBlockRender() {
    return(
        <>
            {categoriesData.map((item) => (
                <CategoryBlock key={item.id} {...item} />
            ))}
        </>
    )
}

export {CategoryBlockRender}

export default CategoryBlock