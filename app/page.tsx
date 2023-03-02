import QuestionForm from "@/components/QuestionForm";

export default async function Home() {
  const result = await fetch("http://localhost:3000/api/hello").then((res) => {
    return res.text();
  });
  return (
    <main>
      <div className="text-black flex flex-col w-full py-20">
        <QuestionForm />
      </div>
    </main>
  );
}
