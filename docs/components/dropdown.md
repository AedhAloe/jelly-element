---
title: Dropdown
description: Dropdown下拉菜单组件的文档
lang: zh-CN
---

# Dropdown 下拉菜单
用于显示链接列表的可下拉菜单。

## 基础用法
将触发元素放入 Dropdown 中，通过 `:menu-options` 属性设置下拉菜单的选项。

:::preview 基础用法
demo-preview=../components/dropdown.vue
:::

## 菜单位置
通过 `placement` 属性可以设置下拉菜单的弹出位置。

:::preview 菜单位置
demo-preview=../components/dropdown-placement.vue
:::

## 禁用选项与分割线
通过 `disabled` 禁用某个选项，添加 `divided: true` 可以在选项上方添加分割线。示例中的"选项三"被禁用，"选项四"上方有分割线。

## 触发方式
Dropdown 组件默认使用 hover 触发，可以通过 `trigger` 属性设置为 click 触发。

```vue
<Dropdown :menu-options="menuOptions" trigger="click">
  <Button>点击触发</Button>
</Dropdown>
```

## Dropdown 属性
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| menu-options | 下拉菜单选项 | MenuOption[] | — | [] |
| hide-after-click | 点击后是否隐藏下拉菜单 | boolean | — | true |
| trigger | 触发下拉的方式 | string | hover/click | hover |
| placement | 菜单弹出位置 | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom |
| open-delay | 展开延迟，单位毫秒 | number | — | 0 |
| close-delay | 关闭延迟，单位毫秒 | number | — | 0 |

## MenuOption 类型定义
```ts
export interface MenuOption {
  label: string | VNode; // 选项的标签文本
  key: string | number;  // 选项的唯一标识
  disabled?: boolean;    // 是否禁用
  divided?: boolean;     // 是否在此选项上方显示分割线
}
```

## Dropdown 事件
| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 选中下拉选项时触发 | 选中的菜单项 (MenuOption) |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |

## Dropdown 方法
| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| show | 显示下拉菜单 | — |
| hide | 隐藏下拉菜单 | — |

## Dropdown 插槽
| 插槽名 | 说明 |
| --- | --- |
| default | 触发下拉菜单显示的元素 | 