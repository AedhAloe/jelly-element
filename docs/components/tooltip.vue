<script setup>
import { ref } from 'vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>

<template>
  <div class="tooltip-demo">
    <Tooltip content="这是一个提示文本">
      <Button>默认提示</Button>
    </Tooltip>
    
    <Tooltip content="这是一个提示文本" placement="top">
      <Button>上方提示</Button>
    </Tooltip>
    
    <Tooltip content="这是一个提示文本" placement="right">
      <Button>右侧提示</Button>
    </Tooltip>
    
    <Tooltip content="这是一个提示文本" placement="left">
      <Button>左侧提示</Button>
    </Tooltip>
  </div>
</template>

<style scoped>
.tooltip-demo {
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
}
</style> 