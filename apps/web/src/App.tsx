import { StrictMode } from 'react';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';
import { useAuthStore } from '@myapp/core';

const router = createRouter({
  routeTree,
  context: undefined!,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const App = () => {
  const auth = useAuthStore();

  return (
    <StrictMode>
      <RouterProvider
        router={router}
        context={{
          auth,
        }}
      />
    </StrictMode>
  );
};
