import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate } from '@tanstack/react-router';
import { useAuth } from '@/lib/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // TODO: Implement actual authentication logic
      // For now, just simulate a successful login
      setUser({ id: '1', email });
      toast({
        title: "Success",
        description: "You have successfully signed in.",
      });
      navigate({ to: '/' });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid credentials. Please try again.",
      });
    }
  };

  return (
    <div className="container mx-auto max-w-md p-6">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-gray-500">Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">Sign In</Button>
        </form>
        <div className="text-center space-y-2">
          <Link to="/auth/register" className="text-sm text-blue-600 hover:underline">
            Don't have an account? Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;