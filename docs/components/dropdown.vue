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
    key: '3',
    disabled: true
  },
  {
    label: '选项四',
    key: '4',
    divided: true,
  },
  
]

const handleSelect = (option) => {
  console.log('选中了:', option.label)
}
</script>

<template>
  <Dropdown :menu-options="menuOptions" @select="handleSelect">
    <Button>下拉菜单</Button>
  </Dropdown>
</template> 