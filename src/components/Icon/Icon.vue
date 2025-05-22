<template>
    <i class="sg-icon" :class="{ [`sg-icon--${type}`]: type }" style="customStyles" v-bind="$attrs">
        <font-awesome-icon v-bind="$props" />
    </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { IconProps } from './types'
defineOptions({
    name: 'SGIcon',
    inheritAttrs: false//停止透传到根组件
})
const props = defineProps<FontAwesomeIconProps & IconProps>()
const customStyles = computed(() => {
    return props.color ? { color: props.color } : {}
})
</script>