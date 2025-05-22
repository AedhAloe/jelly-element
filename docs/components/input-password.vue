<template>
  <div class="demo-block">
    <Input v-model="input" type="password" show-password placeholder="请输入密码" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Input from '../../src/components/Input/Input.vue'

const input = ref('')
</script> 