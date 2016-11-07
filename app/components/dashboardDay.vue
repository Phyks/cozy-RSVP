<template lang="pug">
    div
        h2 {{ day }}
        hr
        table
            dashboard-RSVP-row(v-for="RSVPItem in RSVPItemsForDay", v-bind:eventTypes="eventTypes", v-bind:RSVPItem="RSVPItem")
</template>

<style lang="stylus" scoped>
    table
        margin auto
        text-align left
</style>

<script>
import dashboardRSVPRow from './dashboardRSVPRow.vue'

export default {
    props: {
        day: {
            type: String,
            required: true
        },
        RSVPItemsForDay: {
            type: Array,
            required: true
        },
        eventTypes: {
            type: Object,
            required: true
        }
    },
    components: {
        dashboardRSVPRow
    }
}
</script>
