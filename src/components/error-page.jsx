import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  let error = useRouteError();
  console.error(error);

  let errorMessage = isRouteErrorResponse(error)
    ? error.statusText
    : error instanceof Error
      ? error.message
      : "Unknown error";

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Oops!
      </h1>
      <p className="mt-6 text-base/7 text-gray-600">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="mt-6 text-base/7 italic text-red-600">{errorMessage}</p>
    </div>
  );
}
