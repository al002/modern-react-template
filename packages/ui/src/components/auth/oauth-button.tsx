import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export interface OAuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon;
  customBtnIcon?: ReactNode;
  loading?: boolean;
}

export const OAuthButton = forwardRef<HTMLButtonElement, OAuthButtonProps>(
  ({ className, children, customBtnIcon, icon: Icon, loading, ...props }, ref) => {
    return (
      <Button
        variant="outline"
        type="button"
        disabled={loading}
        className={cn('w-full', className)}
        ref={ref}
        {...props}
      >
        {Icon ? <Icon className="mr-2 h-4 w-4" /> : null}
        {customBtnIcon ? customBtnIcon : null}
        {children}
      </Button>
    );
  }
);

OAuthButton.displayName = 'OAuthButton';
