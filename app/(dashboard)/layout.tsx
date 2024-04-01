import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import type { PropsWithChildren } from "react";

// TODO: make responsive
const links = [
  { href: "/", text: "Home" },
  { href: "/journal", text: "Journals" },
];

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full min-h-screen text-black">
      <div className="flex h-svh bg-slate-300">
        <aside className="w-[20%] bg-slate-300">
          {links.map(({ href, text }) => {
            return (
              <li key={text} className="text-black px-2 py-6 text-xl">
                <Link href={href}>{text}</Link>
              </li>
            );
          })}
        </aside>
        <div className="bg-white flex-1">
          <header className="w-full h-14 flex py-2 drop-shadow-sm bg-violet-700 border-black/10 px-6">
            <div className="w-full h-full flex justify-end items-center">
              <UserButton />
            </div>
          </header>
          <div className="h-[90%]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
