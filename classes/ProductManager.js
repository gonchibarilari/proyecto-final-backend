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
        this.products.forEach(product => {
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

        return product ? product : {error: "producto no encontrado"};
    }
    addProduct(product){
        this.getProducts();
        product.id = this.getId();
        this.products.push(product);    
        this.saveProducts();
    }
    editProduct(id, product){
        return this.products;
        
    }
    deleteProduct(id){
        return this.products;
    }

    saveProducts(){
        fs.writeFileSync(this.file, JSON.stringify(this.products));
    }
}

export default ProductManager;