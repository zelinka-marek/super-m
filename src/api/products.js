export async function getProducts() {
  let response = await fetch(
    "https://react-tutorial-demo.firebaseio.com/supermarket.json",
  );
  let products = await response.json();

  return products;
}
