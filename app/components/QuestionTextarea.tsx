"use client";

import { useState } from "react";

type QuestionTextareaProps = {
  name: string;
  placeholder?: string;
  className?: string;
};

export const QuestionTextarea = ({
  name,
  placeholder,
  className,
}: QuestionTextareaProps) => {
  const [content, setContent] = useState("");

  return (
    <textarea
      className={className}
      name={name}
      placeholder={placeholder}
      value={content}
      onChange={(event) => setContent(event.target.value)}
      required
      rows={1}
    />
  );
};
