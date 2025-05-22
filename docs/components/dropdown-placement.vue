<script setup>
import { ref } from 'vue'
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'

const menuOptions = [
  {
    label: '选项一',
    key: '1'
  },
  {
    label: '选项二',
    key: '2'
  },
  {
    label: '选项三',
    key: '3'
  }
]

const placements = [
  'bottom', 'bottom-start', 'bottom-end', 
  'top', 'top-start', 'top-end'
]

const handleSelect = (option) => {
  console.log('选中了:', option.label)
}
</script>

<template>
  <div class="placement-demo">
    <div v-for="placement in placements" :key="placement" class="placement-item">
      <Dropdown 
        :menu-options="menuOptions" 
        @select="handleSelect"
        :placement="placement"
      >
        <Button>{{ placement }}</Button>
      </Dropdown>
    </div>
  </div>
</template>

<style scoped>
.placement-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.placement-item {
  margin-bottom: 10px;
}
</style> 