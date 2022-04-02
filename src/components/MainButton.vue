<template>
  <button @click="btnClick()" :style="{ background: color }" class="btn">{{ text }}</button>
</template>

<script>
export default {
    name: 'MainButton',
    props: {
        text: String,
        color: String,
    },
    methods: {
        btnClick() {
            this.$emit('btn-click')
        }
    }
}
</script>

<style>

</style>