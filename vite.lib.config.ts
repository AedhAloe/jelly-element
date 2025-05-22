import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import * as ts from 'typescript'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      include: ['src'],
      exclude: [
        // 排除测试相关文件
        'src/**/__tests__/**',
        'src/**/*.test.ts',
        'src/**/*.test.tsx',
        'src/**/*.spec.ts',
        'src/**/*.spec.tsx',
        // 排除示例和入口文件
        'src/App.vue',
        'src/main.ts'
      ],
      outDir: 'dist/types',
      tsconfigPath: './tsconfig.json'
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'JellyElement',
      fileName: (format) => `jelly-element.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
        sourcemap: true,
        assetFileNames: (assetInfo) => {
          return assetInfo.name === 'style.css' ? 'style.css' : '[name][extname]'
        }
      },
    },
    sourcemap: true,
    // 确保生成 commonjs 和 es 模块
    target: 'esnext',
    minify: 'terser',
  },
}) 