/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router';

// Import Routes

import { Route as rootRoute } from './routes/__root';
import { Route as AuthenticatedImport } from './routes/_authenticated';
import { Route as AuthImport } from './routes/_auth';

// Create Virtual Routes

const AuthenticatedIndexLazyImport = createFileRoute('/_authenticated/')();
const AuthenticatedAboutLazyImport = createFileRoute('/_authenticated/about')();
const AuthRegisterLazyImport = createFileRoute('/_auth/register')();
const AuthLoginLazyImport = createFileRoute('/_auth/login')();

// Create/Update Routes

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any);

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any);

const AuthenticatedIndexLazyRoute = AuthenticatedIndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthenticatedRoute,
} as any).lazy(() => import('./routes/_authenticated/index.lazy').then((d) => d.Route));

const AuthenticatedAboutLazyRoute = AuthenticatedAboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => AuthenticatedRoute,
} as any).lazy(() => import('./routes/_authenticated/about.lazy').then((d) => d.Route));

const AuthRegisterLazyRoute = AuthRegisterLazyImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => AuthRoute,
} as any).lazy(() => import('./routes/_auth/register.lazy').then((d) => d.Route));

const AuthLoginLazyRoute = AuthLoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => AuthRoute,
} as any).lazy(() => import('./routes/_auth/login.lazy').then((d) => d.Route));

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_auth': {
      id: '/_auth';
      path: '';
      fullPath: '';
      preLoaderRoute: typeof AuthImport;
      parentRoute: typeof rootRoute;
    };
    '/_authenticated': {
      id: '/_authenticated';
      path: '';
      fullPath: '';
      preLoaderRoute: typeof AuthenticatedImport;
      parentRoute: typeof rootRoute;
    };
    '/_auth/login': {
      id: '/_auth/login';
      path: '/login';
      fullPath: '/login';
      preLoaderRoute: typeof AuthLoginLazyImport;
      parentRoute: typeof AuthImport;
    };
    '/_auth/register': {
      id: '/_auth/register';
      path: '/register';
      fullPath: '/register';
      preLoaderRoute: typeof AuthRegisterLazyImport;
      parentRoute: typeof AuthImport;
    };
    '/_authenticated/about': {
      id: '/_authenticated/about';
      path: '/about';
      fullPath: '/about';
      preLoaderRoute: typeof AuthenticatedAboutLazyImport;
      parentRoute: typeof AuthenticatedImport;
    };
    '/_authenticated/': {
      id: '/_authenticated/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof AuthenticatedIndexLazyImport;
      parentRoute: typeof AuthenticatedImport;
    };
  }
}

// Create and export the route tree

interface AuthRouteChildren {
  AuthLoginLazyRoute: typeof AuthLoginLazyRoute;
  AuthRegisterLazyRoute: typeof AuthRegisterLazyRoute;
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthLoginLazyRoute: AuthLoginLazyRoute,
  AuthRegisterLazyRoute: AuthRegisterLazyRoute,
};

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren);

interface AuthenticatedRouteChildren {
  AuthenticatedAboutLazyRoute: typeof AuthenticatedAboutLazyRoute;
  AuthenticatedIndexLazyRoute: typeof AuthenticatedIndexLazyRoute;
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedAboutLazyRoute: AuthenticatedAboutLazyRoute,
  AuthenticatedIndexLazyRoute: AuthenticatedIndexLazyRoute,
};

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren
);

export interface FileRoutesByFullPath {
  '': typeof AuthenticatedRouteWithChildren;
  '/login': typeof AuthLoginLazyRoute;
  '/register': typeof AuthRegisterLazyRoute;
  '/about': typeof AuthenticatedAboutLazyRoute;
  '/': typeof AuthenticatedIndexLazyRoute;
}

export interface FileRoutesByTo {
  '': typeof AuthRouteWithChildren;
  '/login': typeof AuthLoginLazyRoute;
  '/register': typeof AuthRegisterLazyRoute;
  '/about': typeof AuthenticatedAboutLazyRoute;
  '/': typeof AuthenticatedIndexLazyRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  '/_auth': typeof AuthRouteWithChildren;
  '/_authenticated': typeof AuthenticatedRouteWithChildren;
  '/_auth/login': typeof AuthLoginLazyRoute;
  '/_auth/register': typeof AuthRegisterLazyRoute;
  '/_authenticated/about': typeof AuthenticatedAboutLazyRoute;
  '/_authenticated/': typeof AuthenticatedIndexLazyRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: '' | '/login' | '/register' | '/about' | '/';
  fileRoutesByTo: FileRoutesByTo;
  to: '' | '/login' | '/register' | '/about' | '/';
  id:
    | '__root__'
    | '/_auth'
    | '/_authenticated'
    | '/_auth/login'
    | '/_auth/register'
    | '/_authenticated/about'
    | '/_authenticated/';
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  AuthRoute: typeof AuthRouteWithChildren;
  AuthenticatedRoute: typeof AuthenticatedRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
  AuthRoute: AuthRouteWithChildren,
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_auth",
        "/_authenticated"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/login",
        "/_auth/register"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/about",
        "/_authenticated/"
      ]
    },
    "/_auth/login": {
      "filePath": "_auth/login.lazy.tsx",
      "parent": "/_auth"
    },
    "/_auth/register": {
      "filePath": "_auth/register.lazy.tsx",
      "parent": "/_auth"
    },
    "/_authenticated/about": {
      "filePath": "_authenticated/about.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/": {
      "filePath": "_authenticated/index.lazy.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
