// NPM imports
import Vue from 'vue'
import VueRouter from 'vue-router'

// Local imports
import App from './App.vue'
import routes from './routes'

// Initialize Vue
Vue.use(VueRouter)

// Initialize router
const router = new VueRouter({
  routes
})

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '[role=application]',
        render: h => h(App),
        router
    })
    console.log('App has been initialized.')
})
