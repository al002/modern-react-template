import { authApi, useAuthStore } from '@myapp/core';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ context, location }) => {
    if (context.auth.isAuthenticated) {
      return;
    }

    try {
      const response = await authApi.authInfo();
      if (response) {
        useAuthStore().setUser(response);
        useAuthStore().isAuthenticated = true;
        return;
      }
    } catch (error) {
      //  console.log('auth check error:',error)
    }

    throw redirect({
      to: '/login',
      replace: true,
      search: {
        redirect: location.href,
      },
    });
  },
});
