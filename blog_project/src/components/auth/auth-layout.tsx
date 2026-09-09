"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShieldCheck, Sparkles } from "lucide-react";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

const AuthLayout = () => {
  return (
    <div className="flex min-h-0 flex-1 items-center justify-center bg-white p-4 text-black">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-black/10 shadow-2xl lg:h-full lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden lg:flex bg-black text-white p-12 flex-col justify-between relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-40 -right-40 h-[450px] w-[450px] rounded-full border border-white/10" />

          <div className="absolute -bottom-52 -left-52 h-[600px] w-[600px] rounded-full border border-white/10" />

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black font-bold">
                A
              </div>

              <span className="text-xl font-semibold">Acme</span>
            </div>
          </div>

          <div className="relative z-10 max-w-md">
            <div className="mb-5 flex items-center gap-2 text-sm text-white/60">
              <Sparkles className="h-4 w-4" />
              <span>Everything starts here</span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight leading-tight">
              Welcome to a
              <br />
              better way to
              <br />
              <span className="text-white/40">get things done.</span>
            </h1>

            <p className="mt-6 text-white/50 leading-relaxed">
              Join thousands of people building, creating and managing their
              work with a simple and powerful platform.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-white/60">
              <ShieldCheck className="h-5 w-5" />
              <span>Secure and reliable authentication</span>
            </div>
          </div>

          <div className="relative z-10 text-xs text-white/30">
            © 2026 Acme Inc. All rights reserved.
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Get started</h2>

              <p className="mt-2 text-sm text-black/50">
                Login to your account or create a new one.
              </p>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid h-12 w-full grid-cols-2 rounded-xl bg-black/5 p-1">
                <TabsTrigger
                  value="login"
                  className="
                    rounded-lg
                    data-[state=active]:bg-black
                    data-[state=active]:text-white
                  "
                >
                  Login
                </TabsTrigger>

                <TabsTrigger
                  value="register"
                  className="
                    rounded-lg
                    data-[state=active]:bg-black
                    data-[state=active]:text-white
                  "
                >
                  Register
                </TabsTrigger>
              </TabsList>

              {/* Existing Login Page */}
              <TabsContent value="login" className="mt-8">
                <LoginForm />
              </TabsContent>

              {/* Existing Register Page */}
              <TabsContent value="register" className="mt-8">
                <RegisterForm />
              </TabsContent>
            </Tabs>

            <p className="mt-8 text-center text-xs text-black/40">
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
