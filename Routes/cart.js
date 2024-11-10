import express from 'express'
import { addToCart, clearCart, decreseProductQty, removeProductFromCart, userCart } from '../Controllers/cart.js';

import { Authenticated } from '../Middlewares/auth.js';

const router = express.Router();

//add to cart
router.post('/add', Authenticated, addToCart);

//get user cart
router.get('/user', Authenticated, userCart)

//remove product form cart
router.delete('/remove/:productId', Authenticated, removeProductFromCart)

//clearing cart
router.delete('/clear', Authenticated, clearCart)

//decresing qty from cart
router.post('/--qty', Authenticated, decreseProductQty)

export default router;