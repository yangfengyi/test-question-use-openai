"use client";

import { useState } from "react";

export default function QuestionContent() {
  const [result, setResult] = useState();
  const [form, setForm] = useState({
    job: "",
    type: "",
  });

  const handleSubmit = () => {
    if (!form.job || !form.type) {
      return;
    }
    fetch("/api/openai", {
      method: "POST",
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data?.result);
      });
  };

  return (
    <>
      <div className="max-w-[800px] mx-auto flex flex-col items-center">
        <h1 className="text-3xl mb-12 text-center">生成面试题</h1>
        <div className="flex gap-8">
          <div>
            <label htmlFor="#job" className="label">
              职位:
            </label>
            <input
              id="job"
              className="input"
              value={form.job}
              onChange={(e) => {
                setForm({ ...form, job: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="#type" className="label">
              类型:
            </label>
            <input
              id="type"
              className="input"
              value={form.type}
              onChange={(e) => {
                setForm({ ...form, type: e.target.value });
              }}
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="w-[240px] h-10 text-xl text-pink-700 bg-blue-300 mt-8"
        >
          生成
        </button>
      </div>
      <div className="mt-10 w-[800px] mx-auto border border-pink-300 p-8">
        <h2 className="text-2xl font-bold text-pink-500">RESULT:</h2>
        <div className="whitespace-pre-wrap text-lg font-mono">{result}</div>
      </div>
    </>
  );
}
