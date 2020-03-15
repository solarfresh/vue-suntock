import Vue from 'vue';
import VueRouter from 'vue-router';
import BWIBBU from '@/components/pages/BWIBBU';

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'BWIBBU', component: BWIBBU }
  ]
});
