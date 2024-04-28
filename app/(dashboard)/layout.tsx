import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import {
  DesktopSideBar,
  Header,
  NavBar,
  SideBarMobile,
} from "~/components/Header";

// TODO: make responsive
const links = [
  { href: "/", text: "Home" },
  { href: "/journal", text: "Journals" },
  { href: "/history", text: "History" },
];

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-full text-black bg-[#8576FF]">
      <Header />
      <div className="flex h-full bg-[#8576FF]">
        <DesktopSideBar />
        <div className="flex flex-1 min-h-full mb-10">
            <div className="h-full w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
