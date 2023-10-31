import salad from './icons_assets/greek salad.jpg'
import lemon from './icons_assets/lemon dessert.jpg'
import bread from './icons_assets/restauranfood.jpg'
import './Lemon.scss'

function Cards() {
    return (
        <section className="feature container">
            <h2>Specials</h2>
            <div className="feature__grid">
                <div className="feature__item">
                    <div className="feature__img"> <img src={salad} alt="Greek Salad" style={{width: '100%', padding: '0', margin: '0',borderradius: '1rem 1rem 0 0'}}/></div>
                    <div className="feature__title">
                        Greek Salad
                        $11.99
                    </div>
                    <div className="feature__description">
                    <p>text</p>
                    <a href="#">Order</a>
                    </div>
                </div>
                <div className="feature__item">
                    <div className="feature__img"> <img src={bread} alt="Bruschetta" style={{width: '100%', padding: '0', margin: '0',borderradius: '1rem 1rem 0 0'}}/></div>
                    <div className="feature__title">
                        Bruschetta
                        $8.99
                    </div>
                    <div className="feature__description">
                    <p>text</p>
                    <a href="#">Order</a>
                    </div>
                </div>
                <div className="feature__item">
                    <div className="feature__img"> <img src={lemon} alt="Lemon Cake" style={{width: '100%', padding: '0', margin: '0',borderradius: '1rem 1rem 0 0'}}/></div>
                    <div className="feature__title">
                        Lemon Cake
                        $6.99
                    </div>
                    <div className="feature__description">
                    <p>text</p>
                    <a href="#">Order</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards;
