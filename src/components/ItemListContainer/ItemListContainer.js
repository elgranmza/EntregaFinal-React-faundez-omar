import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../service/firebase/firebaseConfig';
import { getDocs, collection, where, query } from 'firebase/firestore'; 

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
    
            try {
                console.log('categoryId:', categoryId); 
                const collectionRef = categoryId
                    ? query(collection(db, 'products'), where('category', '==', categoryId))
                    : collection(db, 'products');
                const response = await getDocs(collectionRef);
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                console.log('products:', productsAdapted); 
                setProducts(productsAdapted);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchProducts();
    }, [categoryId]);
    

    return (
        <div>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;
