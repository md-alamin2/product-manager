"use client";

import React, { useEffect, useState } from "react";
import { Loader2, Chrome } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useToast } from "@/components/ui/toast";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { fa } from "zod/v4/locales/index.cjs";

export default function SocialLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const session = useSession();
  const { addToast } = useToast();
  const callbackUrl = searchParams.get("callbackUrl") || "/products";

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError(""); // Clear any previous errors
    await signIn("google");
  };

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push(callbackUrl);
      setIsLoading(false);
      addToast({
        type: "success",
        title: "Success!",
        message: "User login successfully!"
      });
    } else if (session.status === "unauthenticated" && isLoading) {
      setError("Authentication failed");
      setIsLoading(false);
    }
  }, [session.data, session.status === "authenticated"]);

  return (
    <div>
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Button
        type="button"
        variant="outline"
        size="default"
        disabled={isLoading}
        onClick={handleGoogleLogin}
        className="w-full"
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Chrome className="mr-2 h-4 w-4" />
        )}
        Continue with Google
      </Button>
    </div>
  );
}
