import database from "../../database/index.js";

const updateProductService = async (productId, productData) => {
    try {
        if(productData.id) {
            delete productData['id']
        }
        let query = 'UPDATE users SET '
        const keys = Object.keys(productData)
        const values = Object.values(productData)

        keys.forEach((key, index) => {
            query += `${key} = \$${index+=1}, `
        })

        query = query.slice(0, -2)

        query += ` WHERE id = \$${keys.length+=1} RETURNING *`

        const res = await database.query(
            query,
            [...values, productId]
        )

        if(res.rowCount === 0) {
            throw new Error('Product not found')
        }

        return res.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}

export default updateProductService