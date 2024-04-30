import express from "express";
import "dotenv/config";
import productsController from "./products/products.controller";
import { httpExceptionHandler } from "./middlewares/http-exception-handler";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello world!",
  });
});

app.use("/products", productsController);

app.all("*", (req, res) => {
  return res.status(404).json({ error: "Not Found" });
});


app.use(httpExceptionHandler);

app.listen(8000, () => {
  console.log("App listening at 8000");
});
