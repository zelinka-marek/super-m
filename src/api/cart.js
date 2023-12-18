import localforage from "localforage";

export async function getCartItems() {
  const cart = await localforage.getItem("cart");

  return cart ?? [];
}

export async function clearCartItems() {
  await localforage.removeItem("cart");
}

export async function addCartItem(product) {
  const cart = await getCartItems();
  const existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    const updatedCart = cart.map((item) =>
      item.id === product.id
        ? { ...product, quantity: item.quantity + 1 }
        : item,
    );
    await set(updatedCart);
  } else {
    await set(cart.concat({ ...product, quantity: 1 }));
  }
}

export async function removeCartItem(id) {
  const cart = await getCartItems();
  const updatedCart = cart.filter((item) => item.id !== id);

  await set(updatedCart);
}

function set(cart) {
  return localforage.setItem("cart", cart);
}
