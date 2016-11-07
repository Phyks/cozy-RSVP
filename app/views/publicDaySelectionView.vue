<template lang="pug">
    public-day-picker(v-bind:hash="$route.params.hash", v-bind:availableSlotsPerDay="availableSlotsPerDay")
</template>

<script>
import publicDayPicker from '../components/publicDayPicker.vue'

export default {
    data () {
        return {
            availableSlotsPerDay: {
                "06-11-2016": [
                ],
                "07-11-2016": [
                ],
                "08-11-2016": [
                ],
                "10-11-2016": [
                ]
            }
        }
    },
    components: {
        publicDayPicker
    }
}
</script>
