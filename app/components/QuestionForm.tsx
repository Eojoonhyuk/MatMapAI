"use client";

import { useFormState } from "react-dom";
import { createAnswer } from "../services/openai.action";
import { useState } from "react";

export const QuestionForm = () => {
  const [content, setContent] = useState("");
  const [answer, dispatch] = useFormState(createAnswer, "");

  return (
    <div>
      <form action={dispatch}>
        <textarea
          name="situation"
          placeholder="현재 상황을 입력하세요."
          value={content}
          onChange={(event) => setContent(event.target.value)}
          required
        />
        <button type="submit">버튼</button>
      </form>
      <button
        type="button"
        onClick={() => console.log(process.env.NEXT_PUBLIC_OPENAI_API_KEY)}
      >
        클릭
      </button>
      <span>{answer}</span>
    </div>
  );
};
