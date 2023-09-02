import React from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  return (
    <nav className="border-b flex flex-col sm:flex-row items-start sm:items-center sm:pr-10">
      <div className="py-3 px-8 flex flex-1 items-center">
        <Link href="/" className="mr-5 flex items-center" passHref>
          <p className={`ml-2 mr-4 text-lg font-semibold`}>
            Topological Materials
          </p>
        </Link>
        <Link
          href="/"
          className={`mr-5 text-sm ${pathname !== "/" && "opacity-50"}`}
          passHref
        >
          <p>Home</p>
        </Link>
        <Link
          href="/materials-explorer"
          className={`mr-5 text-sm ${
            pathname !== "/materials-explorer" && "opacity-60"
          }`}
          passHref
        >
          <p>Materials Explorer</p>
        </Link>
      </div>
      <div
        className="flex sm:items-center pl-8 pb-3 sm:p-0
      "
      >
        <ModeToggle />
      </div>
    </nav>
  );
};
