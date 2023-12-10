import imgUrl from "../assets/about.jpg";

export default function AboutRoute() {
  return (
    <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-x-16">
      <div>
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          About SuperM
        </h1>
        <p className="mt-2 text-base/7 text-gray-600">
          We started operations in 2020. We guarantee fresh produce. Save time
          by shopping on our app and we&apos;ll deliver the products right to
          your home. <em>We use Stripe to process your payment.</em>
        </p>
      </div>
      <img
        src={imgUrl}
        alt=""
        className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none"
      />
    </div>
  );
}
