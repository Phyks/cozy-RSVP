<template lang="pug">
  div
    h1 {{ 'My RSVPs' }}

    event-types-nav(v-bind:eventTypes="eventTypes")

    ul
        li(v-for="(RSVPItemsForDay, day) in RSVPItems")
            dashboard-day(v-bind:day="day", v-bind:RSVPItemsForDay="RSVPItemsForDay", v-bind:eventTypes="eventTypes")
    p
        em Times are in {{ timezone }} timezone.
</template>

<style lang="stylus" scoped>
    h1
        padding 0
    ul
        list-style-type none
        padding-left 40px
        padding-right 40px
    h2
        text-align left
        margin-bottom 0
    hr
        border 1px solid black
</style>

<script>
// NPM imports
import moment from 'moment-timezone'

// Components imports
import eventTypesNav from '../components/eventTypesNav.vue'
import dashboardDay from '../components/dashboardDay.vue'

export default {
    data () {
        return {
            RSVPItems: {
                "Tuesday, November 8, 2016": [
                    {
                        startTime: "09:30am",
                        endTime: "9:45am",
                        members: [
                            {
                                name: "Phyks",
                                email: "phyks@example.com"
                            }
                        ],
                        eventTypeHash: "15toto",
                        status: null
                    }
                ],
                "Wednesday, November 9, 2016": [
                    {
                        startTime: "09:45am",
                        endTime: "10:15am",
                        members: [
                            {
                                name: "Toto",
                                email: "toto@example.com"
                            },
                            {
                                name: "Toto mother",
                                email: "lameredetoto@example.com"
                            }
                        ],
                        eventTypeHash: "30toto",
                        status: "discarded"
                    }
                ]
            },
            eventTypes: {
                "15toto": {
                    length: 15,
                    color: "yellow"
                },
                "30toto": {
                    length: 30,
                    color: "orange"
                },
                "60toto": {
                    length: 60,
                    color: "red"
                }
            },
            timezone: moment.tz.guess()
        }
    },
    components: {
        dashboardDay,
        eventTypesNav
    }
}
</script>
