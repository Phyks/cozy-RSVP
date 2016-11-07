<template lang="pug">
    div
        public-slot-infos(v-bind:slotInfo="{ day: $route.params.day, timeBegin: $route.params.timeBegin, timeEnd: $route.params.timeEnd }", class="left")
        contact-infos(class="right", v-bind:onSubmit="submitForm")
</template>

<style lang="stylus" scoped>
    .left, .right
        width 30%
        display inline-block
        vertical-align top

    .left
        text-align right
        margin-right 1em

    .right
        margin-left 1em
</style>

<script>
    import contactInfos from '../components/contactInfos.vue'
    import publicSlotInfos from '../components/publicSlotInfos.vue'

    export default {
        components: {
            contactInfos,
            publicSlotInfos
        },
        methods: {
            submitForm (ev) {
                // TODO: Validation
                this.$router.push({ name: 'publicSlotSelectedView', params: this.$route.params })
            }
        }
    }
</script>
