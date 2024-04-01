import { NextApiHandler } from "next";
import { NextResponse } from "next/server";
import { updateJournal } from "~/utils/actions/journal";
import { analyze } from "~/utils/ai";
import { prisma } from "~/utils/db";

const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const data = await request.json();

  const updatedJournal = await updateJournal(params.id, data.content);

  const analysis = await analyze(updatedJournal.content);

  await prisma.entryAnalysis.upsert({
    create:{
     ...analysis!,
     entryId: updatedJournal.id,
     userId: updatedJournal.userId,
    },
    update: analysis!,
    where:{
      entryId: updatedJournal.id,
    }
  })

  return NextResponse.json({ data: updatedJournal });
};

export { PATCH };
