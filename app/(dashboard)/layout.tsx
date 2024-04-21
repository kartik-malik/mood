import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import { DesktopSideBar, NavBar, SideBarMobile, } from "~/components/SideBar";

// TODO: make responsive
const links = [
  { href: "/", text: "Home" },
  { href: "/journal", text: "Journals" },
  { href: "/history", text: "History" },
];

const DashboardLayout = ({ children }: PropsWithChildren) => {
  
  return (
    <div className="w-full h-full  text-black bg-[#8576FF]">
      <div className="flex h-svh bg-[#8576FF]">
        <div className="flex-1">
          <header className="w-full h-14 flex py-2 drop-shadow-sm bg-violet-700 border-black/10 px-6">
            <div className="w-full flex justify-between items-center">
              < SideBarMobile />
              <UserButton />
            </div>
          </header>
            <div className="flex h-full">
            <DesktopSideBar />
          <div className="h-full w-full">{children}</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
