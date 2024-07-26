"use client";

import { useFormStatus } from "react-dom";
import { FaArrowCircleUp } from "react-icons/fa";

export const SendButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="" type="submit" disabled={pending}>
      <FaArrowCircleUp size={25} />
    </button>
  );
};
