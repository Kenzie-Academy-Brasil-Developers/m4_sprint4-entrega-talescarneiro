import { Router } from "express";

import createProductController from "../controllers/products/createProduct.controller.js"
import listProductController from "../controllers/products/listProduct.controller.js"
import retrieveProductController from "../controllers/products/retrieveProduct.controller.js"
import updateProductController from "../controllers/products/updateProduct.controller.js";

const router = Router()

router.post('', createProductController)
router.get('', listProductController)
router.get('/:id', retrieveProductController)
router.patch('/:id', updateProductController)

export default router