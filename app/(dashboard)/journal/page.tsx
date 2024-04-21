import { EntryCard } from "~/components/EntryCard";
import { NewEntryCard } from "~/components/NewEntryCard";
import { Question } from "~/components/Question";
import { update } from "~/utils/actions/update";
import { analyze } from "~/utils/ai";
import { getUserByClerkId } from "~/utils/auth";
import { prisma } from "~/utils/db";

const getJournals = async () => {
  const user = await getUserByClerkId();

  const journals = await prisma.journalEntry.findMany({
    where: { userId: user?.id },
    include: {
      analysis: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return journals;
};

const Journal = async () => {
  const journals = await getJournals();

  return (
    <div className="p-10 bg-[#8576FF] h-full">
      <h2 className="text-3xl mb-8">Journal</h2>
      <Question />
      <div className="grid grid-cols-3 gap-4 ">
        <NewEntryCard update={update}/>
        {journals.map((entry) => {
          return <EntryCard entry={entry} key={entry.id} />;
        })}
      </div>
    </div>
  );
};

export default Journal;
