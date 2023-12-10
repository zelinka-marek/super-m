import localforage from "localforage";

export async function getCartItems() {
  let cart = await localforage.getItem("cart");

  return cart ?? [];
}

export async function clearCartItems() {
  await localforage.removeItem("cart");
}

export async function addCartItem(product) {
  let cart = await getCartItems();
  let existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    let updatedCart = cart.map((item) =>
      item.id === product.id
        ? { ...product, quantity: item.quantity + 1 }
        : item,
    );
    set(updatedCart);
  } else {
    set(cart.concat({ ...product, quantity: 1 }));
  }
}

export async function removeCartItem(id) {
  let cart = await getCartItems();
  let updatedCart = cart.filter((item) => item.id !== id);

  set(updatedCart);
}

function set(cart) {
  return localforage.setItem("cart", cart);
}
