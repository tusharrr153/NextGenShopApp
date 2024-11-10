import express from 'express'
import { addProduct, deleteProductsById, getProducts, getProductsById, updateProductsById } from '../Controllers/product.js';

const router = express.Router();

// add product
router.post('/add', addProduct)

//get products
router.get('/all', getProducts)

//get product by id
router.get('/:id', getProductsById)

//update product by id
router.put('/:id', updateProductsById)
export default router

//delete product by id
router.delete('/:id', deleteProductsById)