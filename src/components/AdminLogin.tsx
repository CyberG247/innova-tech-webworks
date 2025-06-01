
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, User } from "lucide-react";

interface AdminLoginProps {
  onLogin: (success: boolean) => void;
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  // Demo admin credentials
  const adminCredentials = {
    username: "admin",
    password: "admin123"
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (credentials.username === adminCredentials.username && 
        credentials.password === adminCredentials.password) {
      onLogin(true);
      setError("");
    } else {
      setError("Invalid credentials");
      onLogin(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-innovatech-navy-dark flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center">
            <Lock className="h-6 w-6 mr-2 text-innovatech-red" />
            Admin Panel
          </CardTitle>
          <CardDescription>
            Enter your credentials to access the admin panel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter username"
                  className="pl-10"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  className="pl-10"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  required
                />
              </div>
            </div>
            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
            <Button type="submit" className="w-full bg-innovatech-red hover:bg-innovatech-red-dark">
              Login
            </Button>
          </form>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-sm mb-2">Demo Credentials:</h4>
            <p className="text-sm text-gray-600">Username: <code className="bg-gray-200 px-1 rounded">admin</code></p>
            <p className="text-sm text-gray-600">Password: <code className="bg-gray-200 px-1 rounded">admin123</code></p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
