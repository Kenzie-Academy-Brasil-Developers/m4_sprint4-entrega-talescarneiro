import updateProductService from "../../services/products/updateProduct.service.js"

const updateProductController = async (request, response) => {
    try {
        const id = request.params.id
        const productData = request.body
        const product = await updateProductService(id, productData)
        return response.json(product)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default updateProductController