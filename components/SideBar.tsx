"use client";

import cx from "classnames";

import Link from "next/link";
import { useState } from "react";
import Hamburger from "./icons/Hamburger";
import { usePathname } from "next/navigation";

// TODO: make responsive
const links = [
  { href: "/", text: "Home" },
  { href: "/journal", text: "Journals" },
  { href: "/history", text: "History" },
];

const LinkList = () => {
  const pathname = usePathname();

  return (
    <ul className="my-5">
      {links.map(({ href, text }) => {
        return (
          <li key={text} className="text-black px-2 py-3 text-xl list-none">
            <Link
              className={cx({
                "border-l-[#1C1678] border-l-2": pathname === href,
              })}
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

const DesktopSideBar = () => {
  return (
    <aside className="hidden md:visible w-[20%] bg-[#7BC9FF]">
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
        <aside className="fixed z-10 min-h-[100vh] h-full w-[50%] sm:w-[40%] md top-0 left-0 bg-[#7BC9FF]">
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
        </aside>
      )}
    </>
  );
};

const SideBarMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Hamburger onClick={() => setOpen(true)} width={18} height={18} />
      <BarContent open={open} setOpen={setOpen} />
    </>
  );
};

export { LinkList, BarContent, DesktopSideBar, SideBarMobile };
