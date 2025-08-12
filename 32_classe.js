class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("shirt", 19.86);
const product2 = new Product("Pant", 25.03);
const product3 = new Product("Underwear", 100.4);

product1.displayProduct();
const total1 = product1.calculateTotal(salesTax);
console.log(`The total price (with tax) : $${total1.toFixed(2)}`);

console.log('');

product2.displayProduct();
const total2 = product2.calculateTotal(salesTax);
console.log(`The total price (with tax): $${total2.toFixed(2)}`);

console.log("");

product3.displayProduct();
const total3 = product3.calculateTotal(salesTax);
console.log(`The total price (with tax) : $${total3.toFixed(2)}`);