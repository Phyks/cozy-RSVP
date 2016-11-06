<template lang="pug">
    div
        h2 Pick a slot
        ul
            li(v-for="slot in availableSlots")
                 router-link(v-bind:to="{ name: 'publicSlotSelectedView', params: { hash: hash, day: day, slot: slot } }")
                    | {{ slot }}

        p
            em Times are in your computer local timezone.
</template>

<style lang="stylus" scoped>
    ul
        padding 0
    li
        list-style-type none
        margin-top 0.5em
        margin-bottom 0.5em
    a
        text-decoration none
        color black
        display inline-block
        border 1px solid blue
        border-radius 10%
        padding 0.5em
</style>

<script>
export default {
    props: ['availableSlots', 'hash', 'day']
}
</script>
