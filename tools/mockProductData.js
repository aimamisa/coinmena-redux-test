const products = [
  {
    id: 1,
    slug: "basic-keyboard",
    product_name: "basic keyboard",
    weight: "500g",
    availability: 261,
    url: "https://amazon.com/basic_keyboard",
    price_tier: "budget",
    price_range: "$1-10",
    unit_cost: "$10.47",
    isEditable: true
  },
  {
    id: 2,
    slug: "gaming-keyboard",
    product_name: "gaming keyboard",
    weight: "500g",
    availability: 40,
    url: "https://amazon.com/gaming_keyboard",
    price_tier: "premium",
    price_range: "$50-100",
    unit_cost: "$55.99",
    isEditable: false
  },
  {
    id: 3,
    slug: "custom-mechanical-keyboard",
    product_name: "custom mechanical keyboard",
    weight: "2.5Kg",
    availability: 10,
    url: "https://amazon.com/custom_mech_board",
    price_tier: "premium",
    price_range: "$200+",
    unit_cost: "$250",
    isEditable: true
  }
];

const budgets = [
  { id: 1, name: "$1-10" },
  { id: 2, name: "$11-19" },
  { id: 3, name: "$20-50" }
];

const premiums = [
  { id: 1, name: "$50-99" },
  { id: 2, name: "$10-199" },
  { id: 3, name: "$200+" }
];

const newProduct = {
  id: null,
  product_name: "",
  weight: "",
  availability: 0,
  url: "",
  price_tier: "",
  price_range: "",
  unit_cost: "",
  isEditable: false
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newProduct,
  products,
  budgets,
  premiums
};
