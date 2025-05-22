// 导入所有组件
import JellyButton from './components/Button'
import JellyDropdown from './components/Dropdown'
import JellyMessage from './components/Message'
import JellyInput from './components/Input'
import JellySwitch from './components/Switch'
import JellyCollapse from './components/Collapse'
import JellyTooltip from './components/Tooltip'
import JellyIcon from './components/Icon'

// 导入样式
import './styles/index.css'

// 组件列表
const components = [
  JellyButton,
  JellyDropdown,
  JellyMessage,
  JellyInput,
  JellySwitch,
  JellyCollapse,
  JellyTooltip,
  JellyIcon,
]

// 定义 install 方法
const install = (app: any) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

// 导出所有组件
export {
  JellyButton,
  JellyDropdown,
  JellyMessage,
  JellyInput,
  JellySwitch,
  JellyCollapse,
  JellyTooltip,
  JellyIcon,
}

// 默认导出
export default {
  install,
} 