import { Prisma,EntryAnalysis } from '@prisma/client'
import HistoryChart from '~/components/HistoryChart'
// import HistoryChart from '~/components/HistoryChart'
import { getUserByClerkId } from '~/utils/auth'
import { prisma } from '~/utils/db'

const getData = async () => {
  const user = await getUserByClerkId()

  const analyses = await prisma.entryAnalysis.findMany({
    where: {
      userId: user?.id,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })
  const total = analyses.reduce((acc: number, curr: EntryAnalysis) => {
    return acc + curr.sentimentScore
  }, 0)

  const average = total / analyses.length
  return { analyses, average }
}

const HistoryPage = async () => {
  const { analyses, average } = await getData()
  return (
    <div className="h-full  px-6 py-8">
      <div>
        <h1 className="text-2xl mb-4">{`Avg. Sentiment: ${average}`}</h1>
      </div>
      <div className="h-4/5 w-full z-0">
        <HistoryChart data={analyses} />
      </div>
    </div>
  )
}

export default HistoryPage