import { Logo } from "./components/Logo";
import { QuestionForm } from "./components/QuestionForm";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center flex-col gap-5">
      <Logo />
      <QuestionForm />
    </main>
  );
}
