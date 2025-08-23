"use client";
import React, { useEffect, useState } from "react";
import { Loader2, Mail, Lock, Chrome, AwardIcon } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useToast } from "@/components/ui/toast";
import { useRouter, useSearchParams } from "next/navigation";

export default function SocialLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
    const searchParams = useSearchParams();
    const session = useSession();
  const { addToast } = useToast();
  const callbackUrl = searchParams.get("callbackUrl") || "/products";

  const handleGoogleLogin = async () => {
     signIn("google");
  };

  useEffect(()=>{
    if (session.status === "authenticated") {
        router.push(callbackUrl);
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
  }, [session.status])
  return (
    <div>
      <button
        type="button"
        disabled={isLoading}
        onClick={handleGoogleLogin}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2 w-full border border-gray-300 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
      >
        <Chrome className="mr-2 h-4 w-4" />
        Continue with Google
      </button>
    </div>
  );
}
