import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes";
import categoriesRoute from "./routes/categories.routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/categories", categoriesRoute);

// Optional: add health check
app.get("/health", (_, res) => res.send("OK"));

app.use(errorHandler);

export default app;
