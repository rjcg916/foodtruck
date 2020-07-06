/* module.exports = function () {
    return {
        categories: ["Drinks", "Sandwiches", "Treats"],
        items : [ 
            
            {id: 1, name: "Cola", category: "Drinks", description: "A classic refresher", price: 1.50},
            {id: 2, name: "Roast Beef", category: "Sandwiches", description: "Thin-sliced meat on fresh bread", price: 6.50},
            {id: 3, name: "Cookie", category: "Treats", description: "Choice of Giant-Sized Chocalate Chip or Peanut Butter", price: 2.00},    
    ],
        orders: []
    }
} */
const faker = require("faker");

let data = [];
const  categories = ["Drinks", "Sandwiches", "Treats"];

faker.seed(100);

for (let i = 1; i <= 503; i++) {
    let category = faker.helpers.randomize(categories);
    data.push({
        id : i,
        name: faker.commerce.productName(),
        category: category,
        description : `${category} : ${faker.lorem.sentence(3)}`,
        price: Number(faker.commerce.price())
    });
}

module.exports = function() {
    return {
        categories: categories,
        items: data,
        orders: []
    }
}
