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
      <div class="card-container">
          <div class="myCard">
              <div class="front-card">
                  <img :src="posterUrl" alt="" class="img-fluid rounded">
              </div>
              <div class="back-card d-flex py-3">
                  <p class="fw-bold">Titolo: {{ title }}</p>
                  <p v-if="title != origTitle">Titolo originale: {{ origTitle }}</p>
                  <img :src="flagUrl" alt="">
                  <p>{{ vote }} <font-awesome-icon icon="fa-solid fa-star" /></p>
                  <p>{{ overview }}</p>
              </div>
          </div>
      </div>
</template>

<style lang="scss" scoped>

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .card-container{
        width: 342px;
        height: 512px;

        &:hover > .myCard{
              cursor: pointer;
              transform: rotateY(180deg);
        }

        .myCard {
            height: 100%;
            width: 100%;
            position: relative;
            transition: transform 1500ms;
            transform-style: preserve-3d;

            .front-card, .back-card{
                height: 100%;
                width: 100%;
                border-radius: 5px;
                position: absolute;
                backface-visibility: hidden;
            }

            .back-card {
                transform: rotateY(180deg);
                background-color: rgb(58, 52, 52);
                color: white;
                text-align: center;
                flex-direction: column;
                justify-content: center;

            }
                }


    }
</style>