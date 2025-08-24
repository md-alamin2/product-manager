"use client";

import React, { useState } from "react";
import { Loader2, Mail, Lock, User } from "lucide-react";
import { signupUser } from "@/app/actions/auth/signupUser";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { addToast } = useToast();
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Clear previous errors
    
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    
    // Password validation
    const minLength = 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    
    if (password.length < minLength) {
      setIsLoading(false);
      return setError("Password must be at least 6 characters long.");
    } else if (!hasUpperCase) {
      setIsLoading(false);
      return setError("Password must contain at least one uppercase letter.");
    } else if (!hasLowerCase) {
      setIsLoading(false);
      return setError("Password must contain at least one lowercase letter.");
    }
    
    try {
      const res = await signupUser({ name, email, password });
      
      if (res.insertedId) {
        router.push("/login");
        form.reset();
        setIsLoading(false);
        addToast({
          type: "success",
          title: "Success!",
          message: "User Account created successfully!",
        });
      } else {
        setError(res.error || "Signup failed");
        setIsLoading(false);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 pt-0 space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSignup} className="space-y-4">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              className="pl-10"
              required
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              className="pl-10"
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="password"
              className="pl-10"
              required
            />
          </div>
        </div>

        {/* Password Requirements */}
        <div className="text-xs text-muted-foreground space-y-1">
          <p>Password must contain:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>At least 6 characters</li>
            <li>One uppercase letter</li>
            <li>One lowercase letter</li>
          </ul>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Sign Up
        </Button>
      </form>
    </div>
  );
}