import './styles/index.css'
import { createApp } from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

library.add(fas)

createApp(App)
.mount('#app')