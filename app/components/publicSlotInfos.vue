<template lang="pug">
    div
        p
        | {{ slotInfo.day }} | {{ slotInfo.timeBegin }} - {{ slotInfo.timeEnd }}
        br
        em {{ timezone }}
</template>

<script>
// NPM imports
import moment from 'moment-timezone'

export default {
    props: {
        slotInfo: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            timezone: moment.tz.guess()
        }
    }
}
</script>
