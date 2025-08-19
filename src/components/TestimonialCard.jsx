

function TestimonialCard({title, description, author, location}) {
    return(
            <div className="testimonial-block text-center">
                                    <div className="text-center">
                                    <img src="images/icons/Google_G_ico.svg" className="" alt=""/>
                                    <br/>
                                    <img src="images/icons/rating-stars.svg" className="" alt=""/>
                                    </div>
                                    <p className="title">{title}</p>
                                    <p className="testim-cont">"{description}"</p>
                                    <div className="auth-area">
                                        <h5>{author}</h5>
                                        <span>{location}</span>
                                    </div>
            </div>
    )
}

export default TestimonialCard