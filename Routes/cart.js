import express from 'express'
import { addToCart, clearCart, decreseProductQty, removeProductFromCart, userCart } from '../Controllers/cart.js';

const router = express.Router();

//add to cart
router.post('/add', addToCart);

//get user cart
router.get('/user', userCart)

//remove product form cart
router.delete('/remove/:productId', removeProductFromCart)

//clearing cart
router.delete('/clear', clearCart)

//decresing qty from cart
router.post('/--qty',decreseProductQty)

export default router;