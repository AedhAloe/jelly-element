<template>
  <div class="demo-block">
    <Input v-model="input" placeholder="请输入内容" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Input from '../../src/components/Input/Input.vue'

const input = ref('')
</script> 