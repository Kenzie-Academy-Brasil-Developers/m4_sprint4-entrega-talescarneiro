import database from "../../database/index.js";

const retrieveProductByCategoryService = async (categoryId) => {
    try {
        const res = await database.query(
            `SELECT products.*, categories.name category FROM categories JOIN products ON categories.id = products.category_id WHERE categories.id = $1;`,
            [categoryId]
        )

        if(res.rowCount === 0) {
            throw new Error('There is no product with this category id')
        }
        
        return res.rows
    } catch (error) {
        throw new Error(error)
    }
}

export default retrieveProductByCategoryService