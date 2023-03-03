<script>
import axios from 'axios';
export default {
    data() {
        return {
            img: `https://flagsapi.com/${this.language}/shiny/64.png`
        }
    },

    components: {

    },

    created(){
        axios.get("https://flagsapi.com/BE/flat/64.png")
        .then(response)
        console.log(response);
    },

    props: {
        title : String,
        origTitle: String,
        language: String,
        vote: Number
    }
    ,

    methods: {

    }

}
</script>

<template>
        <div class="myCard">
            <p>{{ title }}</p>
            <p>{{ origTitle }}</p>
            <img :src="img" alt="">
            <p>{{ vote }}</p>
        </div>
</template>

<style lang="scss" scoped></style>