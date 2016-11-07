<template lang="pug">
    span(v-bind:style="{ 'background-color': color }" class='colorSpan')
</template>

<style lang="stylus" scoped>
    .colorSpan
        border-radius 100%
        background-color lightgrey
        width 2em
        height 2em
        display inline-block
        margin-right .5em
        vertical-align middle
</style>

<script>
export default {
    props: {
        color: {
            type: String,
            required: true
        }
    }
}
</script>
