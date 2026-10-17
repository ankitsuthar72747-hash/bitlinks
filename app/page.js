import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="w-108 md:w-2/3 md:mx-auto ">
      <section className=" h-[50vh] mt-10 md:mt-20">
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
          <p className="font-bold text-xl md:text-4xl text-center">
            The best URl shortner in the Market.
          </p>
          <p className="md:px-70 px-10 text-center text-sm md:text-xl my-4">
            We are straightforward and easy to use. No login needed. Just paste
            your long URL and get a short link in seconds. Our service is free
            and reliable, making it the perfect choice for anyone looking to
            share links quickly and easily.
          </p>
          <div className="flex gap-4 justify-center items-center font-semibold my-2 text-white">
            <button className="md:text-xl bg-primary hover:bg-primary-hover px-4 md:px-8 py-2.5 rounded-lg ">
              <Link href="/shorten">Try Now</Link>
            </button>
            <button className="md:text-xl bg-primary hover:bg-primary-hover px-4 md:px-8 py-2.5 rounded-lg ">
              <Link
                target="_blank"
                href="https://github.com/ankitsuthar72747-hash?tab=repositories"
              >
                Github
              </Link>
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col not-md:mx-auto w-90 not-md:pl-2 md:w-full  gap-6 my-15 not-md:h-220">
          <div className="w-full  md:w-1/3 h-60 bg-surface shadow-card p-6 md:p-6 rounded-xl">
            <Image
              className="not-md:mx-auto bg-gray-100 rounded-full pr-1"
              alt="clock"
              src="/deadline.png"
              width={60}
              height={60}
            />
            <div className="py-4 not-md:text-center">
              <h2 className="font-bold text-xl md:text-2xl pb-1">Fast Redirects </h2>
              <p className="font-semibold text-sm md:text-lg">
                Redirects instantly with reliability
              </p>
            </div>
          </div>
          <div className="w-full  md:w-1/3 h-60 bg-surface shadow-card p-6 rounded-xl">
            {/* <div className="bg-gray-100 inline-block rounded-full p-1"> */}
             <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center not-md:mx-auto">
              <Image
                alt="clock"
                src="/person.png"
                width={40}
                height={40}
              />
            </div>
            <div className="py-4 not-md:text-center">
              <h2 className="font-bold text-xl md:text-2xl pb-1 ">No Login </h2>
              <p className="font-semibold text-sm md:text-lg ">No Login Required</p>
            </div>
          </div>
          <div className="w-full  md:w-1/3 h-60 bg-surface shadow-card p-6 rounded-xl">
            {/* <div className="bg-gray-100 inline-block rounded-full p-1"> */}
             <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center not-md:mx-auto">
              <Image
                alt="clock"
                src="/gift.png"
                width={40}
                height={40}
              />
            </div>
            <div className="py-4 not-md:text-center">
              <h2 className="font-bold text-xl md:text-2xl pb-1">Free to Use</h2>
              <p className="font-semibold text-sm md:text-lg">
                Always free core features, no hidden costs
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
