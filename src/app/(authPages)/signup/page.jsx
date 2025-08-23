import React from "react";
import Link from "next/link";
import SignupForm from "./components/SignupForm";

export default function SignupFormStandalone() {

  return (
    <div className="flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        {/* Card */}
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          {/* Card Header */}
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight text-center">
              Create Account
            </h3>
            <p className="text-sm text-gray-600 text-center">
              Sign up to get started
            </p>
          </div>

          {/* Card Content */}
          <SignupForm />

          {/* Card Footer */}
          <div className="flex items-center p-6 pt-0">
            <div className="text-center text-sm text-gray-500 w-full">
              Already have an account? <Link href="/login" className="font-bold">Login instead</Link>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
