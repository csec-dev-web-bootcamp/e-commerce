import express from "express";
import {
  createProduct,
  deleteProduct,
  getManyProducts,
  getOneProduct,
  updateProduct,
} from "./products.service";
import { createProductPipe, updateProductPipe } from "./products.pipe";

const productsController = express.Router();

productsController.get("/", async (req, res) => {
  const products = await getManyProducts();
  return res.json(products);
});

productsController.post("/", createProductPipe, async (req, res) => {
  const data = req.body;
  const product = await createProduct(data);
  return res.json(product);
});

productsController.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await getOneProduct(+id);
  return res.json(product);
});

productsController.put("/:id", updateProductPipe, async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const product = await updateProduct(+id, data);
  return res.json(product);
});

productsController.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await deleteProduct(+id);
  return res.json(product);
});

export default productsController;
