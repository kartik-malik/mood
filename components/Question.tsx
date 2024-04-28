"use client";

import { FormEvent, FormEventHandler, useState } from "react";
import { askQuestions } from "~/utils/api";

const Question = () => {
  const [question, setQuestion] = useState("");

  const [status, setStatus] = useState<"loading" | "error" | "idle">("idle");

  const [answer, setAnswer] = useState();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      setStatus("loading");
      e.preventDefault();
      const answer = await askQuestions(question);

      setAnswer(answer);

      setStatus("idle");
    } catch (error) {
      setStatus("error");
    }
  };

  const isLoading = status === "loading";
  const isIdle = status === "idle";
  const isError = status === "error";

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-lg"
          disabled={isLoading}
          placeholder="Ask a question..."
          height={80}
        />
        <button
          disabled={isLoading}
          type="submit"
          className="bg-blue-400 px-4 py-2 rounded-md"
        >
          {isIdle && "Ask"}
          {isLoading && (
            <div className="rounded-full border-2 border-white border-l-slate-200 w-4 h-4 animate-spin"></div>
          )}
        </button>
      </form>
      {isError && <p>Something went wrong please try again later</p>}
      {answer && <p className="my-4 text-xl">{answer}</p>}
    </div>
  );
};

export { Question };
