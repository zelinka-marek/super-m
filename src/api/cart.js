import localforage from "localforage";

export async function getCartItems() {
  let cart = await localforage.getItem("cart");

  return cart ?? [];
}

export async function addCartItem(product) {
  let cart = await getCartItems();
  let existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    let updatedCart = cart.map((item) =>
      item.id === product.id
        ? { ...product, quantity: product.quantity + 1 }
        : item,
    );
    await set(updatedCart);
  } else {
    set(cart.concat({ ...product, quantity: 1 }));
  }
}

function set(cart) {
  return localforage.setItem("cart", cart);
}
