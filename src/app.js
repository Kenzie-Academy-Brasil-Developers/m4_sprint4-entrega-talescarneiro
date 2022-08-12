import express from "express";
import "dotenv/config";
import { startDatabase } from "./database/index.js";
import CategoryRouter from "./routers/categories.routes.js"
import ProductsRouter from "./routers/products.routes.js"


const app = express();

app.use(express.json());
app.use('/categories', CategoryRouter)
app.use('/products', ProductsRouter)

export default app.listen(3333, () => {
  console.log("Server running");
  startDatabase();
});
