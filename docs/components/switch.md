---
title: Switch
description: Switch开关组件的文档
lang: zh-CN
---

# Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法
绑定 `v-model` 到一个 `Boolean` 类型的变量。可以使用 `disabled` 属性来控制是否禁用开关。

:::preview 基础用法
demo-preview=../components/switch.vue
:::

## 文字描述
使用 `active-text` 和 `inactive-text` 属性来设置开关的文字描述。文字会根据开关的状态显示在内部。

## 不同尺寸
使用 `size` 属性设置开关的大小，可选值为 `large`、`default`(不设置) 和 `small`。不同尺寸的开关适用于不同的场景和布局需求。

尺寸不仅影响开关本身的大小，还会影响内部文字的大小。大号开关适合需要更明显的交互元素，小号开关适合空间有限的场景。

## 自定义值
你可以设置 `active-value` 和 `inactive-value` 属性，它们接受 `Boolean`、`String` 或 `Number` 类型的值。

:::preview 自定义值
demo-preview=../components/switch-value.vue
:::

## 事件处理
绑定 `change` 事件来处理状态变化。当开关状态发生变化时，会触发 `change` 事件，并传入当前的值。

## Switch 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| model-value / v-model | 绑定值 | boolean / string / number | — | — |
| disabled | 是否禁用 | boolean | — | false |
| active-text | 打开时的文字描述 | string | — | — |
| inactive-text | 关闭时的文字描述 | string | — | — |
| active-value | 打开时的值 | boolean / string / number | — | true |
| inactive-value | 关闭时的值 | boolean / string / number | — | false |
| name | 原生 name 属性 | string | — | — |
| id | 原生 id 属性 | string | — | — |
| size | 开关的尺寸 | string | large / small | — |

## Switch 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 状态变化时的回调函数 | 新状态的值 |
| update:modelValue | 更新组件绑定的值 | 新状态的值 | 