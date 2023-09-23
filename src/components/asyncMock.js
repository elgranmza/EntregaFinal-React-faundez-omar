import products from "./ProductData/ProductData";

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === productId);
            resolve(product || null); 
        }, 500);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productsInCategory = products.filter(prod => prod.category === categoryId);
            resolve(productsInCategory);
        }, 500);
    });
};



