<script setup lang="ts">
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import Item from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'
import VNode from './components/VNode.tsx'
import Tooltip from './components/Tooltip/Tooltip.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'
import Message from './components/Message/Message.vue'
import Switch from './components/Switch/Switch.vue'
import {createMessage} from './components/Message/method'
import type {MenuOption} from './components/Dropdown/types'
import type {Options} from '@popperjs/core'
import { ref, onMounted,h } from 'vue'
import type { ButtonInstance } from './components/Button/types'
import type {TooltipInstance} from './components/Tooltip/types'
import './styles/index.css'
const size=ref<any>('3x')
const openValue = ref(['a'])
const trigger=ref<any>('click')
const switchValue = ref(false)
const activeText = ref('开启')
const inactiveText = ref('关闭')
const options:MenuOption[]=[
  {key:'1',label:'1item',disabled:true},
  {key:'2',label:h('b',"bold here")},
  {key:'3',label:'33333',divided:true},
  {key:'4',label:'4'},
  
]
const open=()=>{
  tooltipRef.value?.show()
}
const close=()=>{
  tooltipRef.value?.hide()
}
const buttonRef = ref<ButtonInstance | null>(null)
const tooltipRef = ref<TooltipInstance | null>(null)
onMounted(() => {
  const instance=createMessage({
    message: 'hello world', duration: 0,
    type: 'info'
  })
  createMessage({
    message: 'hello world3', duration: 0,
    type: 'success'
  })
  createMessage({
    message: 'hello world5', duration: 0,
    type: 'warning'
  })
  createMessage({
    message: 'hello world2',
    type: 'info'
  })


  setTimeout(()=>{
    openValue.value=['a','b']
    size.value='2xl'
  },2000)

  })

const testClick = () => {
  alert(123)
}
</script>

<template>
  <div class="triangle"></div>

  <header>
    <Tooltip placement="top" :trigger="trigger" ref="tooltipRef" content="hi world">
  <img src="https://file.nbfox.com/wp-content/uploads/2020/04/25/20200425030943-5ea3a9f7bc897.jpg" height="200" ref="triggerNode" />
</Tooltip>
<Dropdown placement="left" :trigger="trigger" :menu-options="options">
  <img src="https://file.nbfox.com/wp-content/uploads/2020/03/11/20200311200942-5e694586af3af.jpg" height="200"/>
</Dropdown>
  </header>
  <main>
    <VNode msg="hi mimi"></VNode>
  <Icon icon="arrow-up" :size="size" spin type="primary" color="#d4c115"/>
  
    <Button type='primary' plain ref="buttonRef" @click="testClick">click Button</Button>
    <a href="https://www.nbfox.com/houses-in-the-snow-norway/">Houses in the Snow, Norway
    </a>
    <Button circle @click="open">STAR</Button>
    <Button loading>Test Button</Button>
    <Button plain @click="close">plain Button</Button>
    <Button round>Round Button</Button>
    <Button disabled>Disabled Button</Button>
    <Button type="success">Success</Button>
    <Button class="sg-button--success">sssss</Button>
    <Button type="info" icon="arrow-up">Info</Button>
    <Button type="warning">warning</Button>
    <Button type="danger">Danger</Button><br />
    <Button type="primary">Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain> Danger</Button><br />
    <Button size="large">Large</Button>
    <Button size="small">Small</Button>

<Collapse v-model="openValue" accordion>
      <Item name="a">
        <template #title>hi title</template>
        <h2>headline title</h2>
        <div>君子战震八方如风剑自当狂</div>
      </Item>
      <Item name="b" title="b title">
        <div>此夜少年回头望 走过千里万里长亭短亭此间人间</div>
      </Item>
      <Item name="c" title="this c" disabled>
        <div>试开霜刃请君指点</div>
      </Item>
    </Collapse>
<Switch v-model="switchValue" :active-text="activeText" :inactive-text="inactiveText" />
  </main>
</template>

<style scoped>
.triangle {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid red;
  border-top:20px solid transparent ;
}

</style>
