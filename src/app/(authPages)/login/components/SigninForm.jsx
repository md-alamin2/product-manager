"use client";

import React, { useState } from "react";
import { Loader2, Mail, Lock } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function SigninForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addToast } = useToast();

  const handleSignin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Clear previous errors
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const callbackUrl = searchParams.get("callbackUrl") || "/products";
    
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      
      if (response?.ok) {
        router.push(callbackUrl);
        form.reset();
        setIsLoading(false);
        addToast({
          type: "success",
          title: "Success!",
          message: "User login successfully!"
        });
      } else {
        setError("Invalid email or password");
        setIsLoading(false);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div>
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <form onSubmit={handleSignin} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="admin@example.com"
              className="pl-10"
              required
            />
          </div>
        </div>

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

        <Button
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Sign In
        </Button>
      </form>
    </div>
  );
}