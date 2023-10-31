import hero from './icons_assets/hero.png'
import './Lemon.scss'


function Main () {
    return(
        <section className="hero">
            <div className="hero__img container">
                <img src={hero} alt="Little Lemon's Famous Bruschetta"/>
            </div>
            <div className="hero__text container">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Servicing our community for over 50 years, we are proud to be voted the number one restaurant in Chicgago in 2023. 
                    Come dine with us at one of our lovely locations, or place an order to go!</p>
                <a href="#" className="button hero__cta"> Reserve Table</a>
            </div>
        </section>
    )
}

export default Main;