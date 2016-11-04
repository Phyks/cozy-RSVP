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
  const vueApp = new Vue({
    render: h => h(App),
    router
  })
  vueApp.$mount('[role=application]')
  console.log('App has been initialized.')
})
