import React, { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom";

import { db } from "../../service/firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore"; 

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'products', itemId);

        getDoc(docRef)
        .then (response => {
            if (response.exists()) {
                const data = response.data();
                const productAdapted = {id: response.id, ...data};
                setProduct(productAdapted);
            } else {
                console.log("No existe el producto con el ID especificado.");
            }
        })
        .catch(error => {
            console.log("Error al obtener el producto:", error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [itemId]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (!product) {
        return <p>Producto no encontrado.</p>;
    }

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    );
}

export default ItemDetailContainer;
