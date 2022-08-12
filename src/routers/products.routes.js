import { Router } from "express";

import createProductController from "../controllers/products/createProduct.controller.js"

const router = Router()

router.post('', createProductController)

export default router