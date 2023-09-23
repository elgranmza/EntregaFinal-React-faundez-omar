import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/Cartcontext'; 

const ItemDetail = ({ id, name, pictureUrl, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext); 

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = { id, name, price }; 
        addItem(item, quantity); 
    };
    
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={pictureUrl} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Categoría: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='itemFooter'>
                {quantityAdded > 0 ? (
                    <Link to='/cart' className='Option'>Finalizar Compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )}
            </footer>
        </article>
    );
}

export default ItemDetail;
