<template>
  <div class="demo-block">
    <Input v-model="input" type="textarea" placeholder="请输入多行文本" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Input from '../../src/components/Input/Input.vue'

const input = ref('')
</script> 