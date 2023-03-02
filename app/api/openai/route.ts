import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  const { type, job } = await request.json();

  // Create a ${questionType} question for my interviewe with a ${programLanguage} programer
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    // prompt: `Create a ${type} problem for my interviewe with a ${job} programer:`,
    prompt: `Give me ${job} ${type} problem and answer:`,
    max_tokens: 3000,
  });
  // console.log(completion.data);
  return new Response(
    JSON.stringify({ result: completion.data.choices[0].text })
  );
}
