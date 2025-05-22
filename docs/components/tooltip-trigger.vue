<template>
  <div class="tooltip-trigger-demo">
    <Tooltip content="悬浮触发的提示" trigger="hover">
      <Button>悬浮触发</Button>
    </Tooltip>
    
    <Tooltip content="点击触发的提示" trigger="click">
      <Button>点击触发</Button>
    </Tooltip>
    
    <div>
    <Tooltip 
    content="手动控制的提示"
    ref="manualTooltip"
    manual
  >
    <Button> 手动容器 </Button>
  </Tooltip>

  <br/><br/>
  <Button type="primary" @click="open"> 点击手动触发显示 </Button>
  <Button type="danger" @click="close"> 点击手动触发隐藏 </Button>
</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'

const manualTooltip = ref(null)
const open = () => {
  manualTooltip.value.show()
}
const close = () => {
  manualTooltip.value.hide()
}
</script>

<style scoped>
.tooltip-trigger-demo {
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
}
</style> 