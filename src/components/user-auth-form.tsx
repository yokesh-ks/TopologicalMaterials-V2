"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { cn } from "@/utils/cn";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Icon } from "@/icon";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("from") || "/";

  console.log({ callbackUrl });

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    // Typecast event.target to HTMLFormElement
    const formElement = event.target as HTMLFormElement;

    const signInResult = await signIn("email", {
      email: formElement?.email?.value.toLowerCase(),
      redirect: false,
      callbackUrl: callbackUrl,
    });
    console.log({ signInResult });

    setIsLoading(false);
    if (!signInResult?.ok) {
      console.log("Error");
    } else {
      console.log("Success");
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icon name="Spinner" className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={() => {
          signIn("google", {
            callbackUrl,
          });
        }}
      >
        <Icon name="Google" className="mr-2 h-4 w-4" /> Google
      </Button>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={() => {
          signIn("github", {
            callbackUrl,
          });
        }}
      >
        <Icon name="Github" className="mr-2 h-4 w-4" /> Github
      </Button>
    </div>
  );
}
