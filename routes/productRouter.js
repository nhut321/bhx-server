const router = require('express').Router()
const ProductController = require('../controllers/ProductController')

router.use('/filter-product/:id', ProductController.filterProduct)
router.get('/get-product/:id', ProductController.getOneProduct)
router.use('/get-products', ProductController.getProducts)
router.post('/create-product', ProductController.createProduct)

module.exports = router

