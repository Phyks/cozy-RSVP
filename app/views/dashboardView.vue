<template lang="pug">
  div
    h1 {{ 'My RSVPs' }}

    nav(class='horizontalMenu')
        ul
            li(v-for="(eventType, hash) in eventTypes")
                a(v-bind:href="'/public/' + eventType.hash")
                    span(v-bind:style="{ 'background-color': eventType.color }" class='colorSpan')
                    | New {{ eventType.length }} mins meeting
        button New event type

    ul
        li(v-for="(RSVPItemsForDay, day) in RSVPItems")
            h2 {{ day }}
            hr
            table
              tr(v-for="(RSVPItem, index) in RSVPItemsForDay")
                td
                    span(v-bind:style="{ 'background-color': eventTypes[RSVPItem.eventTypeHash].color }" class='colorSpan')
                    span {{ RSVPItem.startTime }} - {{ RSVPItem.endTime }}
                td
                  template(v-for="(member, index) in RSVPItem.members")
                    template(v-if="index > 0")
                        | ,&#32;
                    a(href='mailto:member.email') {{ member.name }}
                  span {{ ' with you' }}
                  br
                  span
                    span {{ '(' }}
                    strong {{ RSVPItem.length }} minutes
                    span {{ ' meeting)' }}
                td(v-if="RSVPItem.status", class="center")
                    strong(class="upper") {{ RSVPItem.status }}
                td(v-else, class="center")
                  select
                    option(selected) {{ '-' }}
                    option {{ 'Accept' }}
                    option {{ 'Discard' }}
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


    .horizontalMenu ul
        margin 0
        padding 0
        margin-bottom 1em
    .horizontalMenu li
        display inline
        text-align center
        margin 1em


    table
        margin auto
        text-align left
    td
        padding 1em
        padding-left 5vw
        padding-right 5vw
        line-height 1.75

    .upper
        text-transform capitalize
    .center
        text-align center
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
            }
        }
    }
}
</script>
