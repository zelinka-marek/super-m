export async function getProducts() {
  const response = await fetch(
    "https://react-tutorial-demo.firebaseio.com/supermarket.json",
  );

  return await response.json();
}

export async function getProductById(id) {
  const response = await fetch(
    `https://react-tutorial-demo.firebaseio.com/productinfo/id${id}.json`,
  );

  return await response.json();
}
