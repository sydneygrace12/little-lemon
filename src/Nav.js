import logo from './icons_assets/Logo.svg';

function Logo() {
    return (
        <div>
            <img src={logo} alt="Little Lemon Logo"/>
        </div>)
}

function Nav() {
    return (
      <nav className="main-nav">
        <ul>
            <li><a href="Home.js">Home</a></li>
            <li><a href="About.js">About</a></li>
            <li><a href="Menu.js">Menu</a></li>
            <li><a href="Reservation.js">Reservations</a></li>
            <li><a href="Order_Online.js">Order Online</a></li>
            <li><a href="Log_In.js">Log In</a></li>
        </ul>
      </nav>
    )
}
