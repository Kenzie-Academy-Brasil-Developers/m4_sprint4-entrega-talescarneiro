import express from "express";
import "dotenv/config";
import { startDatabase } from "./database/index.js";


const app = express();

app.use(express.json());

export default app.listen(3333, () => {
  console.log("Server running");
  startDatabase();
});
