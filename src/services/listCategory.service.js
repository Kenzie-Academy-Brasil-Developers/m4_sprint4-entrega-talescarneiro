import database from "../database/index.js";

const listCategoryService = async () => {
    try {
        const res = await database.query(
            `SELECT * FROM categories;`,
            []
        )
        return res.rows
    } catch (error) {
        throw new Error(error)
    }
}

export default listCategoryService