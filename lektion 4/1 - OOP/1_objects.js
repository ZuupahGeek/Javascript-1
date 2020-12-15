

const product = {
    productName: 'product 1',
    description: 'This is a product',
    price: 100,

    summary: function() {
        return `The product, ${this.productName} costs ${this.price} kr`
    }
}

// console.log(product.summary())