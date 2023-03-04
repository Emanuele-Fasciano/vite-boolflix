<script>


export default {
    data() {
        return {
            term: ""
        }
    },

    emits: [
        "searchTerm"
    ],

    methods: {
        clearBar(){
            this.term = "";
        },

        startSearch(){
            this.$emit("searchTerm", this.term);
        }
    }

}
</script>

<template>
    <header class="py-3">
        <div class="container d-flex justify-content-between">
            <div class="logo">
                <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" class="img-fluid" alt="">
            </div>
            <form @submit.prevent="">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search..."
                            v-model="term">
                    <button class="btn btn-outline-secondary" type="button"
                            @click="startSearch()">
                        Search
                    </button>
                    <button class="btn btn-outline-secondary" type="button"
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
        }
    }

</style>