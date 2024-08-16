const { faker } = require("@faker-js/faker");
const Product = require("./models/Product");

// Function to create random products
async function generateFakeProducts() {
  for (let i = 0; i < 50; i++) {
    const product = new Product({
      name: faker.commerce.productName(),
      description: faker.lorem.paragraph(),
      price: parseFloat(faker.commerce.price()),
      slashedPrice: parseFloat(faker.commerce.price()),
      rating: faker.number.int({ min: 1, max: 5 }),
      category: faker.commerce.department(),
      stock: faker.number.int({ min: 0, max: 100 }),
      imageUrl: faker.image.url(),
    });

    await product.save();
  }
  console.log("30 products created!");
}

module.exports = generateFakeProducts;
