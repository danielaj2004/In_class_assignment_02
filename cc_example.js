// Task 1
let products = [
    {name: "laptop", price: 1200, category: "electronics" },
    {name: "Desk chair", price: 150, category: "furniture" }
];
function getProductByCategory(products, category) {
    return products.filter(products => products.category === category);
}
console.log(getProductByCategory(products, "electronics"));

// task 2
function applyDiscount(products, discountRate) {
    return products.map(product => ({
        ...product,
        price: product.price  - (product.price * discountRate)
    }

    ))
};
console.log(applyDiscount(products, 0.1));
