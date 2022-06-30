import React, { useState } from "react";

function Card() {
  const [name, setName] = useState("name");
  const [message, setMessage] = useState("Hii there");
  const [date, setDate] = useState("9.33am");
  return (
    <div className="mt-1">
      <div className="flex flex-row px-3 py-1 h-20 items-center justify-between bg-white rounded-sm border shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-12 h-12 rounded-3xl"
          src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
          alt=""
        />
        <div className="flex flex-row justify-items-start w-3/4 px-2 pl-4">
          <div className="flex flex-col">
            <p className="text-md -mt-1 font-semibold">{name}</p>
            <p className="text-md ">{message}</p>
          </div>
        </div>
        <div className="flex justify-items-end">
          <p className="text-sm -mt-6">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
