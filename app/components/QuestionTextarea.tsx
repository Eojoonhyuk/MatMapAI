import { useEffect, useRef, useState } from "react";

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
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [content]);

  return (
    <textarea
      className={className}
      ref={textareaRef}
      name={name}
      placeholder={placeholder}
      value={content}
      onChange={(event) => setContent(event.target.value)}
      required
      rows={1}
    />
  );
};
