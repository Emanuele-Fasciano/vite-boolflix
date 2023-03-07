<script>
import MovieCard from "./MovieCard.vue";
import { store } from "../data/store";

export default {
    data() {
        return {
            store
        }
    },

    components: {
        MovieCard
    },

    props: {
        results: Array
    }

}
</script>

<template>
    <div class="container">
        <slot></slot>
        <div class="row row-cols-2 row-cols-lg-3 gap-4 pb-4">
            <MovieCard class="col" v-for="result in results"
                :title="result.title || result.name"
                :origTitle="result.original_title || result.original_name"
                :language="result.original_language"
                :vote="Math.round(result.vote_average / 2)"
                :endImgUrl="result.poster_path"
                :overview="result.overview"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>