const createProduct = require("../Controllers/createProduct");
const createProvider = require("../Controllers/createProvider");
const getProductsAndProviders = require("../Controllers/getProductsAndProviders");
const findAllProductsController = require("../Controllers/ProductsController");
const findAllProviderController = require("../Controllers/ProviderController");

const router = require("express").Router();

router.post('/create-products', createProduct)
router.post('/create-providers', createProvider)
router.get('/find-products', findAllProductsController)
router.get('/find-providers', findAllProviderController)
router.get('/find-products-and-providers', getProductsAndProviders)

module.exports = router;