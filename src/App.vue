<script>
import AppHeader from './components/AppHeader.vue';
import AppList from './components/AppList.vue';
import axios from "axios"
import { store } from "./data/store"

export default {
  data() {
    return {
      store,
    }
  },

  
  components: {
    AppHeader,
    AppList
  },
  
  methods:{
      fetchPageMovies(term){
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=18b26ecbb6ab8ee2d4f49125ec324138&query=${term}`)
        .then((response) =>{
          store.allResults = response.data.results
          store.moviesArray = store.allResults.filter(result => result.media_type == "movie")
          store.seriesArray = store.allResults.filter(result => result.media_type == "tv")
        })
      }

    }

  
}
</script>

<template>
  <div class="app">
    <AppHeader @search-term="fetchPageMovies"/>
    <AppList :results="store.moviesArray">
      <h1 v-if="store.moviesArray.length > 0" class="pt-5">
        Movies {{ store.moviesArray.length }}
      </h1>
    </AppList>
    <AppList :results="store.seriesArray">
    <h1 v-if="store.seriesArray.length > 0" class="pt-5">
      Series {{ store.seriesArray.length }}
    </h1>
    </AppList>
  </div>
</template>

<style lang="scss">
    .app{
        background-color: rgb(21, 20, 20);
        color: white;
    }
</style>