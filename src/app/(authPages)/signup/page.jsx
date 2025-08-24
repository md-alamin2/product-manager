import React from "react";
import Link from "next/link";
import SignupForm from "./components/SignupForm";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center bg-gray-50 dark:bg-muted/30 px-4 py-10">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Create Account</CardTitle>
            <CardDescription>Sign up to get started</CardDescription>
          </CardHeader>
          
          <CardContent className="p-0">
            <SignupForm />
          </CardContent>
          
          <CardFooter className="flex flex-col">
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link 
                href="/login" 
                className="font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Login instead
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}