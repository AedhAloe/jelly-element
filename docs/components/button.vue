<script setup>
    import Button from '@/components/Button/Button.vue'
    import Icon from '@/components/Icon/Icon.vue'
</script>

<template>
    <Button>button</Button>
    <Button type="primary">primary</Button>
    <Button type="success">success</Button>
    <Button type="warning">warning</Button>
    <Button type="info">info</Button>
    <Button type="danger">danger</Button>
    <Button plain type="primary">button</Button>
    <Button plain type="success">success</Button>
    <Button plain type="warning">warning</Button>
    <Button plain type="info">info</Button>
    <Button plain type="danger">danger</Button>
    <Button loading>loading</Button>
    <Button size="small">small</Button>
    <Button size="large">large</Button>
    <Button circle>cirlce</Button>
    <Button round>round</Button>
    <Button disabled>disabled</Button>
</template>