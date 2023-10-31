import './Lemon.scss'
import small_logo from './icons_assets/Logo .svg';

function Footer(){
    <footer className="footer">
        <a href="#" className="footer__logo">
        <img src={small_logo} alt="Little Lemon" />
        </a>
        <div className="footer__social">
            <a href="#" alt="Instagam">
                <img/>
            </a>
            <a href="#" alt="Facebook">
                <img/>
            </a>
            <a href="#" alt="Twitter">
                <img/>
            </a>
        </div>
        <div className="footer__links col1">
                <a href="Home.js">Home</a>
                <a href="About.js">About</a>
                <a href="Menu.js">Menu</a>
                <a href="Reservation.js">Reservations</a>
                <a href="Order_Online.js">Order Online</a>
                <a href="Log_In.js">Log In</a>
        </div>
        <div classname="footer__links col2">
                <a href="tel:+1234567891">Phone Number</a>
                <a href="mailto:hello@littlelemon.com">Email</a>
                1234 Michigan Avenue, Chicago IL. 60624
        </div>
        <div className="footer__cta">
            <a href="#" className="button">Reserve Table</a>
            <div className="footer__copyright">
                &copy: Little Lemon All Rights Reserved
            </div>
        </div>
    </footer>
}
export default Footer;
