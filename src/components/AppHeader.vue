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
    <header>
        <div class="container">
            <div class="logo"></div>
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

</style>