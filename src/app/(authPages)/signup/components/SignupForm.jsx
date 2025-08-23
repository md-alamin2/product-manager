"use client"
import React, { useState } from "react";
import { Loader2, Mail, Lock, User } from "lucide-react";
import { signupUser } from "@/app/actions/auth/signupUser";

export default function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async(e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    await signupUser({ name, email, password });
    // setIsLoading(true);


    // Demo simulation - replace with real API call
    // setTimeout(() => {
    //   if (formData.name && formData.email && formData.password) {
    //     alert("Signup successful! You can now login.");
    //     setFormData({ name: "", email: "", password: "" });
    //   } else {
    //     setError("Please fill in all fields.");
    //   }
    //   setIsLoading(false);
    // }, 1500);
  };
  return (
    <div className="p-6 pt-0 space-y-4">
      {error && (
        <div className="relative w-full rounded-lg border border-red-200 bg-red-50 p-4">
          <div className="text-sm text-red-800">{error}</div>
        </div>
      )}

      {/* Credentials Form */}
      <form onSubmit={handleSignup} className="space-y-4">
        {/* Name */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium leading-none text-gray-700"
          >
            Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm pl-10 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
          </div>
        </div>

        {/* Email */}
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
              placeholder="john@example.com"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm pl-10 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
          </div>
        </div>

        {/* Password */}
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

        {/* Submit Button */}
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2 w-full bg-black text-white cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Sign Up
        </button>
      </form>
    </div>
  );
}
