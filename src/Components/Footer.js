import { ShoppingBag } from "react-feather"
import '../Styles/footer.css'

const Footer =() => {
    return (
        <div className="footer">
            <div className="first-footer">
                <div>
                   <span><ShoppingBag /></span>
                   <h3>Mart</h3>
                </div>
                <div>
                <span> Lorem ipsum dolor sit amet,</span><br></br>
                <span> consectetur adipiscing elit,</span><br></br>
                <span> Auctor libero id et, in </span><br></br>
                <span>gravida. Sit diam duis</span><br></br>
                <span> mauris nulla cursus. Erat et</span><br></br>
                <span> lectus vel ut sollicitudin elit</span><br></br>
                <span>at amet</span><br></br>
                </div>
            </div>
            <div className="second-footer">
                <div>
                    <h3>About Us</h3>
                </div>
                <div>
                    <p>Career</p>
                    <p>Our Stores</p>
                    <p>Our Cares</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>

                </div>
            </div>
            <div className="third-footer">
                <div>
                    <h3>Customer Care</h3>
                </div>
                <div>
                    <p>Help Centre</p>
                    <p>How to Buy</p>
                    <p>Track your Order</p>
                    <p>Corporate & Bulk Purchase</p>
                    <p>Return & Refund</p>
                </div>
            </div>
            <div className="last-footer">
                <div>
                    <h3>Contact Us</h3>
                </div>
                <div>
                    <span>70 Washington Square</span><br></br>
                    <span>South, NewYork, NY 10012</span><br></br>
                    <span> United States</span><br></br>
                    <p>Email:example@gmail.com</p>
                    <p>Phone:+117996838005</p>

                </div>
            </div>
        </div>
    )
}
export default Footer