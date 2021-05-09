/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockProductData = require("./mockProductData");

const { products, budgets, premiums } = mockProductData;
const data = JSON.stringify({ products, budgets, premiums });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created successfully!");
});
