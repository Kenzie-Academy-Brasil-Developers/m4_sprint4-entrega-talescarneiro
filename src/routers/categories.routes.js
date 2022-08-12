import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller.js";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller.js";
import listCategoryController from "../controllers/categories/listCategory.controller.js";
import retrieveCategoryController from "../controllers/categories/retrieveCategory.controller.js";
import updateCategoryController from "../controllers/categories/updateCategory.controller.js";

const router = Router()

router.post('', createCategoryController)
router.get('', listCategoryController)
router.get('/:id', retrieveCategoryController)
router.patch('/:id', updateCategoryController)
router.delete('/:id', deleteCategoryController)

export default router