---
title: Input
description: Input组件的文档
lang: zh-CN
---

# Input 输入框
通过鼠标或键盘输入字符，是最基础的表单域的包装。

## 基础用法
基础的输入框用法。

:::preview 基础用法
demo-preview=../components/input.vue
:::

## 禁用状态
通过 `disabled` 属性指定是否禁用输入框。

:::preview 禁用状态
demo-preview=../components/input-disabled.vue
:::

## 可清空
使用 `clearable` 属性即可得到一个可清空的输入框。

:::preview 可清空
demo-preview=../components/input-clearable.vue
:::

## 密码框
使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框。

:::preview 密码框
demo-preview=../components/input-password.vue
:::

## 带图标的输入框
通过 `prefix` 和 `suffix` 插槽可以指定输入框前置和后置的内容。

:::preview 带图标的输入框
demo-preview=../components/input-icon.vue
:::

## 文本域
用于输入多行文本信息，通过将 `type` 属性的值指定为 textarea。

:::preview 文本域
demo-preview=../components/input-textarea.vue
:::

## Input Attributes

| 属性名         | 说明           | 类型                                                                 | 默认值  |
|--------------|--------------|--------------------------------------------------------------------|-------|
| type         | 类型           | `enum`-`'text' \| 'textarea'`                                     | text  |
| modelValue   | 绑定值          | `string \| number`                                                | —     |
| size         | 输入框尺寸        | `enum`-`'small' \| 'large'`                                       | —     |
| disabled     | 是否禁用         | boolean                                                           | false |
| readonly     | 是否只读         | boolean                                                           | false |
| clearable    | 是否可清空        | boolean                                                           | false |
| showPassword | 是否显示切换密码图标  | boolean                                                           | false |
| placeholder  | 输入框占位文本      | string                                                            | —     |
| autocomplete | 原生自动完成属性     | string                                                            | off   |
| autofocus    | 原生自动获取焦点属性   | boolean                                                           | false |
| form         | 原生表单属性       | string                                                            | —     |

## Input Events

| 事件名   | 说明                | 回调参数                |
|--------|-------------------|---------------------|
| input  | 在输入值改变时触发        | (value: string \| number) |
| change | 在值改变时触发           | (value: string \| number) |
| focus  | 在输入框获得焦点时触发      | (event: FocusEvent) |
| blur   | 在输入框失去焦点时触发      | (event: FocusEvent) |
| clear  | 在点击清空按钮时触发       | —                   |

## Input Slots

| 插槽名    | 说明           |
|---------|--------------|
| prefix  | 输入框头部内容     |
| suffix  | 输入框尾部内容     |
| prepend | 输入框前置内容     |
| append  | 输入框后置内容     |
``` 