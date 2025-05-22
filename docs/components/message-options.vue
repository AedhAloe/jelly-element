<script setup>
import { ref } from 'vue'
import Button from '@/components/Button/Button.vue'
import { createMessage } from '@/components/Message/method'

const showNormal = () => {
  createMessage({
    message: '这是一条普通消息',
    type: 'info'
  })
}

const showLongTime = () => {
  createMessage({
    message: '这条消息将显示10秒钟',
    type: 'info',
    duration: 10000
  })
}

const showNoClose = () => {
  createMessage({
    message: '这条消息没有关闭按钮',
    type: 'warning',
    showClose: false
  })
}

const showWithCallback = () => {
  createMessage({
    message: '关闭时会触发回调',
    type: 'success',
    onClose: () => {
      createMessage({
        message: '回调函数已触发',
        type: 'info'
      })
    }
  })
}
</script>

<template>
  <div class="message-options-demo">
    <Button @click="showNormal">默认消息</Button>
    <Button @click="showLongTime">显示10秒</Button>
    <Button @click="showNoClose">无关闭按钮</Button>
    <Button @click="showWithCallback">关闭回调</Button>
  </div>
</template>

<style scoped>
.message-options-demo {
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
}
</style> 