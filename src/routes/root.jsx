import clsx from "clsx";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";

export default function Root() {
  let { cart } = useLoaderData();

  let navigation = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Products", to: "/products" },
    { name: cart.length > 0 ? `Cart (${cart.length})` : "Cart", to: "/cart" },
  ];

  return (
    <div className="min-h-full bg-gray-100">
      <nav className="border-t-8 border-teal-500 bg-white shadow-sm">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex flex-none items-center">
              <h1 className="text-base/7 font-semibold text-gray-900">
                <Link to="/">SuperM</Link>
              </h1>
            </div>
            <div className="-my-px ml-6 flex gap-8">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    clsx(
                      isActive
                        ? "border-teal-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <main className="py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
