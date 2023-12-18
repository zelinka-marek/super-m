import { useOutletContext } from "react-router-dom";

export default function ProductStoragePage() {
  const { product } = useOutletContext();

  return <p className="text-base/7 text-gray-600">{product.storage}</p>;
}
