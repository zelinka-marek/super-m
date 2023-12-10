import { Link, useLoaderData } from "react-router-dom";

export default function ProductsRoute() {
  let { products } = useLoaderData();

  return (
    <div className="space-y-10 sm:space-y-16">
      <div>
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          Products
        </h1>
        <p className="mt-2 text-base/7 text-gray-600">
          Take a look at our fresh products.
        </p>
      </div>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex gap-6 rounded-2xl bg-white p-6 shadow max-sm:flex-col"
          >
            <Link
              to={product.id.toString()}
              className="inline-flex h-[100px] w-[100px] flex-none items-center justify-center rounded-xl bg-gray-50 max-sm:mx-auto"
              aria-label={product.name}
            >
              <img className="h-20 w-20" src={product.image} alt="" />
            </Link>
            <div className="max-sm:text-center sm:flex-auto">
              <p className="text-2xl font-bold text-gray-900 sm:text-xl">
                {product.name}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {product.description}
              </p>
              <div className="mt-3 sm:flex sm:justify-end">
                <button
                  type="button"
                  className="rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500"
                >
                  {product.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  })}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
