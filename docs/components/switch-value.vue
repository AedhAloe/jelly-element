<script setup>
import { ref } from 'vue'
import Switch from '@/components/Switch/Switch.vue'

const value1 = ref('100')
const value2 = ref('0')

const handleChange = (val) => {
  console.log('当前值:', val)
}
</script>

<template>
  <div class="switch-value-demo">
    <div class="demo-item">
      <span>自定义值：</span>
      <Switch 
        v-model="value1" 
        active-value="100" 
        inactive-value="0"
        @change="handleChange"
      />
      <span>当前值：{{ value1 }}</span>
    </div>
    
    <div class="demo-item">
      <span>回调函数：</span>
      <Switch 
        v-model="value2" 
        active-text="开" 
        inactive-text="关"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<style scoped>
.switch-value-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.demo-item {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style> 