import QuestionForm from "@/components/QuestionForm";

export default async function Home() {
  return (
    <main>
      <div className="text-black flex flex-col w-full py-20">
        <QuestionForm />
      </div>
    </main>
  );
}
