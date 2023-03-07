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

  created(){
    
  },
  
  components: {
    AppHeader,
    AppList
  },
  
  methods:{
      fetchPageMovies(term){
        store.isPageLoading = true
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=18b26ecbb6ab8ee2d4f49125ec324138&query=${term}`)
        .then((response) =>{
          store.allResults = response.data.results
          store.moviesArray = store.allResults.filter(result => result.media_type == "movie")
          store.seriesArray = store.allResults.filter(result => result.media_type == "tv")

            // if(store.allResults == []){
            //     store.contentFound = false
            // }
        })
        
        .catch(() =>{
            store.allResults = []
        })

        .finally(()=>{
            store.isPageLoading = false
        })
      }

    }

  
}
</script>

<template>
  <div class="app">
    <div class="content"
     v-if="store.isPageLoading == false">
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
              <p class="not-found text-center pt-5 fs-3" 
              v-if="store.contentFound == false">
              Nessun elemento trovato
          </p>
    </div>
    <div class="loading text-center"
        v-else="store.isPageLoading == true">
      Loading...
    </div>
  </div>
</template>

<style lang="scss">
    .app{
      min-height: 100vh;
        background-color: rgb(21, 20, 20);
        color: white;

        .loading{
          position: absolute;
          padding-top: 10rem;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: rgba(255,255,255,0.5);
        }
    }
</style>