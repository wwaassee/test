<template>
  <div class="container">
    <router-link to="/">BACK</router-link>
    <ul class="animal-items">
      <li class="animal-item"
        v-for="animal in animals"
        :key="animal.id"
      >
        <img :src="animal.photo" alt="#">
        <div class="">{{ animal.name }}</div>
      </li>
    </ul>
    <div class="dnd">
      <h2>Drag and drop</h2>
      <div class="animal-item-dnd"
          v-for="animal in animals"
          :key="animal.id"
      >
        <movable class="testmove" :posLeft="`${animal.id}00`" :grid="20">
        <img :src="animal.photo" alt="#">
        <div class="">{{ animal.name }}</div>
        </movable>
      </div>
    </div>
  </div>
</template>

<script>
import animalBd from '@/assets/bd'

export default {
  name: "AlbumItem",
  data() {
    return {
      animals: null
    }
  },
  mounted() {
    let id = this.$route.params.id
    // console.log(animalBd.albums)
    let a = animalBd.albums.filter(i => i.albumId === +id)
    this.animals = a[0].albumItems

  }
}
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}
li {
  list-style: none;
  width: calc(33% - 10px);
}
li img {
  width: 100%;
}

.testmove {
  display:block;
  position: absolute;
  height: 150px;
  width: 150px;
  color: white;
}

.dnd {
  position: relative;
  width: 1400px;
  height: 1000px;
}

.animal-item-dnd img{
  width: 200px;
}
</style>