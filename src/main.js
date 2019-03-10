import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faExclamationCircle, faMinusCircle, faPencilAlt, faPlusCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import notifications3 from '@/assets/notifications-3.json'
import notifications4 from '@/assets/notifications-4.json'

library.add(faExclamationCircle, faMinusCircle, faPencilAlt, faPlusCircle, faQuestionCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.prototype.$notifications3 = notifications3
Vue.prototype.$notifications4 = notifications4

new Vue({
  render: h => h(App),
}).$mount('#app')
