"use client";

import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { signIn } from "next-auth/react";

export default function GitHubSignIn() {
  return (
    <Button
      onClick={() =>
        signIn("github", { callbackUrl: `${window.location.origin}` })
      }
      className="mt-6"
      variant="secondary"
    >
      Login with GitHub
      <GithubIcon className="size-4 ml-4" />
    </Button>
  );
}
