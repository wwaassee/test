import Vue from 'vue'
import VueRouter from 'vue-router'
import AlbumsComponent from "@/views/AlbumsComponent";
import AlbumItem from "@/views/AlbumItem";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AlbumsComponent',
    component: AlbumsComponent
  },
  {
    path: '/album/:id?',
    name: 'AlbumItem',
    component: AlbumItem
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
