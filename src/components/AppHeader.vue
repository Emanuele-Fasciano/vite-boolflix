<script>
import { store } from "../data/store"

export default {
    data() {
        return {
            term: "",
            store
        }
    },

    emits: [
        "searchTerm"
    ],

    methods: {
        clearBar(){
            this.term = "";
            store.moviesArray = [];
            store.seriesArray = [];
        },

        startSearch(){
            store.moviesArray = [];
            store.seriesArray = [];
            this.$emit("searchTerm", this.term);

        }
    }

}
</script>

<template>
    <header class="py-3">
        <div class="container d-flex justify-content-between">
            <div class="logo"
                @click="clearBar()">
                <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" class="img-fluid" alt="">
            </div>
            <form @submit.prevent="">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search..."
                            v-model="term"
                            @keyup.enter="startSearch()">
                    <button class="btn btn-outline-secondary text-success" type="button"
                            @click="startSearch()">
                        Search
                    </button>
                    <button class="btn btn-outline-secondary text-danger" type="button"
                            @click="clearBar()">
                        Delate
                    </button>
                </div>
            </form>
        </div>

    </header>
</template>

<style lang="scss" scoped>
    header{
        background-color: black;
        .logo{
            width: 20%;
            cursor: pointer;
        }
    }

</style>