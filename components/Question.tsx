"use client";

import { FormEvent, FormEventHandler, useState } from "react";
import { askQuestions } from "~/utils/api";

const Question = () => {
  const [question, setQuestion] = useState("");

  const [loading, setLoading] = useState(false);

  const [answer, setAnswer] = useState();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(false);
    e.preventDefault();
    const answer = await askQuestions(question);

    setAnswer(answer);

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-lg"
          disabled={loading}
          placeholder="Ask a question..."
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-blue-400 px-4 py-2 rounded-md"
        >
          Ask
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {answer && <p className="my-4 text-xl">{answer}</p>}
    </div>
  );
};

export { Question };
