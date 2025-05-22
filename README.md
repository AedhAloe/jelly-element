# Jelly-Element

Jelly-Element 是一个基于 **Vue3 + TypeScript** 的组件库，灵感来源于 Element Plus，致力于为开发者提供简洁易用、高度可定制的前端组件。项目采用 Vite 作为构建工具，配合 Vitest 进行单元测试，并通过 VitePress 构建交互式文档。

## ✨ 特性

- **Vue3 + TypeScript**：现代化技术栈，类型安全，易于维护
- **丰富组件**：已实现 Button、Dropdown、Message、Input、Switch、Collapse、Tooltip、Icon 等常用组件
- **高质量文档**：基于 VitePress，支持在线预览与代码复制
- **单元测试**：使用 Vitest，保障组件稳定性
- **灵活样式**：CSS 变量与自定义样式，易于主题扩展

## 📦 安装

```bash
npm install jelly-element
# 或
yarn add jelly-element
```

## 🔨 使用

在你的 Vue3 项目中引入并注册组件：

```ts
import { JellyButton, JellyDropdown } from 'jelly-element'
import 'jelly-element/dist/index.css'

export default {
  components: {
    JellyButton,
    JellyDropdown,
    // ...其他组件
  }
}
```

## 🗂️ 目录结构

```
├── src/                # 组件源码
│   ├── components/     # 具体组件实现
│   ├── hooks/          # 业务相关 hooks
│   ├── styles/         # 样式与变量
│   └── main.ts         # 入口文件
├── docs/               # 文档与示例
├── dist/               # 构建产物
├── tests/              # 单元测试
├── package.json
└── README.md
```

## 🛠️ 本地开发

```bash
# 安装依赖
npm install

# 启动开发环境
npm run dev

# 运行单元测试
npm run test

# 构建生产包
npm run build

# 代码格式检查与修复
npm run lint
```

## 📖 文档

本项目文档基于 [VitePress](https://vitepress.dev/)，支持组件预览与代码复制。

```bash
# 启动文档本地开发
npm run docs:dev

# 构建文档
npm run docs:build
```

访问 `docs/` 目录下的文档内容，或部署到静态服务器进行预览。

## 🤝 贡献

欢迎提交 Issue 或 Pull Request 参与贡献！  
如有建议或发现问题，请在 [GitHub Issues](https://github.com/AedhAloe/jelly-element/issues) 反馈。