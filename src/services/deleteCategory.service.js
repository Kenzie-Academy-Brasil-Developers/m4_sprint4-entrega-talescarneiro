import database from "../database/index.js";

const deleteCategoryService = async (categoryId) => {
    try {
        const res = await database.query(
            `DELETE FROM categories WHERE id = $1 RETURNING *;`,
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

export default deleteCategoryService