import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";

let navigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Products", to: "/products" },
  { name: "Cart", to: "/cart" },
];

export default function Root() {
  return (
    <div className="min-h-full bg-gray-100">
      <nav className="border-t-8 border-teal-400 bg-white shadow-sm">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex flex-none items-center">
              <h1 className="text-base/7 font-semibold text-gray-900">
                SuperM
              </h1>
            </div>
            <div className="flex gap-8">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    clsx(
                      isActive
                        ? "bg-gray-100 text-gray-700"
                        : "text-gray-500 hover:text-gray-700",
                      "rounded-md px-3 py-2 text-sm font-medium",
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
