"use client";

import { useFormStatus } from "react-dom";

export const SendButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="border rounded-lg border-solid border-black w-80 p-2"
      type="submit"
      disabled={pending}
    >
      제출
    </button>
  );
};
