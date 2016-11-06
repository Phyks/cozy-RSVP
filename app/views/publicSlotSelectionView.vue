<template lang="pug">
    public-slot-picker(v-bind:hash="$route.params.hash", v-bind:availableSlots="availableSlotsPerDay[$route.params.day]", v-bind:day="$route.params.day")
</template>

<script>
import publicSlotPicker from '../components/publicSlotPicker.vue'

export default {
    data () {
        return {
            eventType: {
                hash: "15toto",
                length: 15,
                color: "yellow"
            },
            owner: {
                name: "Phyks"
            },
            availableSlotsPerDay: {
                "06-11-2016": [
                    "09:30 - 09:45"
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
        publicSlotPicker
    }
}
</script>
