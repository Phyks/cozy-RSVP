<template lang="pug">
  div
    h2 {{ day }}
    hr
    table
      dashboard-RSVP-row(
        v-for="RSVPItem in RSVPItemsForDay",
        v-bind:eventTypes="eventTypes",
        v-bind:RSVPItem="RSVPItem",
        v-bind:onAccept="onAccept",
        v-bind:onDiscard="onDiscard"
      )
</template>

<style lang="stylus" scoped>
  table
    margin auto
    text-align left

  h2
    text-align left
    margin-bottom 0
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
    },
    onAccept: {
      type: Function,
      required: true
    },
    onDiscard: {
      type: Function,
      required: true
    }
  },
  components: {
    dashboardRSVPRow
  }
}
</script>
