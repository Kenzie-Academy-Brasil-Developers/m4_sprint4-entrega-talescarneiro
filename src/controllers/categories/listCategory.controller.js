import listCategoryService from "../../services/categories/listCategory.service.js";

const listCategoryController = async (request, response) => {
    try {
        const categories = await listCategoryService()
        return response.json(categories)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default listCategoryController