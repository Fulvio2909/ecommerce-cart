import { add3Products, getTotalAmount, getTotalQuantity, resetCart  } from './cart/cart.js'

let cart = []; //carrello globale

/**
 * 1) Permettere di inserire nel carrello dei prodotti "Add to cart".
 * 2) Aggiungiamo 3 prodotti differenti nel carrello.
 * 3) Calcolo del totale da pagare. "Get amount"
 * 4) Calcolo del totale quantità prodotti. "Get total qty"
 * 5) FUnzionalità che svuota il carrello "Reset cart"
 */

// 1) Permettere di inserire nel carrello dei prodotti "Add to cart".
cart = add3Products(cart);

// 2) Aggiungiamo 3 prodotti differenti nel carrello.
console.log( add3Products (cart));

// 3) Calcolo del totale da pagare. "Get amount"
console.log('Totale da pagare:', getTotalAmount(cart));

// 4) Calcolo del totale quantità prodotti nel carrello. "Get total qty"
console.log('Totale quantità prodotti nel carrello:', getTotalQuantity(cart));

// 5) Funzionalità che svuota il carrello "Reset cart"
cart = resetCart();
console.log('Nuovo stato del carrello:', cart);



