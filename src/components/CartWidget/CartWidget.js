import React, { useContext } from 'react';
import cart from './assets/carrito.svg';
import { CartContext } from '../context/Cartcontext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <div className="cart-widget">
                <img  className='CartImg' src={cart} alt="cart-widget" />
                <span>{totalQuantity}</span>
            </div>
        </Link>
    );
};

export default CartWidget;
