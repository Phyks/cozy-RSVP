// NPM imports
import Vue from 'vue'
import VueRouter from 'vue-router'

// Local imports
import App from './App.vue'
import routes from './routes'

// Initialize Vue
Vue.use(VueRouter)

// Initialize Vue filters
Vue.filter(
    'capitalize',
    str => str.charAt(0).toUpperCase() + str.slice(1)
)

// Initialize router
const router = new VueRouter({
  base: '#apps/RSVP',
  routes
})

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('[role=application]')
  console.log('App has been initialized.')
})
