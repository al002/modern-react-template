# 现代 React 项目模板

一个现代化的、可扩展的 React 项目模板，采用最佳实践、Monorepo 架构和完善的工具链。

[English](./README.md) 中文

## ✨ 特性

- 🎯 **类型安全**：全面的 TypeScript 支持
- 🔄 **热更新**：基于 Vite 的快速开发体验
- 📦 **优化构建**：高效的代码分割和 tree shaking
- 🎨 **现代样式**：基于 Tailwind 的实用优先 CSS
- 🚦 **类型安全的路由**: TanStack Router
- 🔧 **易维护**：使用 Prettier 和 Oxlint 保持一致的代码风格
- 📱 **响应式**：移动优先的设计方案
- 🌍 **国际化**：内置的多语言支持
- 🔐 **认证就绪**：预设的身份认证流程
- 📝 **表单处理**：使用 React Hook Form 和 Zod 的类型安全表单
- 🧩 **模块化**：结构良好的 Monorepo 架构



## 🛠️ 技术栈

- **框架：** React 19
- **构建工具：** Vite
- **包管理器：** PNPM
- **Monorepo工具：** Turborepo
- **样式：** Tailwind CSS + Lightning CSS
- **UI组件：** shadcn/ui
- **状态管理：** Zustand
- **路由：** TanStack Router
- **表单处理：** React Hook Form + Zod
- **国际化：** i18next
- **HTTP客户端：** Axios
- **开发工具：**
  - TypeScript
  - Oxlint
  - Prettier
  - Husky
  - Commitlint



## 🚀 快速开始

### 环境要求

- Node.js 18 或更高版本
- PNPM 9.15 或更高版本

### 安装

```bash
# 安装依赖
pnpm install
# 开发模式运行所有包
pnpm dev

# 运行特定应用
pnpm dev --filter @myapp/web
pnpm dev --filter @myapp/chrome-extension

# 构建项目
pnpm build

# 代码检查
pnpm lint
```



## 📁 项目结构

```text
# 详细目录结构说明

```text
.
├── apps/                           # 应用程序包
│   ├── chrome-extension/          # Chrome 扩展应用
│   │   ├── public/               # 静态资源
│   │   ├── src/                 # 源代码
│   │   │   ├── components/     # UI 组件
│   │   │   ├── hooks/         # 自定义 Hooks
│   │   │   ├── pages/        # 扩展页面（弹出窗口、选项页）
│   │   │   └── utils/        # 工具函数
│   │   ├── manifest.json     # 扩展配置文件
│   │   └── vite.config.ts    # Vite 配置
│   │
│   └── web/                   # 主要 Web 应用
│       ├── public/           # 静态资源
│       ├── src/             # 源代码
│       │   ├── components/ # UI 组件
│       │   ├── hooks/     # 自定义 Hooks
│       │   ├── pages/    # 页面组件
│       │   ├── routes/   # TanStack Router 路由
│       │   └── utils/    # 工具函数
│       └── vite.config.ts # Vite 配置
│
├── packages/                  # 共享包
│   ├── configs/             # 共享配置
│   │   ├── src/           # 配置工具
│   │   ├── tsconfig/     # TypeScript 配置
│   │   │   ├── base.json     # 基础 TS 配置
│   │   │   ├── app.json      # 应用专用配置
│   │   │   └── library.json  # 库配置
│   │   └── vite/          # Vite 配置
│   │
│   ├── core/              # 核心业务逻辑
│   │   ├── src/
│   │   │   ├── api/       # API 接口
│   │   │   ├── services/  # 业务服务
│   │   │   ├── store/     # 状态管理
│   │   │   └── types/     # 共享类型
│   │   └── vite.config.ts
│   │
│   ├── shared/           # 共享工具
│   │   ├── src/
│   │   │   ├── hooks/    # 共享 Hooks
│   │   │   ├── utils/    # 工具函数
│   │   │   └── types/    # 通用类型
│   │   └── vite.config.ts
│   │
│   └── ui/              # UI 组件库
│       ├── src/
│       │   ├── components/ # 可复用 UI 组件
│       │   ├── styles/    # 全局样式和主题
│       │   └── hooks/     # UI 相关 Hooks
│       └── vite.config.ts
│
├── .commitlintrc.json      # Commit 信息校验规则
├── .gitignore             # Git 忽略规则
├── .husky/                # Git 钩子
├── .lintstagedrc.json    # Lint-staged 配置
├── .prettierrc           # Prettier 配置
├── package.json         # 根目录配置文件
├── pnpm-workspace.yaml  # PNPM 工作空间配置
└── turbo.json          # Turborepo 配置
```
