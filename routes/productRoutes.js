const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const cartController = require('../controllers/cartController');

router.get('/', productController.getShop);
router.get('/:id', productController.getProductDetail);

router.post('/add', cartController.addToCart);

module.exports = router;

