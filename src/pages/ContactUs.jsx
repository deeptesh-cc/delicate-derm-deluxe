import BreadcrumbBanner from "../components/BreadcrumbBanner"
import Button from "../components/Button"
import SectionTitle from "../components/SectionTitle"

function ContactUs() {
    return(
        <>
            <BreadcrumbBanner
            title="Still any query? Contact Us"
            />
            <section className="sectionGap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <SectionTitle
                            title="We'd love to hear from you"
                            alignment="left"
                            extraclasses="mb-3"
                             />
                             <p className="mb-5">Have a question about your order, our products workout routine? Our team is here to help</p>
                            <form>
                                            <div className="mb-3">
                                                <label htmlFor="" className="required">Your Name</label>
                                                <input type="text" className="form-control" name="Name" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="" className="required">Email ID</label>
                                                <input type="email" className="form-control" name="" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlTextarea1" className="required">
                                                Your Message</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                            <Button type="submit" variant="solid" className="mt-3">send message</Button>
                            </form>
                        </div>
                        <div className="col-xl-6 offset-xl-1">
                            <div className="footer-widget contact-widget">
                                <h4 className="mb-4">Contact Info:</h4>
                                <ul>
                                    <li><a className="text-body" href=""><img src="/images/icons/email.svg"/> info@delicatederm.com</a></li>
                                    <li><a className="text-body" href=""><img src="/images/icons/phone.svg"/> (1800) 577 9667</a></li>
                                    <li><a className="text-body" href=""><img src="/images/icons/location.svg"/> 34 Carmine Street, New York, NY 10014</a></li>
                                </ul>
                            </div>
                            <div className="my-5">
                                <h4 className="mb-3">Business Hours:</h4>
                                <p>Monday-Friday, 9am-6pm (EST) <br/> Expect a reply within 24-48 hours.</p>
                            </div>
                            <div className="map-area overflow-hidden rounded-3">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10169.520971192653!2d-74.00274634710959!3d40.7308561309651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259925ba85483%3A0x4d043b2ff1d72788!2s34%20Carmine%20St%2C%20New%20York%2C%20NY%2010014%2C%20USA!5e0!3m2!1sen!2sin!4v1753095492807!5m2!1sen!2sin" width="100%" height="100%" style={{border: "0", height: "15rem"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs