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
        movies: Array

    },

    methods: {

    }

}
</script>

<template>
    <ul>
        <li v-for="movie in movies">
            <MovieCard
                :title="movie.title"
                :origTitle="movie.original_title"
                :language="movie.original_language"
                :vote="movie.vote_average"/>
        </li>
    </ul>
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