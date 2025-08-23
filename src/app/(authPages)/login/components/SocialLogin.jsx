"use client"
import React, { useState } from "react";
import { Loader2, Mail, Lock, Chrome, AwardIcon } from "lucide-react";

export default function SocialLogin() {
      const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleGoogleLogin = async() => {
    setIsLoading(true);

    // Demo simulation - replace with real Google login
    setTimeout(() => {
      alert("Google login would be initiated here!");
      setIsLoading(false);
    }, 1000);
  };
  return (
    <div>
      <button
        type="button"
        disabled={isLoading}
        onClick={handleGoogleLogin}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2 w-full border border-gray-300 hover:bg-gray-50 hover:text-gray-900"
      >
        <Chrome className="mr-2 h-4 w-4" />
        Continue with Google
      </button>
    </div>
  );
}
