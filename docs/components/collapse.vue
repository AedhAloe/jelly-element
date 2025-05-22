<script setup>
import Collapse from '@/components/Collapse/Collapse.vue'
import { Item } from '@/components/Collapse'
import { ref } from 'vue'

const openValue = ref(['a'])
</script>

<template>
    <Collapse v-model="openValue" accordion>
      <Item name="a">
        <template #title>hi title a</template>
        <h2>headline title</h2>
        <div>君子战震八方如风剑自当狂</div>
      </Item>
      <Item name="b" title="b title">
        <div>此夜少年回头望 走过千里万里长亭短亭此间人间</div>
      </Item>
      <Item name="c" title="this is c" disabled>
        <div>试开霜刃请君指点</div>
      </Item>
    </Collapse>
</template>