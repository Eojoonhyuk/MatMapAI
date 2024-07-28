"use client";

import { useFormState } from "react-dom";
import { createAnswer } from "../services/openai.action";
import { Answer } from "./Answer";
import { QuestionTextarea as Textarea } from "./QuestionTextarea";
import { SendButton } from "./SendButton";
import { TbZoom } from "react-icons/tb";

export const QuestionForm = () => {
  const [answer, dispatch] = useFormState(createAnswer, "");

  return (
    <form action={dispatch} className="flex flex-col gap-3">
      <div className="flex gap-2 w-96	min-h-11 border border-solid border-#dfe1e5 rounded-3xl p-2">
        <TbZoom size={25} />
        <Textarea
          className="outline-none resize-none overflow-hidden grow px-2"
          name="situation"
          placeholder="현재 어떤 느낌의 음식이 먹고싶나요?"
        />
        <SendButton />
      </div>
      <div>{!!answer && <Answer answer={answer} />}</div>
    </form>
  );
};
