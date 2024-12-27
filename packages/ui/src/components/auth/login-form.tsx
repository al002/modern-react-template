import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Chrome } from 'lucide-react';
import type { BaseProps } from '@/types';
import { useUiTranslation } from '@/hooks/use-ui-translation';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useForm } from 'react-hook-form';
import { OAuthButton } from './oauth-button';

export type LoginFormProps = BaseProps & {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  onGoogleLogin?: () => Promise<void>;
};

type LoginFormValues = {
  email: string;
  password: string;
};

export function LoginForm({ className, onGoogleLogin, onSuccess, onError }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const { t } = useUiTranslation();
  const form = useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsLoading(true);
      // TODO: Implement login logic
      onSuccess?.();
    } catch (error) {
      onError?.(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setIsGoogleLoading(true);
      await onGoogleLogin?.();
      onSuccess?.();
    } catch (error) {
      onError?.(error as Error);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className={cn('grid gap-6', className)}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">{t('loginForm.email')}</Label>
          <Input
            id="email"
            type="email"
            {...form.register('email', { required: true })}
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">{t('loginForm.password')}</Label>
          <Input
            id="password"
            type="password"
            {...form.register('password', { required: true })}
            disabled={isLoading}
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {t('loginForm.signIn')}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            {t('loginForm.orContinueWith')}
          </span>
        </div>
      </div>

      <div className="grid gap-2">
        <OAuthButton
          customBtnIcon={
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{ display: 'block' }}
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              ></path>
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              ></path>
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              ></path>
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              ></path>
              <path fill="none" d="M0 0h48v48H0z"></path>
            </svg>
          }
          onClick={handleGoogleLogin}
          loading={isGoogleLoading}
          disabled={isGoogleLoading}
        >
          {t('loginForm.signInWithGoogle')}
        </OAuthButton>
      </div>
      {/* OAuth providers will go here */}
    </div>
  );
}
