"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authAPI } from "@/lib/api";

interface AdminLoginProps {
  onLoginSuccess: (admin: any) => void;
}

export default function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError("يرجى إدخال البريد الإلكتروني");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await authAPI.login(email);
      onLoginSuccess(response.admin);
    } catch (error) {
      console.error("Login error:", error);
      setError(error instanceof Error ? error.message : "فشل في تسجيل الدخول");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-omran-light flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-omran-teal mb-2">
            لوحة تحكم الإدارة
          </h1>
          <p className="text-gray-600">
            تسجيل الدخول لإدارة محتوى مجلة عمران
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-right">
              البريد الإلكتروني للمدير
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="أدخل البريد الإلكتروني"
              className="text-right"
              dir="rtl"
              disabled={isLoading}
            />
            <p className="text-xs text-gray-500 mt-1 text-right">
              فقط المديرون المسجلون يمكنهم الوصول
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-center">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-omran-teal hover:bg-omran-teal/90 text-white py-3"
          >
            {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
          </Button>
        </form>

        <div className="mt-8 text-center text-xs text-gray-500">
          <p>المديرون المصرحون:</p>
          <p>chedibaaka.pro@gmail.com</p>
          <p>hussam@sauragency.com</p>
          <p>hussambaaka@gmail.com</p>
        </div>
      </div>
    </div>
  );
}