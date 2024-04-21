import { NextResponse } from "next/server";
import { questionAndAnswer } from "~/utils/ai";
import { getUserByClerkId } from "~/utils/auth";
import { prisma } from "~/utils/db";


export const POST = async(request: Request)=>{

    const data = await request.json();

    const user = await getUserByClerkId();

    const entries = await prisma.journalEntry.findMany({
        where: {
            userId: user?.id!,
        },
        select:{
          content: true,
          createdAt: true,
          id: true,
        }
    })

    const answerOfQuestion = await questionAndAnswer(data.question, entries);

    return NextResponse.json({data: answerOfQuestion})

}