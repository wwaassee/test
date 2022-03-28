<template>
  <div class="container">
    <AlbumViews
        v-for="(album, index) in albums"
        :key="index"
        :album="album"
    />
  </div>
</template>

<script>
import AlbumViews from "@/views/AlbumViews";
import albumsData from "@/assets/bd";

export default {
  name: "AlbumsComponent",
  components: {AlbumViews},
  props: {
    album: Object
  },
  data() {
    return {
      albums: albumsData.albums
    }
  },
  mounted() {
    console.log(this.album)
  }
}
</script>

<style scoped>


</style>