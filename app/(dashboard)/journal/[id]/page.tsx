import { Editor } from "~/components/Editor";
import { getUserByClerkId } from "~/utils/auth";
import { prisma } from "~/utils/db";

const getJournal = async (id: string) => {
  const user = await getUserByClerkId();
  const journal = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user?.id as string,
        id,
      },
    },
    include: {
      user: true,
       analysis: true,
    },
  });

 
  return journal;
};

const EditJournalPage = async ({ params }: { params: { id: string } }) => {
  const journalData = await getJournal(params.id);

  if(!journalData) return null;

  const analysisData = [
    { name: "Summary", value: journalData.analysis?.summary },
    { name: "Subject", value: journalData.analysis?.subject },
    { name: "Mood", value: journalData.analysis?.mood },
    { name: "Score", value: journalData.analysis?.sentimentScore },
  ];

  return (
    <div className="h-full w-full grid grid-cols-3 p-3">
      <div className="col-span-2">
        {<Editor entry={journalData}  />}
      </div>
      <div className="border-l border-black/10">
        <div className={`px-6 py-10 bg-color-[${journalData.analysis?.color}]`} style={{background: journalData.analysis?.color}}>
          <h2 className="text-2xl">Analysis</h2>
        </div>
      <div>
        <ul >
          {analysisData.map((data)=>
           <li key={data.name} className="border-b border-t border-black/10 px-2 flex items-center justify-between mb-3">
             <span className="text-lg font-semibold">{data.name}</span>
             <span>{data.value}</span>

           </li>
          )}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default EditJournalPage;
