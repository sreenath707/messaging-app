import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Card from "./card";

function Home() {
  return (
    <div className="rounded-lg py-3 px-1 shadow-lg bg-white h-screen max-w-sm overflow-hidden ">
      <div className="border-b-2 ml-5 -mt-2 text-center flex justify-between">
        <div className="rounded-3xl  shadow-xl w-10 h-10 my-3 bg-gray-200">
          <img
            src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
            alt=""
            className="rounded-3xl w-full h-full"
          ></img>
        </div>
        <div className="justify-items-center mt-6">
          <BsThreeDotsVertical />
        </div>
      </div>
      <div className="mt-2 mx-4">
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              class="block px-2 py-1.5 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      <div className="border-t-2 mt-2 h-5/6 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
