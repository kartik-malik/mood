"use client";

import { useState } from "react";
import Hamburger from "./icons/Hamburger";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";
import { UserButton } from "@clerk/nextjs";

// TODO: make responsive
const links = [
  { href: "/", text: "Home" },
  { href: "/journal", text: "Journals" },
  { href: "/history", text: "History" },
];

const DesktopSideBar = () => {
  return (
    <aside className="hidden md:block w-[20%] bg-[#7BC9FF] z-[1]">
      {links.map(({ href, text }) => {
        return (
          <li key={text} className="text-black px-2 py-6 text-xl">
            <Link href={href}>{text}</Link>
          </li>
        );
      })}
    </aside>
  );
};

const LinkList = () => {
  const pathname = usePathname();

  return (
    <ul className="my-5">
      {links.map(({ href, text }) => {
        return (
          <li key={text} className="text-black px-2 py-3 text-xl list-none">
            <Link
              className={cx(
                {
                  "border-l-[#1C1678] border-l-2": pathname === href,
                },
                "px-1"
              )}
              href={href}
            >
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const BarContent = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen?: (x: boolean) => void;
}) => {
  return (
    <>
      {open && (
        <div className="fixed z-10 h-full w-[50%] sm:w-[20%] md top-0 left-0 bg-[#7BC9FF]">
          <div className="absolute right-3 top-3">
            <button
              onClick={() => setOpen?.(!open)}
              className="h-5 w-5 relative ml-auto"
            >
              <div className="w-full h-[2px] bg-black rotate-45 left-[10px] absolute"></div>
              <div className="w-full h-[2px] bg-black rotate-[-45deg] absolute left-[10px]"></div>
            </button>
          </div>
          <LinkList />
        </div>
      )}
    </>
  );
};

// TODO: set prop types
const SideBarMobile = ({ open, setOpen }) => {
  return (
    <>
      <BarContent open={open} setOpen={setOpen} />
    </>
  );
};

// TODO: header
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SideBarMobile open={open} setOpen={setOpen} />

      <TopHeader updateSideBar={setOpen} />
    </>
  );
};

// TODO: set props
const TopHeader = ({ updateSideBar }) => {
  return (
    <header className="w-full h-14 flex py-2 drop-shadow-sm bg-violet-700 border-black/10 px-6">
      <div className="w-full flex justify-between md:justify-end items-center px-3">
        <Hamburger onClick={() => updateSideBar(true)} width={18} className="block md:hidden" height={18} />
        <UserButton />
      </div>
    </header>
  );
};

export { Header, DesktopSideBar };
