import { Logo } from "./components/Logo";
import { QuestionForm } from "./components/QuestionForm";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex justify-center items-center flex-col gap-5 pt-3">
      <Logo />
      <QuestionForm />
    </main>
  );
}
