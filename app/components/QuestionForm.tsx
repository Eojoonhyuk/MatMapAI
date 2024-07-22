"use client";

import { useFormState } from "react-dom";
import { createAnswer } from "../services/openai.action";
import { Answer } from "./Answer";
import { QuestionTextarea as Textarea } from "./QuestionTextarea";
import { SendButton } from "./SendButton";

export const QuestionForm = () => {
  const [answer, dispatch] = useFormState(createAnswer, "");

  return (
    <form action={dispatch}>
      <div className="flex flex-col gap-2">
        <Textarea
          className="outline-none border border-solid border-black rounded-lg p-2 max-w-80"
          name="situation"
          placeholder="현재 어떤 느낌의 음식이 먹고싶나요?"
        />
        <SendButton />
      </div>
      <div>
        <Answer answer={answer} />
      </div>
    </form>
  );
};
