<script setup>
import { ref } from 'vue'
import Switch from '@/components/Switch/Switch.vue'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(true)
const value5 = ref(true)
</script>

<template>
  <div class="switch-demo">
    <div class="demo-item">
      <span>基础用法：</span>
      <Switch v-model="value1" />
    </div>
    
    <div class="demo-item">
      <span>禁用状态：</span>
      <Switch v-model="value2" disabled />
    </div>
    
    <div class="demo-item">
      <span>文字描述：</span>
      <Switch v-model="value3" active-text="开启" inactive-text="关闭" />
    </div>
    
    <div class="demo-item">
      <span>不同尺寸：</span>
      <div class="size-demo">
        <div>
          <span>小号</span>
          <Switch v-model="value4" size="small" />
        </div>
        <div>
          <span>默认</span>
          <Switch v-model="value4" />
        </div>
        <div>
          <span>大号</span>
          <Switch v-model="value4" size="large" />
        </div>
      </div>
    </div>
    
    <div class="demo-item">
      <span>带文字的不同尺寸：</span>
      <div class="size-demo">
        <div>
          <span>小号</span>
          <Switch v-model="value5" size="small" active-text="开" inactive-text="关" />
        </div>
        <div>
          <span>默认</span>
          <Switch v-model="value5" active-text="开启" inactive-text="关闭" />
        </div>
        <div>
          <span>大号</span>
          <Switch v-model="value5" size="large" active-text="开启" inactive-text="关闭" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.switch-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.demo-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.demo-item > span {
  font-weight: bold;
  margin-bottom: 5px;
}
.size-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.size-demo > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
</style> 