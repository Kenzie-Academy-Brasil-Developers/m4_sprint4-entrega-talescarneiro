import database from "../../database/index.js";

const retrieveProductService = async (productId) => {
    try {
        const res = await database.query(
            `SELECT * FROM products WHERE id = $1`,
            [productId]
        )
        if(res.rowCount === 0) {
            throw new Error('Product not found')
        }

        return res.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}

export default retrieveProductService