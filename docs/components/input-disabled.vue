<template>
  <div class="demo-block">
    <Input v-model="input" disabled placeholder="禁用状态" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Input from '../../src/components/Input/Input.vue'

const input = ref('')
</script> 