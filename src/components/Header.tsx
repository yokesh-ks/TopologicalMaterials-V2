import React from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useRouter } from "next/router";
import { UserNav } from "./user-nav";
import { useSession } from "next-auth/react";

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data } = useSession();
  console.log({ data });
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
        <Link
          href="/contact"
          className={`mr-5 text-sm ${pathname !== "/contact" && "opacity-60"}`}
          passHref
        >
          <p>Contact</p>
        </Link>
      </div>
      <div
        className="flex sm:items-center pl-8 pb-3 sm:p-0 gap-4
      "
      >
        <ModeToggle />
        {data?.user ? (
          <UserNav user={data?.user} />
        ) : (
          <Button onClick={() => router.push("/sign-in")}>Sign in</Button>
        )}
      </div>
    </nav>
  );
};
