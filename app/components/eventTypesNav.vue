<template lang="pug">
  nav(class='horizontalMenu')
    ul
      li(v-for="(eventType, hash) in eventTypes")
        router-link(v-bind:to="{ name: 'publicView', params: { hash: hash } }")
          color-span(v-bind:color="eventType.color")
          | New {{ eventType.length }} mins meeting
</template>

<style lang="stylus" scoped>
  .horizontalMenu ul
    margin 0
    padding 0
    margin-bottom 1em
  .horizontalMenu li
    display inline
    text-align center
    margin 1em
</style>

<script>
import colorSpan from './colorSpan.vue'

export default {
  props: {
    eventTypes: {
      type: Object,
      required: true
    }
  },
  components: {
    colorSpan
  }
}
</script>
