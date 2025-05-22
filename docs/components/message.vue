<script setup>
import { ref } from 'vue'
import Button from '@/components/Button/Button.vue'
import { createMessage } from '@/components/Message/method'

const showMessage = (type) => {
  createMessage({
    message: `这是一条${type}消息`,
    type: type
  })
}
</script>

<template>
  <div class="message-demo">
    <Button @click="showMessage('info')">信息提示</Button>
    <Button type="success" @click="showMessage('success')">成功提示</Button>
    <Button type="warning" @click="showMessage('warning')">警告提示</Button>
    <Button type="danger" @click="showMessage('error')">错误提示</Button>
  </div>
</template>

<style scoped>
.message-demo {
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
}
</style> 