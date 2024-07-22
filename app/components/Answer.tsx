"use client";

import { useFormStatus } from "react-dom";

type AnswerProps = {
  answer: string;
};

export const Answer = ({ answer }: AnswerProps) => {
  const { pending } = useFormStatus();

  return (
    <div>{pending ? <span>답변 생성중</span> : <span>{answer}</span>}</div>
  );
};
