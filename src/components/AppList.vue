<script>
import MovieCard from "./MovieCard.vue"

export default {
    data() {
        return {

        }
    },

    components: {
        MovieCard
    },

    props: {
        results: Array

    },

    methods: {

    }

}
</script>

<template>
    <div class="container">
        <slot></slot>
        <div class="row row-cols-2 row-cols-lg-3 gap-4">
                <!-- <div class="col" v-for="result in results"> -->
                    <MovieCard class="col" v-for="result in results"
                        :title="result.title || result.name"
                        :origTitle="result.original_title || result.original_name"
                        :language="result.original_language"
                        :vote="Math.round(result.vote_average) / 2"
                        :endImgUrl="result.poster_path"
                        :overview="result.overview"/>
                <!-- </div> -->

        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>