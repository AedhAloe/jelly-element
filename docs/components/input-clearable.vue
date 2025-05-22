<template>
  <div class="demo-block">
    <Input v-model="input" clearable placeholder="可清空" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Input from '../../src/components/Input/Input.vue'

const input = ref('')
</script> 