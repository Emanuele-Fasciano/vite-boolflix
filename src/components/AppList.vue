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
        <div class="row row-cols-2 row-cols-lg-3">
                <div class="col" v-for="result in results">
                     <font-awesome-icon icon="fa-solid fa-star" />
                    <MovieCard
                        :title="result.title || result.name"
                        :origTitle="result.original_title || result.original_name"
                        :language="result.original_language"
                        :vote="Math.round(result.vote_average) / 2"
                        :endImgUrl="result.poster_path"
                        :overview="result.overview"/>
                </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;

        li{
            border: 1px solid black;
            padding: 10px;
            margin: 10px;
        }
    }
</style>