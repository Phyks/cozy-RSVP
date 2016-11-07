<template lang="pug">
    div
        h2 Contact infos
        form(v-on:submit.prevent="onSubmit")
            p
                label(for="firstName", class="sr-only") First name
                input(id="firstName", name="firstName", size=12, placeholder="First name")

                label(for="lastName", class="sr-only") Last name
                input(id="lastName", name="lastName", size=12, placeholder="Last name")
            p
                label(for="email", class="sr-only") Email
                input(id="email", name="email", size=30, placeholder="Email")
            p
                input(type="submit", value="Confirmer")
</template>

<style lang="stylus" scoped>
    h2
        text-align center

    #firstName
        margin-right 1em
</style>

<script>
export default {
    props: {
        onSubmit: {
            type: Function,
            required: true
        }
    }
}
</script>
