import { useState } from "react";
import { KakaoMap } from "./components/KakaoMap";
import { Logo } from "./components/Logo";
import { QuestionForm } from "./components/QuestionForm";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div className="w-full flex justify-center items-center flex-col gap-5">
        <Logo />
        <QuestionForm />
      </div>
    </main>
  );
}
