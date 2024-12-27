import { useState } from 'react';
import { authApi, useAuthStore } from '@myapp/core';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { LoginForm } from '@myapp/ui';

export const Route = createLazyFileRoute('/_auth/login')({
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const authStore = useAuthStore();

  const handleLoginSuccess = () => {
    authStore.isAuthenticated = true;
    navigate({ to: '/' });
  };

  const handleLoginError = (error: Error) => {
    setError(error.message);
  };

  const handleGoogleLogin = async () => {
    try {
      // TODO: Impl Google Login Logic here
      console.log('google login');
      handleLoginSuccess();
    } catch (error) {
      if (error instanceof Error) {
        handleLoginError(error);
      }
    }
  };

  const handleEmailLogin = async (email: string, password: string) => {
    try {
      const response = await authApi.login({ email, password });
      if (response) {
        handleLoginSuccess();
      }
    } catch (error: any) {
      if (error && error.message) {
        handleLoginError(error);
      } else {
        handleLoginError(new Error('Failed to login. Please try again.'));
      }
    }
  };

  return (
    <div className="flex min-h-screen justify-center pt-16">
      <div className="w-[480px] bg-card px-12 py-10">
        <div className="mb-8 h-24">
          <div className="h-full w-full bg-gray-200 flex justify-center items-center text-gray-500">
            LOGO
          </div>
        </div>
        <LoginForm
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
          onGoogleLogin={handleGoogleLogin}
          className="space-y-4"
        />
        {error && <p className="mt-4 text-sm text-destructive text-center">{error}</p>}
      </div>
    </div>
  );
}
