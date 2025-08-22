import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


function BreadcrumbBanner({title}) {

    const location = useLocation();

  const pathName = location.pathname;

  const firstSegment = pathName.split("/")[1];

  const pageClass = firstSegment === "" ? "home" : firstSegment;

    return(
        <section className="breadcrumb-banner">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{`${pageClass}`}</li>
                            </ol>
                        </nav>
                        <h2 className="text-white">{title}</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BreadcrumbBanner