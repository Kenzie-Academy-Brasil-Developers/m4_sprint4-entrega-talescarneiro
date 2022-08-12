import retrieveProductService from "../../services/products/retrieveProduct.service.js"

const retrieveProductController = async (request, response) => {
    try {
        const { id } = request.params
        const product = await retrieveProductService(id)
        return response.json(product)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default retrieveProductController