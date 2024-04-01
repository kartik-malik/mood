"use client";

import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createNewEntry } from "~/utils/api";

const NewEntryCard = ({update}) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleCreateEntry = async () => {
    setLoading(true);
    const journal = await createNewEntry();

    update(["/journal"]);

    router.push(`/journal/${journal?.id}`);

  };
  return (
    <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow w-full">
      {!loading ? (
        <div className="px-4 py-5 sm:p-6" onClick={handleCreateEntry}>
          <span className="text-3xl">New Entry</span>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export { NewEntryCard };
