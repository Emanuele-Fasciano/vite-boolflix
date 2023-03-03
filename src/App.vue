<script>
import AppHeader from './components/AppHeader.vue';
import AppList from './components/AppList.vue';
import axios from "axios"

export default {
  data() {
    return {
      moviesArray: []
    }
  },
  
  components: {
    AppHeader,
    AppList
  },
  
  methods:{
    fetchPage(term){
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=18b26ecbb6ab8ee2d4f49125ec324138&query=${term}`)
      .then((responseMovies) =>{
        this.moviesArray = responseMovies.data.results;
        console.log(responseMovies.data.results);
      })
    }
  }
  
}
</script>

<template>
  <AppHeader @search-term="fetchPage"/>
  <AppList :movies="moviesArray"/>
</template>

<style lang="scss"></style>