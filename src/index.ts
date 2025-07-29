import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes";
import categroiesRoutes from "./routes/categories.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/categories", categroiesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
