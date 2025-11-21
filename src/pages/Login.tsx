import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Sparkles, GraduationCap, BookOpen, Users } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<"student" | "teacher" | "society" | null>(null);

  const handleLogin = (role: string) => {
    // Frontend only - navigate to dashboard
    navigate(`/dashboard/${role}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 space-y-6 border-2">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-10 w-10 text-primary" />
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FeedbackFlow
            </span>
          </div>
          <h1 className="text-2xl font-bold">Welcome Back!</h1>
          <p className="text-muted-foreground">Choose your role to continue</p>
        </div>

        {!selectedRole ? (
          <div className="grid gap-4">
            <Button
              onClick={() => setSelectedRole("student")}
              variant="outline"
              className="h-24 flex-col gap-2 border-2 hover:border-primary hover:bg-primary/5"
            >
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-lg font-semibold">Student</span>
            </Button>

            <Button
              onClick={() => setSelectedRole("teacher")}
              variant="outline"
              className="h-24 flex-col gap-2 border-2 hover:border-accent hover:bg-accent/5"
            >
              <BookOpen className="h-8 w-8 text-accent" />
              <span className="text-lg font-semibold">Teacher</span>
            </Button>

            <Button
              onClick={() => setSelectedRole("society")}
              variant="outline"
              className="h-24 flex-col gap-2 border-2 hover:border-secondary hover:bg-secondary/5"
            >
              <Users className="h-8 w-8 text-secondary" />
              <span className="text-lg font-semibold">Society / Event Head</span>
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <Button
              onClick={() => setSelectedRole(null)}
              variant="ghost"
              className="w-full"
            >
              ← Back to role selection
            </Button>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <Button onClick={() => handleLogin(selectedRole)} className="w-full font-semibold">
                  Login as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
                </Button>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input id="signup-email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input id="signup-password" type="password" placeholder="••••••••" />
                </div>
                <Button onClick={() => handleLogin(selectedRole)} className="w-full font-semibold">
                  Create Account
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Login;
