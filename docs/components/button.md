---
title: Button
description: Button组件的文档
lang: zh-CN
---

# Button 按钮
一个常用的操作按钮~

## 基础用法
使用`type`、`plain`、`round`和`circle`可以定义按钮的样式

:::preview 基础用法
demo-preview=../components/button.vue
:::

## Button Attributes

| 属性名        | 说明            | 类型                                                             | 默认值    |
|------------|---------------|----------------------------------------------------------------|--------|
| type       | 按钮类型          | `enum`-`'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | —      |
| size       | 按钮尺寸          | `enum`-`'small'\| 'large'`                                     | —      |
| plain      | 是否为朴素按钮       | boolean                                                        | false  |
| round      | 圆角            | boolean                                                        | false  |
| circle     | 圆形            | boolean                                                        | false  |
| disabled   | 禁用按钮          | boolean                                                        | false  |
| nativetype | 原生type属性      | `enum`-`'button'\| 'submit'\| 'reset'`                             | button |
| autofocus  | 原生autofocus属性 | boolean                                                        | false  |
| loading    | 加载中图标         | boolean                                                        | false  |
| icon       | 图标组件          | string                                                         | —      |
