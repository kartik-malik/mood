"use client";

import { JournalEntry } from "@prisma/client";
import { revalidatePath, revalidateTag } from "next/cache";
import { ChangeEvent, useState } from "react";
import { update } from "~/utils/actions/update";
// TODO: add errors and loading state
const Editor = ({
  entry,
  // update,
}: {
  entry: JournalEntry | null;
}) => {
  const [value, setValue] = useState<string>(entry?.content ?? "");

  // const observaleRef = useRef(new Subject<string>());

  // useEffect(() => {
  //   const unsubScribe = observaleRef.current
  //     .pipe(
  //       // tap(setValue),
  //       tap((val) => setValue(val)),
  //       debounceTime(2000),
  //       tap((content) => {
  //         fetch(`/api/journal/${entry?.id}`, {
  //           method: "PATCH",
  //           body: JSON.stringify({ content }),
  //         });
  //       })
  //     )
  //     .subscribe();

  //   return () => {
  //     unsubScribe.unsubscribe();
  //   };
  // }, [entry?.id]);

  if (!entry) return null;

  const saveEntry = () => {
    fetch(`/api/journal/${entry?.id}`, {
      method: "PATCH",
      body: JSON.stringify({ content: value }),
    }).then(function () {
      update([`/journal/${entry.id}`]);
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    // observaleRef.current.next(e.target.value);
  };

  return (
    <div className="w-full h-full">
      <textarea
        value={value}
        onChange={handleInputChange}
        className="w-full h-[80%] p-8"
      />
      <div className="flex w-full justify-center">
        <button
          className="p-3 bg-blue-600 text-white rounded mr-10 mt-2 h-10"
          onClick={saveEntry}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export { Editor };
