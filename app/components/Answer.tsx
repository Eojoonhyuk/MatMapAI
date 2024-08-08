"use client";

import { useState } from "react";
import { KakaoMap } from "./KakaoMap";

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
    <div className="flex flex-col gap-3">
      <div>
        <ul className="flex gap-3 flex-wrap w-96">
          {recommenedFoods.foods.map((food) => (
            <li
              key={food}
              className="w-fit border rounded-lg bg-slate-100 text-sm"
            >
              <button
                className="p-2"
                type="button"
                onClick={() => setSelectedFood(food)}
              >
                {food}
              </button>
            </li>
          ))}
        </ul>
        <KakaoMap keyword={selectedFood} />
      </div>
    </div>
  );
};
