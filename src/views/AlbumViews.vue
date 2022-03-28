<template>
  <div class="albums-wrapper" @click="$router.push({path: `/album/${album.albumId}`})">
    <img class="album-picture" :src="album.albumPicture" alt="#">
    <div class="album-title" v-text="album.albumName"></div>
  </div>
</template>

<script>
import albumDv from '@/assets/bd'

export default {
  name: "AlbumViews",
  props: {
    album: Object
  },
}
</script>

<style scoped>
.albums-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: calc(50% - 20px);
  border: 1px solid #000;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
}

.album-title {
  font-size: 20px;
  text-align: center;
  width: 100%;
}

.album-picture {
  width: 100%;
  height: 400px;
}
.albums-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: calc(50% - 20px);
  border: 1px solid #000;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
}

.album-title {
  font-size: 20px;
  text-align: center;
  width: 100%;
}

.album-picture {
  width: 100%;
  height: 400px;
}
</style>