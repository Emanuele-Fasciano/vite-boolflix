<script>

export default {
    data() {
        return {
            flagUrl: `https://flagcdn.com/16x12/${this.language}.png`,
            posterUrl: `https://image.tmdb.org/t/p/w342${this.endImgUrl}`
        }
    },

    created(){
        
    },

    components: {

    },

    props: {
        title : String,
        origTitle: String,
        language: String,
        vote: Number,
        endImgUrl: String,
        overview: String
    }
    ,

    methods: {

    }

}
</script>

<template>
        <div class="myCard">
            <img :src="posterUrl" alt="" class="img-fluid">
            <div class="details">
                <p>Titolo: {{ title }}</p>
                <p v-if="title != origTitle">Titolo originale: {{ origTitle }}</p>
                <img :src="flagUrl" alt="">
                <p>{{ vote }}</p>
                <p>{{ overview }}</p>
            </div>
        </div>
</template>

<style lang="scss" scoped></style>