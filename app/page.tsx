import { useState } from "react";
import { KakaoMap } from "./components/KakaoMap";
import { Logo } from "./components/Logo";
import { QuestionForm } from "./components/QuestionForm";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex">
      <div className="w-1/3 flex justify-center items-center flex-col gap-5">
        <Logo />
        <QuestionForm />
      </div>
    </main>
  );
}
