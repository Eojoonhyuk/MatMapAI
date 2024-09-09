"use client";

import { useFormStatus } from "react-dom";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";

export const SendButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? (
        <FaSpinner className="animate-spin" size={25} />
      ) : (
        <FaArrowCircleUp size={25} />
      )}
    </button>
  );
};
