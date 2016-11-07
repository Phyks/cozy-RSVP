<template lang="pug">
  div
    h1 {{ 'My RSVPs' }}

    event-types-nav(v-bind:eventTypes="eventTypes")

    p(v-if="loading") Loading...

    ul(v-if="RSVPItems")
      li(v-for="(RSVPItemsForDay, day) in RSVPItems")
        dashboard-day(
          v-bind:day="day",
          v-bind:RSVPItemsForDay="RSVPItemsForDay",
          v-bind:eventTypes="eventTypes",
          v-bind:onAccept="id => setRSVPStatus(id, 'accepted')",
          v-bind:onDiscard="id => setRSVPStatus(id, 'discarded')"
        )
    p.
      Times are in
      #[em {{ timezone }}]
      timezone.
</template>

<style lang="stylus" scoped>
  h1
    padding 0
  ul
    list-style-type none
    padding-left 40px
    padding-right 40px
  hr
    border 1px solid black
</style>

<script>
// NPM imports
import cozySDK from 'cozysdk-client'
import moment from 'moment-timezone'

// Models import
import RSVP from '../models/RSVP'

// Components imports
import eventTypesNav from '../components/eventTypesNav.vue'
import dashboardDay from '../components/dashboardDay.vue'

export default {
  data () {
    // Default data
    return {
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
      // Current user timezone
      timezone: moment.tz.guess(),
      // RSVP items
      RSVPItems: null,
      // An error message
      error: null,
      // Loading boolean
      loading: false
    }
  },
  created() {
    // Fetch data on component creation
    this.fetchData()
  },
  watch: {
    // Fetch data if the route changes
    '$route': 'fetchData'
  },
  methods: {
    /**
     * Fetch data
     */
    fetchData () {
      this.error = null
      this.RSVPItems = null
      this.loading = true

      return RSVP.getFromView('byday').then((data) => {
        this.RSVPItems = {}
        data.forEach((RSVPItem) => {
          const key = moment(RSVPItem.key).format('DD/MM/YYYY')
          if (!this.RSVPItems[key]) {
            this.RSVPItems[key] = []
          }
          this.RSVPItems[key].push(new RSVP(RSVPItem.value))
        })
        this.loading = false
      }).catch((error) => {
        this.RSVPItems = null
        this.loading = false
        this.error = error
      })
    },

    /**
     * Change status of given RSVP item.
     */
    setRSVPStatus (id, status) {
      return RSVP.update(
        id,
        { status: status }
      ).catch((error) => {
        this.error = error
      }).then(
        _ => RSVP.getById(id)
      ).then(
        RSVPItem => {
          const day = moment(RSVPItem.start).format('DD/MM/YYYY')
          const index = this.RSVPItems[day].findIndex(
            item => item._id == RSVPItem._id
          )
          // TODO: Not working
          this.$set(
            this.RSVPItems[day],
            index,
            RSVPItem
          )
        }
      )
    }
  },
  components: {
    dashboardDay,
    eventTypesNav
  }
}
</script>
