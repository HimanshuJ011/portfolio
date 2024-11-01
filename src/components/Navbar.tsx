"use client";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import ThemeSwitch from "./ThemeSwitch";
import { NavLinks } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 w-full md:max-w-sm mx-auto max-w-[350px] py-2 bg-slate-100 dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
      <div className="flex justify-between px-6 items-center">
        {/* Home Icon */}
        <Link
          href="/"
          aria-label="Home"
          className="text-slate-800 dark:text-slate-100"
        >
          <AiFillHome size={24} />
        </Link>

        {/* Dynamic Nav Links */}
        <div className="flex space-x-8">
          {NavLinks.map(({ href, title, Logo }) => (
            <Link
              key={title}
              href={href}
              target="_blank"
              aria-label={title}
              className="text-slate-800 dark:text-slate-100 transition-colors hover:text-slate-900 dark:hover:text-slate-300"
            >
              <Logo size={24} />
            </Link>
          ))}
        </div>

        {/* ThemeSwitch */}
        <ThemeSwitch />
      </div>
    </nav>
  );
}
