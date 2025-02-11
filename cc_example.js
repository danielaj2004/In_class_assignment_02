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

// task 3
let sales = [250, 400, 150, 900, 1200];

function calculateTotalRevenue(sales) {
    return sales.reduce((calculateTotalRevenue, sales) => total+sales,0)
}
console.log(`Total Rev. 2024: $${calculateTotalRevenue(sales)}`)

// task 4
let employee = {name:"John Doe", Salary: 50000, psotion: "Manager"};
function updateSalary(employee, percentageIncrease) {
    return employee.Salary += employee.Salary * percentageIncrease;
}
console.log(updateSalary(employee, 0.1));