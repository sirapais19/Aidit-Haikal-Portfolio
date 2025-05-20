
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { AlertCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { toast } = useToast();

  // Validate email format
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors = { email: '', password: '' };
    let isValid = true;

    // Validate email
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    // Validate password
    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // Since this is just a prototype, we'll simulate a successful login
      localStorage.setItem('isLoggedIn', 'true');
      toast({
        title: "Login Successful",
        description: "Welcome to the admin console.",
      });
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-white/10 bg-white/5 backdrop-blur-lg shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-white text-center">Admin Login</CardTitle>
          <CardDescription className="text-gray-400 text-center">
            Enter your credentials to access the dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-300">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`bg-white/10 border-white/20 text-white ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && (
                <div className="text-red-400 text-xs flex items-center gap-1 mt-1">
                  <AlertCircle className="h-3 w-3" /> {errors.email}
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-gray-300">Password</label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`bg-white/10 border-white/20 text-white ${errors.password ? 'border-red-500' : ''}`}
              />
              {errors.password && (
                <div className="text-red-400 text-xs flex items-center gap-1 mt-1">
                  <AlertCircle className="h-3 w-3" /> {errors.password}
                </div>
              )}
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple to-cyan hover:opacity-90 text-white font-medium"
            >
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-white/10 pt-4">
          <p className="text-sm text-gray-400">
            This is a prototype. Use any credentials.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
