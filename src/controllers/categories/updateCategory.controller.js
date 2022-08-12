import updateCategoryService from "../../services/categories/updateCategory.service.js"

const updateCategoryController = async (request, response) => {
    try {
        const id = request.params.id
        const {name} = request.body
        const updatedCategory = await updateCategoryService(id, name)
        return response.json(updatedCategory)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default updateCategoryController