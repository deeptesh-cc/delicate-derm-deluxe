import { Link } from "react-router-dom";

function Header() {

    return (
      <>
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <a className="navbar-brand" href="/">
                <img src="images/logo.png" className="img-fluid"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
                </li>
                <li className="nav-item"><a className="nav-link" href="">Terms</a> </li>
                <li className="nav-item"><a className="nav-link" href="">Privacy</a> </li>
                <li className="nav-item"><a className="nav-link" href="#">Contact us</a> </li>
            </ul>
            </div>
            <div className="d-flex header-icons-area">
                <ul>
                <li><a href="">
                    <img src="images/icons/user.svg" alt=""/>
                </a></li>
                <li><a href="">
                    <img src="images/icons/cart.svg" alt=""/>
                    <span className="count">2</span>
                </a></li>
                <li><a href="">
                    <img src="images/icons/wishlist.svg" alt=""/>
                    <span className="count">2</span>
                </a></li>
                </ul>
            </div>
        </div>
        </nav>
        </header>
      </>
    );
}
  
export default Header