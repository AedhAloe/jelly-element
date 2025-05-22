---
title: Message
description: Message消息提示组件的文档
lang: zh-CN
---

# Message 消息提示
用于页面中展示重要提示信息的组件，常用于操作反馈。

## 基础用法
Message 组件提供了四种不同类型的消息提示：info、success、warning和error。

:::preview 基础用法
demo-preview=../components/message.vue
:::

## 不同选项
Message 组件可以设置不同的选项来满足各种需求：

- **显示时间**：通过`duration`属性可以自定义消息的显示时间，单位为毫秒，默认为3000ms
- **关闭按钮**：通过`showClose`属性可以控制是否显示关闭按钮
- **关闭回调**：通过`onClose`属性可以设置消息关闭时的回调函数

:::preview 不同选项
demo-preview=../components/message-options.vue
:::

## 全局方法
Message 组件可以通过全局方法 `createMessage` 来调用，参数为配置对象。

```js
import { createMessage } from '@/components/Message/method'

// 显示普通消息
createMessage({
  message: '这是一条消息.',
  type: 'info'
})

// 显示成功消息
createMessage({
  message: '操作成功',
  type: 'success'
})

// 显示警告消息
createMessage({
  message: '警告信息',
  type: 'warning'
})

// 显示错误消息
createMessage({
  message: '错误信息',
  type: 'error'
})
```

## Message 配置项

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| message | 消息文本内容 | string/VNode | — | — |
| type | 消息类型 | string | info/success/warning/error | info |
| duration | 显示时间，单位毫秒，设为0则不会自动关闭 | number | — | 3000 |
| showClose | 是否显示关闭按钮 | boolean | — | true |
| onClose | 关闭时的回调函数 | function | — | — |
| offset | 消息距离顶部的偏移量，单位像素 | number | — | 20 |
| transitionName | 过渡动画名称 | string | — | fade-up |

## 全局方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| createMessage | 创建一个消息提示 | 配置对象 | 消息实例 |

## Message 实例方法

通过 `createMessage` 方法返回的实例，可以调用以下方法：

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| destroy | 手动关闭消息 | — | 