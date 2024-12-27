# Modern React Project Template

A modern, scalable React project template with best practices, monorepo structure, and robust tooling.

English [中文](./README_zh.md)

## ✨ Key Features

- 🎯 **Type Safety**: Full TypeScript support across all packages
- 🔄 **Hot Module Replacement**: Fast development with Vite
- 📦 **Optimized Builds**: Efficient chunk splitting and tree shaking
- 🎨 **Modern Styling**: Utility-first CSS with Tailwind
- 🚦 **Type-safe routing**: TanStack Router
- 🔧 **Maintainable**: Consistent code style with Prettier and Oxlint
- 📱 **Responsive**: Mobile-first design approach
- 🌍 **i18n Ready**: Built-in internationalization support
- 🔐 **Auth Ready**: Authentication flow implementation
- 📝 **Form Handling**: Type-safe forms with React Hook Form and Zod
- 🧩 **Modular**: Well-organized monorepo structure


## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Package Manager:** PNPM
- **Monorepo Tool:** Turborepo
- **Styling:** Tailwind CSS + Lightning CSS
- **UI Components:** shadcn/ui
- **State Management:** Zustand
- **Router:** TanStack Router
- **Form Handling:** React Hook Form + Zod
- **Internationalization:** i18next
- **HTTP Client:** Axios
- **Development Tools:**
  - TypeScript
  - Oxlint
  - Prettier 
  - Husky
  - Commitlint



## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- PNPM 9.15 or higher

### Installation

```bash
# Install dependencies
pnpm install

# Run all packages in development mode
pnpm dev

# Run specific app
pnpm dev --filter @myapp/web
pnpm dev --filter @myapp/chrome-extension

# Build packages
pnpm build

# Lint code
pnpm lint
```


# Project Structure Details

## Directory Structure

```text
.
├── apps/                           # Application packages
│   ├── chrome-extension/          # Chrome Extension App
│   │   ├── public/               # Static assets
│   │   ├── src/                 # Source code
│   │   │   ├── components/     # UI Components
│   │   │   ├── hooks/         # Custom hooks
│   │   │   ├── pages/        # Extension pages (popup, options)
│   │   │   └── utils/        # Utility functions
│   │   ├── manifest.json     # Extension manifest
│   │   └── vite.config.ts    # Vite configuration
│   │
│   └── web/                   # Main Web Application
│       ├── public/           # Static assets
│       ├── src/             # Source code
│       │   ├── components/ # UI Components
│       │   ├── hooks/     # Custom hooks
│       │   ├── pages/    # Page components
│       │   ├── routes/   # TanStack Router routes
│       │   └── utils/    # Utility functions
│       └── vite.config.ts # Vite configuration
│
├── packages/                  # Shared packages
│   ├── configs/             # Shared configurations
│   │   ├── src/           # Configuration utilities
│   │   ├── tsconfig/     # TypeScript configs
│   │   │   ├── base.json     # Base TS config
│   │   │   ├── app.json      # App-specific config
│   │   │   └── library.json  # Library config
│   │   └── vite/        # Vite configurations
│   │
│   ├── core/           # Core business logic
│   │   ├── src/
│   │   │   ├── api/       # API interfaces
│   │   │   ├── services/  # Business services
│   │   │   ├── store/     # State management
│   │   │   └── types/     # Shared types
│   │   └── vite.config.ts
│   │
│   ├── shared/        # Shared utilities
│   │   ├── src/
│   │   │   ├── hooks/    # Shared hooks
│   │   │   ├── utils/    # Utility functions
│   │   │   └── types/    # Common types
│   │   └── vite.config.ts
│   │
│   └── ui/           # UI Component Library
│       ├── src/
│       │   ├── components/ # Reusable UI components
│       │   ├── styles/    # Global styles & themes
│       │   └── hooks/     # UI-related hooks
│       └── vite.config.ts
│
├── .commitlintrc.json      # Commit message linting rules
├── .gitignore             # Git ignore patterns
├── .husky/                # Git hooks
├── .lintstagedrc.json    # Lint-staged configuration
├── .prettierrc           # Prettier configuration
├── package.json         # Root package.json
├── pnpm-workspace.yaml  # PNPM workspace configuration
└── turbo.json          # Turborepo configuration
