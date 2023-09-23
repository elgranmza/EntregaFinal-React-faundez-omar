import React, { createContext, useState } from "react";


export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    console.log(cart);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            console.error('El producto ya se agregó al carrito');
        }
    };

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdate);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };
    const total = () => {
        return cart.reduce((acc, item) => {
            return acc + (item.price * item.quantity);
        }, 0);
    };
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );
};
export default CartContext 