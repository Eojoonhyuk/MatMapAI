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
    <div>
      {pending ? (
        <span>답변 생성중</span>
      ) : (
        <ul className="flex gap-5">
          {foods.food.map((food) => (
            <li
              className="w-fit border border-solid border-black rounded-lg p-3"
              key={food}
            >
              <button type="button" onClick={() => setSelectedFood(food)}>
                {food}
              </button>
            </li>
          ))}
        </ul>
      )}
      <KakaoMap />
    </div>
  );
};
