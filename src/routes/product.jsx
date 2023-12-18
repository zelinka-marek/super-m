import clsx from "clsx";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";

const tabs = [
  { name: "Details", to: "." },
  { name: "Nutrition", to: "nutrition" },
  { name: "Storage", to: "storage" },
];

export default function ProductPage() {
  const { product } = useLoaderData();

  return (
    <>
      <div className="flex items-center gap-8">
        <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gray-50">
          <img className="h-8 w-8" src={product.image} alt="" />
        </span>
        <div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            {product.name}
          </h1>
        </div>
      </div>
      <div className="mt-2 border-b border-gray-200 sm:mt-6">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <NavLink
              key={tab.name}
              to={tab.to}
              end
              className={({ isActive }) =>
                clsx(
                  isActive
                    ? "border-teal-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium",
                )
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="mt-6">
        <Outlet context={{ product }} />
      </div>
    </>
  );
}
