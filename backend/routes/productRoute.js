const express = require('express')
const router = express.Router()


const {upload,createProduct, getProducts, getProductId, updateProduct, deleteProduct} = require('../controllers/productController')


router.post('/product',upload.single('image'),createProduct)
router.get('/product',getProducts)
router.get('/product/:id',getProductId)
router.put('/product/:id',upload.single('image'),updateProduct)
router.delete('/product/:id',deleteProduct)


module.exports = router;






// mongosh
// db.products.find()
// db.products.find().limit(2)
// db.products.find().sort({ createdAt: -1 })
// db.products.find({ category: "Womens" })