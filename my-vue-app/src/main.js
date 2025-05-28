import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Лучше хранить роутер в отдельной папке

const app = createApp(App)
app.use(router)
app.mount('#app')