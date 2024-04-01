import { EntryAnalysis, JournalEntry, Prisma } from "@prisma/client";
import Link from "next/link";

const EntryCard = ({
  entry,
}: {
  entry: JournalEntry & { analysis?: EntryAnalysis | null };
}) => {
  return (
    <Link href={`/journal/${entry.id}`} className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow text-black">
      <div className="px-4 py-5 sm:px-6">{entry.createdAt.toDateString()}</div>
      <div className="px-4 py-5 sm:p-6">{entry?.analysis?.summary}</div>
      <div className="px-4 py-4 sm:px-6">{entry.analysis?.mood}</div>
    </Link>
  );
};

export { EntryCard };
