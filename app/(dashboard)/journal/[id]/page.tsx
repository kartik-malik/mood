import JournalAnalysisContent from "~/components/AnalysisContent";
import JournalAnalysisModal, {
  JourneyAnalysisDesktop,
} from "~/components/Analysis";

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

  if (!journalData) return null;

  const analysisData = {
    bgColor: journalData.analysis?.color,
    listData: [
      { name: "Summary", value: journalData.analysis?.summary },
      { name: "Subject", value: journalData.analysis?.subject },
      { name: "Mood", value: journalData.analysis?.mood },
      { name: "Score", value: journalData.analysis?.sentimentScore },
    ],
  };

  return (
    <div className="h-full w-full flex-col gap-4 md:grid md:grid-cols-3 p-3">
      <div className="col-span-2">{<Editor entry={journalData} />}</div>
      <JourneyAnalysisDesktop
        analysisContent={
          <JournalAnalysisContent
            analysisData={analysisData.listData}
            bgColor={journalData.analysis?.color}
          />
        }
      />
      <JournalAnalysisModal
        analysisContent={
          <JournalAnalysisContent
            analysisData={analysisData.listData}
            bgColor={journalData.analysis?.color}
          />
        }
      />
    </div>
  );
};

export default EditJournalPage;
