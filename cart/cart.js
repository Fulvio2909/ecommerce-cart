/**
 * 1) Permettere di inserire nel carrello dei prodotti "Add to cart".
 * Dichiarazione della funzione
 * input: prodotto
 */
const addToCart = (aCart, prod) => {
    aCart.push(prod);
    return aCart;
}

/**
 * 2) Aggiungiamo 3 prodotti differenti nel carrello
 * input: il carrello
 * output: carrello con i nuovi 3 prodotti
 */
export const add3Products = (aCart) => {
    let newCart = addToCart(aCart, {
        name: 'Iphone',
        price: 1500,
        qty: 2,
    });

    newCart = addToCart(aCart, {
        name: 'Galaxy S24',
        price: 1500,
        qty: 1,
    });

    newCart = addToCart(aCart, {
        name: 'Pixel 8',
        price: 1500,
        qty: 1,
    });

    return newCart;
};

/**
 * 3) Calcolo del totale da pagare. "Get amount"
 * input: il carrello
 * output: totale da pagare
 */
export const getTotalAmount = (aCart) => {
    return aCart.reduce((total, product) => total + product.price * product.qty, 0);
};

/**
 * 4) Calcolo del totale quantità prodotti. "Get total qty"
 * input: il carrello
 * output: totale quantità prodotti
 */
export const getTotalQuantity = (aCart) => {
    return aCart.reduce((totalQty, product) => totalQty + product.qty, 0);
};

/**
 * 5) Funzionalità che svuota il carrello "Reset cart"
 * input: il carrello
 * output: carrello vuoto
 */
export const resetCart = () => {
    return [];
};

