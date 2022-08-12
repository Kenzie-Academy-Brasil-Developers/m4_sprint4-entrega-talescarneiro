import createCategoryService from "../../services/categories/createCategory.service.js";

const createCategoryController = async (request, response) => {
    try {
        const {name} = request.body
        const newCategory = await createCategoryService(name)
        return response.status(201).json(newCategory)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default createCategoryController