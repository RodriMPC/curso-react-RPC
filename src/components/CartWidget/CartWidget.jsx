import cart from './img/cart.png'


const CartWidget = () => {
    return (
        <div className='carrito'>
            <img src={cart} alt="Carrito de compras"/>
            0
        </div>
    )
}

export default CartWidget