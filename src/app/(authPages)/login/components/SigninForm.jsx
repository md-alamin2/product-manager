"use client";

import React, { useState } from "react";
import { Loader2, Mail, Lock } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/toast";

export default function SigninForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { addToast } = useToast();

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/products",
        redirect: false,
      });
      if (response.ok) {
        router.push("/products");
        form.reset();
        setIsLoading(false);
        addToast({
          type: "success",
          title: "Success!",
          message: "User login successfully!"
        });
      } else {
        setError("Authentication failed");
        setIsLoading(false);
      }
    } catch (error) {
      setError("unauthorized");
      setIsLoading(false);
    }
  };
  return (
    <div>
      {error && (
        <div className="relative w-full rounded-lg border border-red-200 bg-red-50 p-4">
          <div className="text-sm text-red-800">{error}</div>
        </div>
      )}
      <form onSubmit={handleSignup} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium leading-none text-gray-700"
          >
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              name="email"
              type="email"
              placeholder="admin@example.com"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm pl-10 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium leading-none text-gray-700"
          >
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              name="password"
              type="password"
              placeholder="password"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm pl-10 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2 w-full bg-black text-white cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Sign In
        </button>
      </form>
    </div>
  );
}
