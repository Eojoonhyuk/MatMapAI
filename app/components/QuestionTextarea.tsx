import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";

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
  const { pending } = useFormStatus();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handlePressEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !pending) {
      e.preventDefault();
      const form = textareaRef.current?.form;
      if (form) form.requestSubmit();
    }
  };

  return (
    <textarea
      className={className}
      ref={textareaRef}
      name={name}
      placeholder={placeholder}
      value={content}
      onChange={(event) => setContent(event.target.value)}
      onKeyDown={handlePressEnter}
      required
      rows={1}
    />
  );
};
