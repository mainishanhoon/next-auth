"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { signIn } from "next-auth/react";
import { toast } from "@/hooks/use-toast";

export default function SignInForm() {
  const [email, setEmail] = useState<null | string>(null);

  async function EmailSignIn() {
    const signInResult = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });

    if (!signInResult?.ok) {
      return toast({
        title: "Failed",
        description: "Something went wrong",
        variant: "destructive",
      });
    }

    return toast({
      title: "Check your Email",
      description: "A magic link has been sent to you",
    });
  }
  return (
    <form action={EmailSignIn}>
      <div className="flex flex-col gap-y-2">
        <Label>Email</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="name@example.com"
        />
      </div>
      <Button className="mt-4 w-full">Login with Email</Button>
    </form>
  );
}
