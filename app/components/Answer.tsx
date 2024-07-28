"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { KakaoMap } from "./KakaoMap";

interface AnswerProps {
  answer: string;
}

interface Foods {
  food: string[];
}

export const Answer = ({ answer }: AnswerProps) => {
  const { pending } = useFormStatus();
  const [selectedFood, setSelectedFood] = useState("");
  const foods: Foods = JSON.parse(answer);

  return (
    <div className="flex flex-col gap-3">
      {pending ? (
        <span>답변 생성중</span>
      ) : (
        <ul className="flex gap-3 flex-wrap w-96">
          {foods.food.map((food) => (
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
      )}
      {!!selectedFood && <KakaoMap keyword={selectedFood} />}
    </div>
  );
};
