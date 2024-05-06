"use client";
import { ProductType, placeHolderImage } from "@/lib/constants";
import { useState } from "react";

export default function CardDetail(pros: ProductType) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => quantity > 1 && setQuantity(quantity - 1);
  return (
    <main className="container mx-auto mt-3 ">
      <div className="grid lg:grid-cols-2">
        <div className="max-w-[500px] mx-auto">
          <img
            src={pros?.image || placeHolderImage}
            alt=""
            className="max-w-[500px] "
          />
        </div>
        <div className="leading-[40px]">
          <p>Home / Men / DNK Blue Shoes</p>
          <p className="font-semibold">Men</p>
          <p className="text-[30px]">{pros.name}</p>
          <p className="text-[20px] font-semibold">
            {pros.price} $ +Free Shipping
          </p>
          <p className="leading-">{pros.desc}</p>
          <div>
            <form>
              <label className="font-semibold">Choose quantity:</label>
              <div className="relative flex items-center max-w-[8rem]">
                <button
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="quantity-input"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  onClick={decrement}
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  id="quantity-input"
                  data-input-counter
                  data-input-counter-min="1"
                  data-input-counter-max="50"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="999"
                  value={quantity} // replace static value with quantity state variable
                  required
                />
                <button
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="quantity-input"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  onClick={increment}
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
              <p
                id="helper-text-explanation"
                className="mt-2 text-sm text-gray-500 dark:text-gray-400"
              >
                Please select a 5 digit number from 0 to {pros.quantity}.
              </p>
            </form>
          </div>
          <button className="mt-4 bg-yellow-500 text-white px-5 py-1 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
