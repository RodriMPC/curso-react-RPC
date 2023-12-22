import boton from './NavBar.module.css' 
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <h1 >Jafer Amoblamientos</h1>
            <section>
                <button className={boton.boton} >Sillones</button>
                <button className={boton.boton}>Sillas</button>
                <button className={boton.boton}>Mesas</button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default NavBar