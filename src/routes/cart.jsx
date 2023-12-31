import { loadStripe } from "@stripe/stripe-js";
import { Form, Link, useLoaderData } from "react-router-dom";

const stripeLoadedPromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY,
);

export default function CartPage() {
  const { cart } = useLoaderData();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  async function handleCheckout() {
    const lineItems = cart.map((item) => {
      return { price: item.price_id, quantity: item.quantity };
    });

    const stripe = await stripeLoadedPromise;
    stripe.redirectToCheckout({
      lineItems: lineItems,
      mode: "payment",
      successUrl: import.meta.env.VITE_STRIPE_CHECKOUT_SUCCESS_URL,
      cancelUrl: import.meta.env.VITE_STRIPE_CHECKOUT_CANCEL_URL,
    });
  }

  return (
    <div className="space-y-10 sm:space-y-16">
      <div>
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          Your Cart
        </h1>
        {cart.length === 0 ? (
          <p className="mt-2 text-base/7 text-gray-600">
            You have not added any product to your cart yet.
          </p>
        ) : null}
      </div>
      {cart.length > 0 ? (
        <div className="space-y-6">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cart.map((item) => (
                <li key={item.id} className="flex gap-4 py-6">
                  <Link
                    to={`/products/${item.id.toString()}`}
                    className="inline-flex h-24 w-24 flex-none items-center justify-center overflow-hidden rounded-lg bg-gray-50"
                    aria-label={item.name}
                  >
                    <img src={item.image} alt="" className="h-20 w-20" />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between gap-4">
                        <h3 className="text-base font-medium text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-base font-medium text-gray-900">
                          {item.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 0,
                          })}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between">
                      <p className="text-sm text-gray-500">
                        Qty {item.quantity}
                      </p>
                      <div className="flex">
                        <Form method="POST">
                          <input type="hidden" name="itemId" value={item.id} />
                          <button
                            type="submit"
                            className="text-sm font-medium text-teal-600 hover:text-teal-500"
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            Remove
                          </button>
                        </Form>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-gray-200 py-6">
            <div className="flex justify-between">
              <p className="text-base font-medium text-gray-700">Subtotal</p>
              <p className="text-base font-medium text-gray-900">
                {totalPrice.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                })}
              </p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Your products will be delivered to you.
            </p>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={handleCheckout}
                className="inline-flex w-full justify-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500"
              >
                Checkout
              </button>
            </div>
            <p className="mt-6 text-center text-sm text-gray-500">
              or{" "}
              <Link
                to="/products"
                className="font-medium text-teal-600 hover:text-teal-500"
              >
                Continue Shopping <span aria-hidden>&rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
