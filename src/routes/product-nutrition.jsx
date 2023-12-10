import { useOutletContext } from "react-router-dom";

export default function ProductNutritionPage() {
  let { product } = useOutletContext();

  let nutrientData = {
    Protein: product.nutrition.protein,
    Carbohydrates: product.nutrition.carbs,
    Fat: product.nutrition.fat,
    Salt: product.nutrition.salt,
  };

  return (
    <div className="overflow-hidden rounded-lg ring-1 ring-gray-300">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="rounded-t-lg bg-gray-50">
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
            >
              Nutrient
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {Object.entries(nutrientData).map(([label, value]) => (
            <tr key={label}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                {label}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {value.toLocaleString("en-US", {
                  style: "unit",
                  unit: "gram",
                  unitDisplay: "narrow",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
