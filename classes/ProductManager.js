import fs from 'fs';
class ProductManager{
    constructor(){
        this.products = [];
        this.file= "products.json"
        this.createFile();
    }

    createFile(){
        if (!fs.existsSync(this.products)){
            fs.writeFileSync(this.file, JSON.stringify(this.products));
        }
    }

    getId() {
        this.getProducts();
        let max = 0;

        this.products.forEach(item => {
            if (item.id > max){
                max = item.id;
            }
        })
        return max + 1; 
    }

    getProducts(){
        this.products = JSON.parse(fs.readFileSync(this.file, "utf-8"));

        return this.products;
    }

    getProductById(id){
        this.products = JSON.parse(fs.readFileSync(this.file, "utf-8"));
        let product = this.products.find(item => item.id == id);

        return product ? product : {"error": "producto no encontrado"};
    }


    addProduct(product){
        this.getProducts();
        let newProduct = {id: this.getId(), ...product};
        this.products.push(newProduct);    
        this.saveProducts();
    }

    editProduct(id, product){
        this.getProducts();
        let actualProduct = this.products.find(item => item.id == id);

        // let newProduct = {id:id, ...actualProduct, ...product};
        // this.products.push(newProduct);    
        actualProduct.title = product.title;
        actualProduct.description = product.description;
        actualProduct.code = product.code;
        actualProduct.price = product.price;
        actualProduct.status = product.status;
        actualProduct.category = product.category;
        actualProduct.thumbnails = product.thumbnails;
        this.saveProducts();
        
    }
    deleteProduct(id){
        return this.products;
    }

    saveProducts(){
        fs.writeFileSync(this.file, JSON.stringify(this.products));
    }
}

export default ProductManager;