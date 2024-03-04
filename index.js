import { add3Products, getAmount, getTotalQty, resetCart } from "./cart/cart.js";

let cart = []; //carrello globale

/**
 * 1) Permettere di inserire nel carrello dei prodotti "Add to cart".
 * 2) Aggiungiamo 3 prodotti differenti nel carrello.
 * 3) Calcolo del totale da pagare. "Get amount"
 * 4) Calcolo del totale quantità prodotti. "Get total qty"
 * 5) FUnzionalità che svuota il carrello "Reset cart"
 */

//aggiungi tre elementi
console.log(add3Products(cart));
//calcolo prezzo totale
console.log(getAmount(cart));
//calcolo numero dei prodotti
console.log(getTotalQty(cart));
//svuota l'array
console.log(resetCart(cart));



