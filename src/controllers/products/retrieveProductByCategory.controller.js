import retrieveProductByCategoryService from "../../services/products/retrieveProductByCategory.service.js"

const retrieveProductByCategoryController = async (request, response) => {
    try {
        const { id } = request.params
        const product = await retrieveProductByCategoryService(id)
        return response.json(product)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default retrieveProductByCategoryController