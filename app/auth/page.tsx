import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import GitHubSignIn from '@/components/GitHubSignIn';
import SignInForm from '@/components/SignInForm';

export default function AuthRoute() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Sign In</CardTitle>
        <CardDescription className="text-center">
          Access the private page with authentication
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <SignInForm />
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
          <GitHubSignIn />
        </div>
      </CardContent>
    </Card>
  );
}
