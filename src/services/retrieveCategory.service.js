import database from "../database/index.js";

const retrieveCategoryService = async (categoryId) => {
    try {
        const res = await database.query(
            `SELECT * FROM categories WHERE id = $1;`,
            [categoryId]
        )
        if(res.rowCount === 0) {
            throw new Error('Category not found')
        }

        return res.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}

export default retrieveCategoryService