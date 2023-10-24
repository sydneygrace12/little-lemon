import logo from './icons_assets/Logo.svg';

function Logo() {
    return (
        <div>
            <img src={logo} alt="Little Lemon Logo"/>
        </div>)
}

function Footer() {
    return (
      <footer className="footer">
        <ul>
            <li><a href="Home.js">Home</a></li>
            <li><a href="About.js">About</a></li>
            <li><a href="Menu.js">Menu</a></li>
            <li><a href="Reservation.js">Reservations</a></li>
            <li><a href="Order_Online.js">Order Online</a></li>
            <li><a href="Log_In.js">Log In</a></li>
        </ul>;
        <ul>
            <li><a href="tel:+1234567891">Phone Number</a></li>
            <li><a href="mailto:hello@littlelemon.com">Email</a></li>
            <li>1234 Michigan Avenue, Chicago IL. 60624</li>
        </ul>;
      </footer>
    )
}