import database from "../../database/index.js";

const createCategoryService = async (name) => {
    try {
        console.log(name)
        const res = await database.query(
            `INSERT INTO categories(name) VALUES($1) RETURNING *`,
            [name]
        )
        return {message: 'Category created', category: res.rows[0]};
    } catch (error) {
        throw new Error(error)
    }
}

export default createCategoryService