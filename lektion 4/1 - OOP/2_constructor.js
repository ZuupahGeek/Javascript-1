function Product1(productName, price, description) {
    this.productName = productName
    this.price = price
    this.description = description

    this.summary = function() {
        return `The product, ${this.productName} costs ${this.price} kr`
    }

}

const Product2 = {
    productName: 'product 2',
    description: 'This is a product',
    price: 100,

    summary: function() {
        return `The product, ${this.productName} costs ${this.price} kr`
    }
}



/* console.log(Product1)
console.log(Product2) */