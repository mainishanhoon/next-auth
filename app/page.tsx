import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="p-10">
      <h1>Hello from the index page, this is a public route</h1>
      {session ? (
        <div>
          <h1>You are logged in</h1>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <h1>You are not logged in</h1>
          <Button asChild>
            <Link href="/auth">LogIn</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
