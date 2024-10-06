'use client';

import { Button } from '@/components/ui/button';
import { GithubIcon } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function GitHubSignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    await signIn('github', { callbackUrl: `${window.location.origin}` });
    setIsLoading(false);
  };

  return (
    <Button
      onClick={handleSignIn}
      className="w-full"
      variant="outline"
      disabled={isLoading}
    >
      {isLoading ? (
        'Signing in...'
      ) : (
        <>
          <GithubIcon className="mr-2 h-4 w-4" />
          Sign in with GitHub
        </>
      )}
    </Button>
  );
}
