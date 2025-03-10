import { Router } from "express";
import ProductManager from "../classes/ProductManager.js";

const productsRouter = Router();    
const PM = new ProductManager();


productsRouter.get("/", (req, res) => {
    let products = PM.getProducts();
res.send(products);
})

productsRouter.get("/:pid", (req, res) => {
    let pid = req.params.pid;
    let product = PM.getProductById(pid);
res.send(product);
})

export default productsRouter;