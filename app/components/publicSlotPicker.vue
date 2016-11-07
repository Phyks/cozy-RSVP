<template lang="pug">
    div
        h2 Pick a slot
        ul
            li(v-for="slot in availableSlots")
                 router-link(v-bind:to="{ name: 'publicContactInfosView', params: { hash: hash, day: day, timeBegin: slot.timeBegin, timeEnd: slot.timeEnd } }")
                    | {{ slot.timeBegin }} - {{ slot.timeEnd }}

        p.
            Times are in
            #[em {{ timezone }}]
            timezone.
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
// NPM imports
import moment from 'moment-timezone'

export default {
    props: {
        availableSlots: {
            type: Array,
            required: true
        },
        hash: {
            type: String,
            required: true
        },
        day: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            timezone: moment.tz.guess()
        }
    }
}
</script>
