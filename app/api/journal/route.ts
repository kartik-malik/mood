import { NextResponse } from "next/server";
import { update } from "~/utils/actions/update";
import { analyze } from "~/utils/ai";
import { getUserByClerkId } from "~/utils/auth";
import { prisma } from "~/utils/db";

export const POST = async () => {
  const user = await getUserByClerkId();

  const analyzedResult = await analyze("Good day");


  const journal = await prisma.journalEntry.create({
    data: {
      user: {
        connect: {
          id: user?.id,
        },
      },
      content: "Good day",
    },
  });


  if (!analyzedResult) {
    return NextResponse.json(
      { success: false, error: "Unable to create analysis" },
      { status: 500 }
    );
  }

  const entryAnalysis = await prisma.entryAnalysis.create({
    data: {
      entryId: journal.id,
      userId: user?.id!,
      ...analyzedResult,
    },
  });

  // update(["/journal"]);

  return NextResponse.json({ data: journal });
};
