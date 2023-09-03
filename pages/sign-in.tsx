import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/utils/cn";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/user-auth-form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/sign-up"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Sign Up
        </Link>
        <div className="relative hidden h-full flex-col justify-between bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <Link
            href="/"
            className="relative z-20 flex items-center text-lg font-medium"
          >
            Topological Materials
          </Link>

          <div className="relative z-10 inline-block">
            <img
              src="/crystal.jpg"
              alt="image"
              className="mx-auto lg:ml-auto mt-10"
              style={{ maxHeight: 400 }}
            />
          </div>

          <div className="relative z-20">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;The important thing is not to stop questioning. Curiosity
                has its own reason for existing.&rdquo;
              </p>
              <footer className="text-sm">— Albert Einstein</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
              <p className="text-sm text-muted-foreground text-left">
                Enter your email below to sign in
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </>
  );
}
