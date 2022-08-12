import database from "../../database/index.js";

const listProductService = async () => {
    try {
        const res = await database.query(
            `SELECT * FROM products;`,
            []
        )
        return res.rows
    } catch (error) {
        throw new Error(error)
    }
}

export default listProductService