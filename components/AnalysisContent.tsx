import { JournalEntry, EntryAnalysis } from "@prisma/client";

type AnalysisData = [
  { name: "Summary"; value?: EntryAnalysis["summary"] },
  { name: "Subject"; value?: EntryAnalysis["subject"] },
  { name: "Mood"; value?: EntryAnalysis["mood"] },
  { name: "Score"; value?: EntryAnalysis["sentimentScore"] }
];



const JournalAnalysisContent = ({
  analysisData,
  bgColor,
}: {
  bgColor?: string;
  analysisData: AnalysisData;
}) => {
  const [summary, subject, ...rest] = analysisData;
  return (
    <div className="md:border-l md:border-black/10 text-black">
      <div
        className={`px-6 py-10 my-3 md:my-2 rounded-lg`}
        style={{ background: bgColor }}
      >
        <h2 className="text-2xl">Analysis</h2>
      </div>
      <div>
        <ul>
          {[summary, subject].map((data) => (
            <li
              key={data.name}
              className={`border-2 bg-violet-500/25 md:bg-teal-400 rounded-md  border-violet-500  md:border-b md:border-black/10 px-2 flex items-center justify-between mb-3`}
            >
              <span className="text-sm font-semibold">{data.name}</span>
              <span>{data.value}</span>
            </li>
          ))}
        </ul>
        <ul className="mt-3 flex gap-5">
          {rest.map((data) => {
            return (
              <li
                key={data.name}
                className={`border-2 inline-flex gap-2 bg-violet-500/25 md:bg-teal-400 rounded-md  border-violet-500  md:border-b md:border-black/10 px-2 items-center justify-between mb-3`}
              >
                <span className="text-lg font-semibold">{data.name}</span>
                <span>{data.value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default JournalAnalysisContent;
