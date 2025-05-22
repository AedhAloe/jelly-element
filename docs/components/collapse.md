---
title: Collapse
description: Collapse组件的文档
lang: zh-CN
---

# Collapse 折叠面板
一个可以折叠/展开内容区域的组件

## 基础用法
使用`Collapse`和`Item`组件可以创建可折叠的内容面板。通过`v-model`可以控制展开的面板，`accordion`属性可以设置为手风琴模式。

:::preview 基础用法
demo-preview=../components/collapse.vue
:::

## Collapse 属性
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| v-model | 当前展开的面板 | Array | — | [] |
| accordion | 是否使用手风琴模式 | boolean | — | false |

## Collapse 事件
| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当展开面板改变时触发 | (activeNames: array) |

## CollapseItem 属性
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 唯一标识符，必填 | string/number | — | — |
| title | 面板标题 | string | — | — |
| disabled | 是否禁用 | boolean | — | false |

## CollapseItem 插槽
| 插槽名 | 说明 |
| --- | --- |
| default | 面板内容 |
| title | 面板标题内容 |
