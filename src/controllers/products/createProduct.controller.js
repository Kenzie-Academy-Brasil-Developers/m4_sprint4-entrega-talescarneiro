import createProductService from "../../services/products/createProduct.service.js"

const createProductController = async (request, response) => {
    try {
        const {name, price, category_id} = request.body
        const newProduct = await createProductService(name, price, category_id)
        return response.status(201).json(newProduct)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default createProductController