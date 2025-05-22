import DefaultTheme from 'vitepress/theme'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import './custom.css'

// 导入组件库相关
import '../../../src/styles/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Button from '../../../src/components/Button/Button.vue'
import Icon from '../../../src/components/Icon/Icon.vue'
import Input from '../../../src/components/Input/Input.vue'
import Collapse from '../../../src/components/Collapse/Collapse.vue'
import { Item } from '../../../src/components/Collapse'
import Dropdown from '../../../src/components/Dropdown/Dropdown.vue'
import Tooltip from '../../../src/components/Tooltip/Tooltip.vue'
import { createMessage } from '../../../src/components/Message/method'
import Switch from '../../../src/components/Switch/Switch.vue'

// 添加FontAwesome图标
library.add(fas)

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册组件库
    app.component('DemoPreview', ElementPlusContainer)
    app.component('FontAwesomeIcon', FontAwesomeIcon)
    app.component('SGButton', Button)
    app.component('SGIcon', Icon)
    app.component('SGInput', Input)
    app.component('Collapse', Collapse)
    app.component('Item', Item)
    app.component('Dropdown', Dropdown)
    app.component('Tooltip', Tooltip)
    app.component('Switch', Switch)
    
    // 全局方法
    app.config.globalProperties.$message = createMessage
  }
}