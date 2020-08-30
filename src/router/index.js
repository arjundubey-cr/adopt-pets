import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Cat from '../views/Cats.vue';
import Dog from '../views/Dogs.vue';
import Pet from '../views/Pet.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cat',
    name: 'Cat',
    component: Cat,
  },
  {
    path: '/dog',
    name: 'Dog',
    component: Dog,
  },
  {
    path: '/pets/:species/:id',
    name: 'Pet',
    component: Pet,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
