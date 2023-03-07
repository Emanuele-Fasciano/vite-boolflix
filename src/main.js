import { createApp } from 'vue'
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

/* import fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
library.add(faStarSolid, faStarRegular)

import App from './App.vue'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
