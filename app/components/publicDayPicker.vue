<template lang="pug">
    div
        h2 Pick a day
        ul
            li(v-for="(_, day) in availableSlotsPerDay")
                router-link(v-bind:to="{ name: 'publicSlotSelectionView', params: { hash: hash, day: day } }")
                    | {{ day }}

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
    props: ['availableSlotsPerDay', 'hash']
}
</script>
