import database from "../../database/index.js";

const deleteProductService = async (productId) => {
    try {
        const res = await database.query(
            `DELETE FROM products WHERE id = $1 RETURNING *`,
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

export default deleteProductService