<script>
import AppHeader from './components/AppHeader.vue';
import AppList from './components/AppList.vue';
import axios from "axios"

export default {
  data() {
    return {
      allResults: [],
      moviesArray: [],
      seriesArray: [],
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
          this.allResults = response.data.results
          this.moviesArray = this.allResults.filter(result => result.media_type == "movie")
          this.seriesArray = this.allResults.filter(result => result.media_type == "tv")
        })
      }

    }

  
}
</script>

<template>
  <AppHeader @search-term="fetchPageMovies"/>
  <AppList :results="moviesArray">
    <h1 v-if="moviesArray.length > 0">movies {{ moviesArray.length }}</h1>
  </AppList>
  <AppList :results="seriesArray">
  <h1 v-if="seriesArray.length > 0">series {{ seriesArray.length }}</h1>
  </AppList>
</template>

<style lang="scss"></style>