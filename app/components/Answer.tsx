"use client";

import { useState } from "react";
import { Map } from "./Map";
interface AnswerProps {
  answer: string;
}

interface RecommenedFoods {
  foods: string[];
}

export const Answer = ({ answer }: AnswerProps) => {
  const [selectedFood, setSelectedFood] = useState("");
  const recommenedFoods: RecommenedFoods = JSON.parse(answer);

  return (
    <>
      <ul className="w-full flex gap-3 flex-wrap absolute z-10 p-3 top-14">
        {recommenedFoods.foods.map((food) => (
          <li
            key={food}
            className="w-fit border rounded-xl bg-white	text-sm font-medium shadow-lg"
          >
            <button
              className={`px-2 py-1 ${
                food === selectedFood ? "text-blue-600 font-semibold" : ""
              }`}
              type="button"
              onClick={() => setSelectedFood(food)}
            >
              {food}
            </button>
          </li>
        ))}
      </ul>
      <Map keyword={selectedFood} />
    </>
  );
};
