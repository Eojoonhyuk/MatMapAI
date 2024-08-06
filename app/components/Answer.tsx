"use client";

import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";

interface AnswerProps {
  answer: string;
}

interface RecommenedFoods {
  foods: string[];
}

export const Answer = ({ answer }: AnswerProps) => {
  const { pending } = useFormStatus();
  const recommenedFoods: RecommenedFoods = JSON.parse(answer);
  const router = useRouter();

  if (pending) console.log(1);
  return (
    <div className="flex flex-col gap-3">
      {pending ? (
        <span>답변 생성중</span>
      ) : (
        <ul className="flex gap-3 flex-wrap w-96">
          {recommenedFoods.foods.map((food) => (
            <li
              key={food}
              className="w-fit border rounded-lg bg-slate-100 text-sm"
            >
              <button
                className="p-2"
                type="button"
                onClick={() => router.push("/map")}
              >
                {food}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
