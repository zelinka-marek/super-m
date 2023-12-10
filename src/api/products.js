export async function getProducts() {
  let response = await fetch(
    "https://react-tutorial-demo.firebaseio.com/supermarket.json",
  );
  let products = await response.json();

  return products;
}

export async function getProductById(id) {
  let response = await fetch(
    `https://react-tutorial-demo.firebaseio.com/productinfo/id${id}.json`,
  );
  let product = await response.json();

  return product;
}
