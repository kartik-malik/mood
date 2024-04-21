import { JournalEntry } from "@prisma/client";

const createUrl = (path: string) => {
  return window.location.origin + path;
};

const createNewEntry = async () => {
  const res = await fetch(new Request(createUrl("/api/journal")), {
    method: "POST",
  });

  if (res.ok) {
    const resData = await res.json();
    return resData.data as JournalEntry;
  }
};

const askQuestions = async (question: string) => {
  const response = await fetch(createUrl("/api/question"), {
    body: JSON.stringify({ question }),
    method:"POST",
  });

  if(response.ok){
    const resData = await response.json();
    return resData.data ;
  }
};

export { createNewEntry, askQuestions };
