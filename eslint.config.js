import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


/** @type {import('eslint').Linter.Config[]} */
export default [
  ...avueConfig,// AVUE 的 TypeScript 配置
   // Vue 3 的 ESLint 配置
   {
    plugins: {
      vue: vuePlugin,
    },
    rules: {
      ...vuePlugin.configs["vue3-essential"].rules,
    },
  },
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: globals.browser }},
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
  ...tseslint.configs.recommended,
  {
    rules:{"semi":2,
    "extends":"eslint:recommended",
  }}
];