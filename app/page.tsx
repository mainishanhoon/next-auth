import { getServerSession } from 'next-auth';
import { authOptions } from './utils/auth';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import UserMenu from '@/components/UserMenu';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="text-center">
      <h1 className="mb-6 text-4xl font-bold text-primary">
        Welcome to Next-Auth
      </h1>
      <p className="mb-8 text-xl text-muted-foreground">
        This is a public route showcasing the authentication system.
      </p>
      {session ? (
        <div className="rounded-lg bg-card p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-primary">
            You're Logged In!
          </h2>
          <p className="mb-6 text-muted-foreground">
            Enjoy your authenticated experience.
          </p>
          <UserMenu user={session.user}/>
        </div>
      ) : (
        <div className="rounded-lg bg-card p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-primary">
            You're Not Logged In
          </h2>
          <p className="mb-6 text-muted-foreground">
            Sign in to access exclusive features.
          </p>
          <Button asChild>
            <Link href="/auth">Sign In</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
