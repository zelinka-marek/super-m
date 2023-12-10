import { useLoaderData } from "react-router-dom";

export default function CartPage() {
  let { cart } = useLoaderData();

  return (
    <div className="mx-auto max-w-xl space-y-10 sm:space-y-16">
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
      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {cart.map((item) => (
            <li key={item.id} className="flex gap-4 py-6">
              <div className="inline-flex h-24 w-24 flex-none items-center justify-center overflow-hidden rounded-lg bg-gray-50">
                <img src={item.image} alt="" className="h-20 w-20" />
              </div>
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
                  <p className="text-sm text-gray-500">Qty {item.quantity}</p>
                  <div className="flex">
                    <button
                      type="button"
                      className="text-sm font-medium text-teal-600 hover:text-teal-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
