import retrieveCategoryService from "../services/retrieveCategory.service.js";

const retrieveCategoryController = async (request, response) => {
    try {
        const { id } = request.params
        const category = await retrieveCategoryService(id)
        return response.json(category)
    } catch (error) {
        response.status(400).json({
            message: error.message
        })
    }
}

export default retrieveCategoryController