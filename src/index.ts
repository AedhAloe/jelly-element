// 导入所有组件
import SGButton from './components/Button/Button.vue'
import SGDropdown from './components/Dropdown/Dropdown.vue'
import SGMessage from './components/Message/Message.vue'
import SGInput from './components/Input/Input.vue'
import SGSwitch from './components/Switch/Switch.vue'
import SGCollapse from './components/Collapse/Collapse.vue'
import SGTooltip from './components/Tooltip/Tooltip.vue'
import SGIcon from './components/Icon/Icon.vue'

// 导入样式
import './styles/index.css'

// 组件列表
const components = [
  SGButton,
  SGDropdown,
  SGMessage,
  SGInput,
  SGSwitch,
  SGCollapse,
  SGTooltip,
  SGIcon,
]

// 定义 install 方法
const install = (app: any) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

// 导出所有组件
export {
  SGButton,
  SGDropdown,
  SGMessage,
  SGInput,
  SGSwitch,
  SGCollapse,
  SGTooltip,
  SGIcon,
}

// 导出类型
export type { ButtonProps, ButtonInstance } from './components/Button/types'

// 默认导出
export default {
  install,
} 