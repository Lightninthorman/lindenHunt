import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Home from "./components/Home.vue";
import Maps from "./components/Maps.vue";
import ShowMap from "./components/ShowMap.vue";
import Challenges from "./components/Challenges.vue";
import New from "./components/New.vue";


Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
    routes:[
        {path:'/maps', component: Maps, name: 'maps'},
        {path:'/maps/:id', component: ShowMap, name: 'showmap'},
        {path:'/challenges', component: Challenges, name: 'challenges'},
        {path:'/new', component: New, name: 'new'},
        {path:'*', component: Home, name: 'home'}
    ]
})

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
