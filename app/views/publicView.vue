<template lang="pug">
  div
    h1
        color-span(v-bind:color="eventType.color")
        | {{ eventType.length }} minutes meeting
        | with&#32;
        a(v-bind:href="'mailto:' + owner.email") {{ owner.name }}

    router-view

    div(v-if="$route.name != 'publicSlotSelectedView'")
        button(v-on:click="back") Back
</template>

<style lang="stylus" scoped>
    h1
        display inline-block
</style>

<script>
import colorSpan from '../components/colorSpan.vue'

export default {
    data () {
        return {
            eventType: {
                hash: "15toto",
                length: 15,
                color: "yellow"
            },
            owner: {
                name: "Phyks",
                email: "phyks@example.com"
            }
        }
    },
    methods: {
        back(ev) {
            this.$router.go(-1)
        }
    },
    components: {
        colorSpan
    }
}
</script>
