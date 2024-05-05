import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-pink-500"> here! :) </span>
          </h1>
          <p className="mt-12">
            {" "}
            Book shopping online is an excellent way to expand your horizons and
            find new authors you might not have otherwise read. With a bit of
            research on the book-shopping apps, you can save money, while also
            giving you access to more than just the latest releases.
          </p>
          <Link to="/">
            <button className="mt-6 text-white px-4 py-2 bg-pink-500 rounded-md hover:bg-pink-700 duration-300">
              Back{" "}
            </button>
          </Link>
        </div>
        <div className="  mt-12 grid grid-cols-1 md:grid-cols-3 ">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
