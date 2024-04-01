import { getUserByClerkId } from "../auth";
import { prisma } from "../db";

const updateJournal = async (id: string, content: string) => {
  const user = await getUserByClerkId();

  const journal = await prisma.journalEntry.update({
    data: { content },
    where: {
      userId_id: {
        id,
        userId: user?.id!,
      },
    },
  });


  return journal;
};

export { updateJournal };
