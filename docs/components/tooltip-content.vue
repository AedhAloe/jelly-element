<script setup>
import { ref } from 'vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>

<template>
  <div class="tooltip-content-demo">
    <Tooltip>
      <Button>自定义复杂HTML内容</Button>
      <template #content>
        <div>
          <h4 style="margin: 0; padding: 0 0 5px 0; border-bottom: 1px solid #ccc;">自定义标题</h4>
          <p style="margin: 10px 0 0 0;">这是一段<strong>自定义格式</strong>的提示内容</p>
        </div>
      </template>
    </Tooltip>
  </div>
</template>

<style scoped>
.tooltip-content-demo {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}
</style> 