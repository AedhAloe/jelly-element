<template>
  <div class="demo-block">
    <Input v-model="input" placeholder="带图标的输入框">
      <template #prefix>
        <Icon icon="search" />
      </template>
      <template #suffix>
        <Icon icon="calendar" />
      </template>
    </Input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Input from '../../src/components/Input/Input.vue'
import Icon from '../../src/components/Icon/Icon.vue'

const input = ref('')
</script> 