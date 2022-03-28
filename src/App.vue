<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import AlbumsComponent from "@/views/AlbumsComponent";
import albumsData from "@/assets/bd"

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      albums: albumsData.albums
    }
  },
  mounted() {
    // console.log(this.albums)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}




</style>
