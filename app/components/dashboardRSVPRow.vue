<template lang="pug">
  tr
    td
      color-span(v-bind:color="eventTypes[RSVPItem.eventTypeHash].color")
      span {{ RSVPItem.start.format('HH:MM') }} - {{ RSVPItem.end.format('HH:MM') }}
    td
      template(v-for="(member, index) in RSVPItem.members")
        template(v-if="index > 0")
          | ,&#32;
        a(v-bind:href="'mailto:' + member.email") {{ member.name }}
      span {{ ' with you' }}
      br
      span
        span {{ '(' }}
          strong {{ eventTypes[RSVPItem.eventTypeHash].length }} minutes
          span {{ ' meeting)' }}
    td(v-if="RSVPItem.status", class="center")
      strong(class="upper") {{ RSVPItem.status | capitalize }}
    td(v-else, class="center")
      select
        option(selected) {{ '-' }}
        option(v-on:click="onAccept(RSVPItem._id)") {{ 'Accept' }}
        option(v-on:click="onDiscard(RSVPItem._id)") {{ 'Discard' }}
</template>

<style lang="stylus" scoped>
  td
    padding 1em
    padding-left 5vw
    padding-right 5vw
    line-height 1.75
</style>

<script>
import colorSpan from './colorSpan.vue'

export default {
  props: {
    eventTypes: {
      type: Object,
      required: true
    },
    RSVPItem: {
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
    colorSpan
  }
}
</script>
