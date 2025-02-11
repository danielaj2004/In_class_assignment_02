// Task 1
let products = [
    {name: "laptop", price: 1200, category: "electronics" },
    {name: "Desk chair", price: 150, category: "furniture" }
];
function getProductByCategory(products, category) {
    return products.filter(products => product.category === category);
}
console.log(getProductByCategory(products, "electronics"));
