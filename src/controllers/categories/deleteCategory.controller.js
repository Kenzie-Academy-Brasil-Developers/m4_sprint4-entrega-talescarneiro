import deleteCategoryService from "../../services/categories/deleteCategory.service.js"

const deleteCategoryController = async (request, response) => {
    try {
        const id = request.params.id
        await deleteCategoryService(id)
        return response.status(204).send()
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default deleteCategoryController