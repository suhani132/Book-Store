import React from "react";
import banner from "../../public/banner.jpg"

function Banner() {
  return (
    <>
      <div className="mx-auto container max-w-screen-2xl md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className=" order-2 md:order-1 w-full md:w-1/2 md:mt-28 mt-12 ">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcomes here to learn something{" "}
              <span className="text-pink-500"> new everyday!!!</span>{" "}
            </h1>

            <p className="text-xl">
              Book shopping online is an excellent way to expand your horizons
              and find new authors you might not have otherwise read. With a bit
              of research on the book-shopping apps, you can save money, while
              also giving you access to more than just the latest releases.
            </p>
            <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          </div>
          <button className="btn mt-6 btn-secondary">Secondary</button>
        </div>
        <div className=" order-1 w-full md:w-1/2  md:mt-24 p-5 md:p-10">
            <img src={banner} className='w-92 h-92' alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
