import { useOutletContext } from "react-router-dom";

export default function ProductDetailsPage() {
  let { product } = useOutletContext();

  return (
    <>
      <p className="text-base/7 text-gray-600">{product.description}</p>
      <div className="mt-3">
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
    </>
  );
}
