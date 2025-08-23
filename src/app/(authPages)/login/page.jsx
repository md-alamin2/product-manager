import React from "react";
import SocialLogin from "./components/SocialLogin";
import SigninForm from "./components/SigninForm";
import Link from "next/link";

export default function login() {
  return (
    <div className="flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        {/* Card */}
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          {/* Card Header */}
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight text-center">
              Welcome back
            </h3>
            <p className="text-sm text-gray-600 text-center">
              Sign in to your account to continue
            </p>
          </div>

          {/* Card Content */}
          <div className="p-6 pt-0 space-y-4">

            {/* Google Sign In */}
            <SocialLogin  />

            {/* Separator */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Credentials Form */}
            <SigninForm  />
          </div>

          {/* Card Footer */}
          <div className="flex items-center p-6 pt-0">
            <div className="text-center text-sm text-gray-500 w-full">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-bold"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
