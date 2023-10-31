import './Lemon.scss'
import logo from './icons_assets/Logo.svg';

/*function Logo() {
    return (
        <div>
            <img src={logo} alt="Little Lemon Logo"/>
        </div>)
}*/

function Nav() {
    return (
        <header className="header">
            <nav className="container flex flex-jc-sb flex-ai-c">
                <a href="/" className="header__logo">
                    <img src={logo} alt="Little Lemon Logo"/>
                </a>
                <a href="#" className="header__menu hide-for-desktop">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                <ul className="header__links hide-for-mobile">
                <li><a href="Home.js">Home</a></li>
                    <li><a href="About.js">About</a></li>
                    <li><a href="Menu.js">Menu</a></li>
                    <li><a href="Reservation.js">Reservations</a></li>
                    <li><a href="Order_Online.js">Order Online</a></li>
                    <li><a href="Log_In.js">Log In</a></li>
                </ul>
            </nav>
      </header>
    );
};

export default Nav;

