"use client"

import { FormEvent, FormEventHandler, useState } from "react";

const Question = () => {

    const [question,setQuestion] = useState('');

    const [loading,setLoading] = useState(false);

    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{

     e.preventDefault(); 
     
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
