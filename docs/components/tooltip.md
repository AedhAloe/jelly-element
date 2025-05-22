---
title: Tooltip
description: Tooltip提示组件的文档
lang: zh-CN
---

# Tooltip 文字提示
常用于展示鼠标悬停时的提示信息。

## 基础用法
Tooltip 组件提供了多种不同方位的展示方式，使用`placement`属性来设置提示的出现位置。

:::preview 基础用法
demo-preview=../components/tooltip.vue
:::

## 触发方式
Tooltip 组件提供了多种不同的触发方式，默认为`hover`触发，可以使用`trigger`属性设置为`click`触发。
还可以使用`manual`属性和`show()`、`hide()`方法手动控制提示的显示和隐藏。

:::preview 触发方式
demo-preview=../components/tooltip-trigger.vue
:::

## 自定义内容
除了使用`content`属性设置简单的文本提示外，还可以使用插槽自定义复杂的HTML内容。

:::preview 自定义内容
demo-preview=../components/tooltip-content.vue
:::

## 显示和隐藏延迟
使用`open-delay`和`close-delay`属性可以设置提示显示和隐藏的延迟时间。

```vue
<Tooltip content="延迟显示和隐藏" :open-delay="500" :close-delay="500">
  <Button>延迟提示</Button>
</Tooltip>
```

## Tooltip 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| content | 显示的内容 | string | — | — |
| placement | 提示的出现位置 | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom |
| trigger | 触发方式 | string | hover/click | hover |
| manual | 是否手动控制 | boolean | — | false |
| open-delay | 延迟显示，单位毫秒 | number | — | 0 |
| close-delay | 延迟关闭，单位毫秒 | number | — | 0 |
| transition | 过渡动画 | string | — | fade |
| popper-options | Popper.js 的选项 | object | 参考 [popper.js](https://popper.js.org/docs/v2/) 文档 | {} |

## Tooltip 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| visible-change | 显示状态变更时触发 | 显示为 true，隐藏为 false |

## Tooltip 方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| show | 显示 Tooltip | — |
| hide | 隐藏 Tooltip | — |

## Tooltip 插槽

| 插槽名 | 说明 |
| --- | --- |
| default | 触发 Tooltip 显示的元素 |
| content | 自定义内容 | 