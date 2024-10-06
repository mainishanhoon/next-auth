import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GitHubSignIn from "@/components/GitHubSignIn";
import SignInForm from "@/components/SignInForm";

export default function AuthRoute() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            To access the private page you have to be authenticated
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <SignInForm />
            <GitHubSignIn />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
