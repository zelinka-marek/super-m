import { Link } from "react-router-dom";
import imgUrl from "../assets/home.jpg";

export default function IndexRoute() {
  return (
    <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-x-16">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Online shopping simplified
        </h1>
        <p className="mt-6 text-lg/8 text-gray-600">
          Order your groceries from <em>SuperM</em> with our easy to use app,
          and get your products delivered straight to your doorstep.
        </p>
        <div className="mt-10">
          <Link
            to="/products"
            className="inline-block rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            Start shopping <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
      <img
        src={imgUrl}
        alt=""
        className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none"
      />
    </div>
  );
}
