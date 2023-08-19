import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
// Import Global Components
import LinkBtn from './components/ui/buttons/LinkBtn.vue';
import WrapBox from './components/ui/WrapBox.vue';
import Breadcrumb from './components/ui/Breadcrumb.vue';
import SwitchBtn from './components/ui/buttons/SwitchBtn.vue';
import WrapBoxTitle from './components/ui/titles/WrapBoxTitle.vue'

import App from './App.vue';
import router from './router';

const app = createApp(App);
// Registered Components
app.component('LinkBtn', LinkBtn);
app.component('WrapBox', WrapBox);
app.component('Breadcrumb', Breadcrumb);
app.component('SwitchBtn', SwitchBtn);
app.component('WrapBoxTitle', WrapBoxTitle);

app.use(createPinia('LinkBtn', LinkBtn));
app.use(router);

app.mount('#app');
