import { Router } from "express";
import createCategoryController from "../controllers/createCategory.controller.js";
import deleteCategoryController from "../controllers/deleteCategory.controller.js";
import listCategoryController from "../controllers/listCategory.controller.js";
import retrieveCategoryController from "../controllers/retrieveCategory.controller.js";
import updateCategoryController from "../controllers/updateCategory.controller.js";

const router = Router()

router.post('', createCategoryController)
router.get('', listCategoryController)
router.get('/:id', retrieveCategoryController)
router.patch('/:id', updateCategoryController)
router.delete('/:id', deleteCategoryController)

export default router