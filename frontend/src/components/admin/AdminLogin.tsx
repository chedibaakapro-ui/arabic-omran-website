"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authAPI } from "@/lib/api";
import { useTranslations } from 'next-intl';

interface AdminLoginProps {
  onLoginSuccess: (admin: any, token: string) => void;
}

export default function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const t = useTranslations('admin.login');
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError(t('errorRequired'));
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await authAPI.login(email);
      
      if (response.token && response.admin) {
        onLoginSuccess(response.admin, response.token);
      } else {
        setError(t('errorFailed'));
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(t('errorFailed'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-omran-light flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-omran-teal mb-2">{t('title')}</h1>
          <p className="text-gray-600">{t('description')}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-right block mb-2">
              {t('emailLabel')}
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('emailPlaceholder')}
              className="text-right"
              dir="rtl"
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-right">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-omran-teal hover:bg-omran-teal/90 text-white"
            disabled={isLoading}
          >
            {isLoading ? t('loggingIn') : t('loginButton')}
          </Button>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              {t('note')}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}