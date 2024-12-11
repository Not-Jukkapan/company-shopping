import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate } from '@tanstack/react-router';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // TODO: Implement actual registration logic
      toast({
        title: "Success",
        description: "Registration successful. Please sign in.",
      });
      navigate({ to: '/auth/signin' });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Registration failed. Please try again.",
      });
    }
  };

  return (
    <div className="container mx-auto max-w-md p-6">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-gray-500">Enter your details to create your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <Button type="submit" className="w-full">Register</Button>
        </form>
        <div className="text-center">
          <Link to="/auth/signin" className="text-sm text-blue-600 hover:underline">
            Already have an account? Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;