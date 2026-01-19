import SectionTitle from "../components/SectionTitle"
import Button from "../components/Button"

function ThankYou() {

    const orderSummary = JSON.parse(
        localStorage.getItem("orderSummary")
    );

    const customerDetails = JSON.parse(
        localStorage.getItem("checkoutDetails")
    );

    const today = new Date();
      const day = today.getDate();
      const month = today.toLocaleString('default', { month: 'long' });
      const year = today.getFullYear();

    return(
        <section className="sectionGap">
            <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="text-center">
                    <img src="/images/icons/order-placed.svg" alt="" class="mb-4"/>
                    <SectionTitle
                    title="Thank You For Your Order"
                    extraclasses="mb-4"
                    />
                    <p className="mb-4"><strong>Hi {customerDetails.firstName},</strong> we have accepted your order, and we're getting it ready. <br/> A confirmation mail has been sent to Your Mail ID.</p>
                </div>
                {orderSummary && (
                    <div className="order-bill-area">
                    <ul>
                        <li className="">
                            Order ID:
                            <span>#2837484892</span>
                        </li>
                        <li className="">
                            Order Date:
                            <span>{month} {day}, {year}</span>
                        </li>
                        <li className="">
                            Items:
                            <span id="billedItems">{orderSummary.totalItems}</span>
                        </li>
                        <li className="">
                            Order Total:
                            <span id="billedTotal">${orderSummary.totalAmount.toFixed(2)}</span>
                        </li>
                    </ul>
                    </div>
                )}
                
                <p class="text-center mb-4">
                    <img src="/images/icons/shipping.svg" class="me-1" width="40" /> Estimated delivery between 3-5 business days
                 </p>
                 <div className="text-center">
                 <Button to="/" variant="solid">Back To Home</Button>
                 </div>
            </div>
            </div>
            </div>
        </section>
    )
}

export default ThankYou