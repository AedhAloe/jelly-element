import type { App, Component } from 'vue'

// Button 组件类型
export interface ButtonProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'large' | 'default' | 'small'
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  loading?: boolean
  icon?: string
  autofocus?: boolean
  nativetype?: 'button' | 'submit' | 'reset'
}

export type ButtonInstance = Component & {
  ref: HTMLButtonElement
}

// Input 组件类型
export interface InputProps {
  type?: 'text' | 'password' | 'number' | 'email' | 'tel' | 'url'
  modelValue?: string | number
  placeholder?: string
  disabled?: boolean
  clearable?: boolean
  showPassword?: boolean
  size?: 'large' | 'default' | 'small'
}

// Message 组件类型
export interface MessageOptions {
  message: string
  type?: 'success' | 'warning' | 'info' | 'error'
  duration?: number
  showClose?: boolean
}

// Dropdown 组件类型
export interface DropdownProps {
  trigger?: 'hover' | 'click'
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'
  disabled?: boolean
}

// Switch 组件类型
export interface SwitchProps {
  modelValue?: boolean
  disabled?: boolean
  loading?: boolean
  size?: 'large' | 'default' | 'small'
}

// Collapse 组件类型
export interface CollapseProps {
  modelValue?: string | string[]
  accordion?: boolean
}

// Tooltip 组件类型
export interface TooltipProps {
  content?: string
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
  trigger?: 'hover' | 'click' | 'focus' | 'manual'
  disabled?: boolean
}

// Icon 组件类型
export interface IconProps {
  icon: string
  spin?: boolean
  size?: string | number
  color?: string
}

// 组件声明
declare module 'jelly-element' {
  export const SGButton: Component
  export const SGInput: Component
  export const SGMessage: {
    (options: MessageOptions): void
    success: (message: string, duration?: number) => void
    warning: (message: string, duration?: number) => void
    info: (message: string, duration?: number) => void
    error: (message: string, duration?: number) => void
  }
  export const SGDropdown: Component
  export const SGSwitch: Component
  export const SGCollapse: Component
  export const SGTooltip: Component
  export const SGIcon: Component

  // 导出类型
  export type { 
    ButtonProps,
    ButtonInstance,
    InputProps,
    MessageOptions,
    DropdownProps,
    SwitchProps,
    CollapseProps,
    TooltipProps,
    IconProps
  }

  const install: (app: App) => void
  export default { install }
} 