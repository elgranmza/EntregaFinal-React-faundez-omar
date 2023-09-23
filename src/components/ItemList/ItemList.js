import React from 'react';
import Item from '../Item/Item';
import '../Item/Item.css';
import { Link } from 'react-router-dom';


const ItemList = ({ products }) => {
    return (
        <div className='ListGroup'>
            {products.map((prod) => (
                <div key={prod.id}>
                    <Item {...prod} />
                    <Link to={`/item/${prod.id}`} className="button-link">
                        Detalles
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ItemList;




